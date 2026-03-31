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
          "Deadlines were met and code quality was excellent. Highly recommended for complex web products.",
        author: "Igor M.",
        role: "Founder",
        company: "MarketPlace Pro",
      },
      {
        quote:
          "Clear process and frequent demos. Mobile app was released to stores on schedule.",
        author: "Olga T.",
        role: "Product Owner",
        company: "HealthApp",
      },
      {
        quote:
          "Cloud migration was smooth and fully documented. Great handover and support.",
        author: "Nikita V.",
        role: "CTO",
        company: "DataFlow",
      },
    ];
  }

  return [
    {
      quote:
        "Сроки соблюдены, качество кода на высоте. Рекомендую для сложных веб-проектов.",
      author: "Игорь М.",
      role: "Основатель",
      company: "MarketPlace Pro",
    },
    {
      quote:
        "Понятный процесс, регулярные демо. Мобильное приложение вышло в сторы в срок.",
      author: "Ольга Т.",
      role: "Product Owner",
      company: "HealthApp",
    },
    {
      quote:
        "Помогли перенести инфраструктуру в облако. Все документировано, передача прошла гладко.",
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
