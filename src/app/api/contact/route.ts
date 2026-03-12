import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = (await req.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 },
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set");
      return NextResponse.json(
        { success: false, error: "Telegram is not configured" },
        { status: 500 },
      );
    }

    const text = [
      "💬 Новая заявка с сайта",
      "",
      `Имя / Компания: ${name}`,
      `Email: ${email}`,
      "",
      "Сообщение:",
      message,
    ].join("\n");

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const tgRes = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
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

