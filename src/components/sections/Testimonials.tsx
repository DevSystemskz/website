"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialCard } from "./TestimonialCard";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";

const testimonials = [
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
      "Помогли перенести инфраструктуру в облако. Всё документировано, передача прошла гладко.",
    author: "Никита В.",
    role: "CTO",
    company: "DataFlow",
  },
];

export function Testimonials() {
  const { section, item, grid } = useStaggerVariants();

  return (
    <motion.section
      className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28 dark:border-slate-800 dark:bg-slate-900/50"
      variants={section}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <motion.div variants={item}>
          <SectionTitle
            tag="Отзывы"
            title="Что говорят клиенты"
            description="Реальные проекты и долгосрочное сотрудничество."
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
