"use client";

import { Container } from "@/components/ui/Container";
import { useI18n } from "@/components/i18n/I18nProvider";
import { SITE_URL } from "@/lib/site";
import { messages } from "@/i18n/messages";

/** Default RU FAQ for static JSON-LD (primary site language). */
export const homeFaq = messages.ru.sections.faqItems;

export function Faq() {
  const { m } = useI18n();
  const items = m.sections.faqItems;

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
          {m.sections.faqTag}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
          {m.sections.faqTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-ink-muted dark:text-ink-faint">
          {m.sections.faqDesc}
        </p>
        <dl className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.question}
              className="border border-line bg-canvas-elevated p-5 dark:border-line-dark dark:bg-canvas-elevated-dark"
            >
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
