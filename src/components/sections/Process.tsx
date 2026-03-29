"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";

const steps = [
  {
    number: "01",
    title: "Обсуждение и анализ",
    description: "Уточняем цели, аудиторию и ограничения. Фиксируем объём и приоритеты.",
  },
  {
    number: "02",
    title: "Проектирование",
    description: "Архитектура, макеты и план работ. Согласуем этапы и сроки.",
  },
  {
    number: "03",
    title: "Разработка",
    description: "Спринты, демо и обратная связь. Вы всегда в курсе прогресса.",
  },
  {
    number: "04",
    title: "Запуск и поддержка",
    description: "Деплой, мониторинг и развитие продукта после релиза.",
  },
];

export function Process() {
  const { section, item, grid } = useStaggerVariants();

  return (
    <motion.section
      id="process"
      className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28 dark:border-slate-800 dark:bg-slate-900/50"
      variants={section}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <motion.div variants={item}>
          <SectionTitle
            tag="Процесс"
            title="Как мы работаем"
            description="Прозрачные этапы от первого звонка до запуска и дальнейшей поддержки."
          />
        </motion.div>
        <motion.div
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={grid}
        >
          {steps.map((step, i) => (
            <motion.div key={step.number} className="relative" variants={item}>
              {i < steps.length - 1 && (
                <div className="absolute left-8 top-14 hidden h-0.5 w-[calc(100%-2rem)] bg-gradient-to-r from-indigo-400/50 to-transparent dark:from-indigo-500/50 lg:block" />
              )}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-800/30">
                <span className="text-3xl font-bold text-indigo-500/80 dark:text-indigo-400/80">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
