"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialCard } from "./TestimonialCard";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";
import { useI18n } from "@/components/i18n/I18nProvider";
import { type Locale } from "@/i18n/messages";

function getTestimonials(locale: Locale) {
  if (locale === "en") {
    return [
      {
        quote:
          "Shipped our B2B portal in 14 weeks with weekly demos. Code review and docs made handover to our team straightforward.",
        author: "Igor M.",
        role: "Founder",
        company: "MarketPlace Pro",
      },
      {
        quote:
          "RAG support bot went live in 8 weeks — L1 tickets dropped noticeably. Clear scope and no surprise invoices.",
        author: "Olga T.",
        role: "Product Owner",
        company: "HealthApp",
      },
      {
        quote:
          "AWS migration with runbooks and monitoring. We kept the same release cadence during the transition.",
        author: "Nikita V.",
        role: "CTO",
        company: "DataFlow",
      },
    ];
  }
  if (locale === "kk") {
    return [
      {
        quote:
          "B2B-портал 14 аптада, апта сайын демо. Code review және құжаттама — командға оңай тапсырылды.",
        author: "Игорь М.",
        role: "Негізін қалаушы",
        company: "MarketPlace Pro",
      },
      {
        quote:
          "RAG-бот 8 аптада — L1 тикеттер азайды. Scope ашық, қоныс surprises жоқ.",
        author: "Ольга Т.",
        role: "Product Owner",
        company: "HealthApp",
      },
      {
        quote:
          "AWS көшіру runbook пен мониторингпен. Релиз циклі үзілмеді.",
        author: "Никита В.",
        role: "CTO",
        company: "DataFlow",
      },
    ];
  }

  return [
    {
      quote:
        "B2B-портал за 14 недель, демо каждую неделю. Code review и документация — передали команде без боли.",
      author: "Игорь М.",
      role: "Основатель",
      company: "MarketPlace Pro",
    },
    {
      quote:
        "RAG-бот поддержки за 8 недель — заметно меньше тикетов L1. Scope прозрачный, без сюрпризов по смете.",
      author: "Ольга Т.",
      role: "Product Owner",
      company: "HealthApp",
    },
    {
      quote:
        "Миграция в AWS с runbook и мониторингом. Релизный цикл не просел на переходе.",
      author: "Никита В.",
      role: "CTO",
      company: "DataFlow",
    },
  ];
}

export function Testimonials() {
  const { section, item, grid } = useStaggerVariants();
  const { m, locale } = useI18n();
  const testimonials = getTestimonials(locale);

  return (
    <motion.section
      className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28 dark:border-slate-800 dark:bg-slate-900/50"
      variants={section}
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <motion.div variants={item}>
          <SectionTitle
            tag={m.sections.testimonialsTag}
            title={m.sections.testimonialsTitle}
            description={m.sections.testimonialsDesc}
          />
        </motion.div>
        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-3"
          variants={grid}
        >
          {testimonials.map((t) => (
            <motion.div key={t.author} variants={item}>
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
