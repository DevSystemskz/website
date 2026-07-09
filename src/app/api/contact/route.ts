import { NextRequest, NextResponse } from "next/server";

const PROJECT_LABELS: Record<string, string> = {
  ai: "AI / LLM / RAG",
  mvp: "MVP / новый продукт",
  web: "Веб / B2B",
  mobile: "Mobile",
  support: "Поддержка",
  other: "Другое",
};

const BUDGET_LABELS: Record<string, string> = {
  under10: "до $10k",
  mid: "$10k – $30k",
  high: "$30k – $80k",
  enterprise: "$80k+",
  unknown: "не определён",
};

const TIMELINE_LABELS: Record<string, string> = {
  asap: "ASAP",
  oneThree: "1–3 месяца",
  threePlus: "3+ месяца",
  flexible: "Гибко",
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      name?: string;
      email?: string;
      message?: string;
      projectType?: string;
      budget?: string;
      timeline?: string;
      nda?: boolean;
    };

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 },
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Telegram не настроен. Проверьте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в настройках Vercel и сделайте повторный деплой.",
        },
        { status: 500 },
      );
    }

    const lines = [
      "💬 Новая заявка с сайта",
      "",
      `Имя / Компания: ${name}`,
      `Email: ${email}`,
    ];

    if (body.projectType) {
      lines.push(
        `Тип: ${PROJECT_LABELS[body.projectType] ?? body.projectType}`,
      );
    }
    if (body.budget) {
      lines.push(`Бюджет: ${BUDGET_LABELS[body.budget] ?? body.budget}`);
    }
    if (body.timeline) {
      lines.push(`Срок: ${TIMELINE_LABELS[body.timeline] ?? body.timeline}`);
    }
    if (body.nda) {
      lines.push("NDA: да");
    }

    lines.push("", "Сообщение:", message);

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const tgRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join("\n"),
      }),
    });

    if (!tgRes.ok) {
      const data = await tgRes.json().catch(() => null);
      console.error("Telegram error", data);
      return NextResponse.json(
        { success: false, error: "Failed to send to Telegram" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 },
    );
  }
}
