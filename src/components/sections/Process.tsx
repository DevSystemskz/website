"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";
import { useI18n } from "@/components/i18n/I18nProvider";
import { type Locale } from "@/i18n/messages";

function getSteps(locale: Locale) {
  if (locale === "en") {
    return [
      {
        number: "01",
        title: "Discovery and Analysis",
        description: "We align goals, audience, and constraints. Scope and priorities are documented.",
      },
      {
        number: "02",
        title: "Design and Architecture",
        description: "Architecture, UX flows, and implementation plan with milestones.",
      },
      {
        number: "03",
        title: "Development",
        description: "Sprint delivery, demos, and continuous feedback loop.",
      },
      {
        number: "04",
        title: "Launch and Support",
        description: "Deployment, monitoring, and product evolution after release.",
      },
    ];
  }

  return [
    {
      number: "01",
      title: "Обсуждение и анализ",
      description: "Уточняем цели, аудиторию и ограничения. Фиксируем объем и приоритеты.",
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
}

export function Process() {
  const { section, item, grid } = useStaggerVariants();
  const { m, locale } = useI18n();
  const steps = getSteps(locale);

  return (
    <motion.section
      id="process"
      className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28 dark:border-slate-800 dark:bg-slate-900/50"
      variants={section}
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <motion.div variants={item}>
          <SectionTitle
            tag={m.sections.processTag}
            title={m.sections.processTitle}
            description={m.sections.processDesc}
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
