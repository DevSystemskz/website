import { Container } from "@/components/ui/Container";
import { SITE_URL } from "@/lib/site";

export const homeFaq = [
  {
    question: "Сколько занимает лендинг?",
    answer: "Обычно 1–2 недели после брифа и согласования структуры страницы.",
  },
  {
    question: "Что входит в сайт?",
    answer:
      "Дизайн, вёрстка, адаптация под телефон, формы заявок, базовая SEO-разметка и запуск.",
  },
  {
    question: "Когда будет оценка?",
    answer: "Оценку и план работ готовим за 1–2 дня после описания задачи.",
  },
  {
    question: "На каких языках делаете сайт?",
    answer: "На русском, казахском и английском — на одном или нескольких сразу.",
  },
  {
    question: "Где вы работаете?",
    answer: "В Астане и удалённо по Казахстану.",
  },
] as const;

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    url: SITE_URL,
  };

  return (
    <section id="faq" className="ds-section bg-canvas dark:bg-canvas-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <p className="inline-flex items-center gap-2 border-l-2 border-accent pl-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Вопросы
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
          Коротко о работе
        </h2>
        <dl className="mt-10 grid gap-6 md:grid-cols-2">
          {homeFaq.map((item) => (
            <div key={item.question} className="border border-line bg-canvas-elevated p-5 dark:border-line-dark dark:bg-canvas-elevated-dark">
              <dt className="font-display text-lg font-semibold text-ink dark:text-white">
                {item.question}
              </dt>
              <dd className="mt-2 text-ink-muted dark:text-ink-faint">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
