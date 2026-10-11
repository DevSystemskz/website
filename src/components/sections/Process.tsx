"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";
import { useI18n } from "@/components/i18n/I18nProvider";
import { type Locale } from "@/i18n/messages";
import { springSnappy } from "@/lib/motion";

function getSteps(locale: Locale) {
  if (locale === "en") {
    return [
      {
        number: "01",
        title: "Brief",
        description: "You describe the task in a chat or form. Goals, deadline, and budget if you have one.",
      },
      {
        number: "02",
        title: "Estimate in 1–2 days",
        description: "We send a budget range, stages, and timeline — before any invoice.",
      },
      {
        number: "03",
        title: "Build with demos",
        description: "Structure → design → layout. You see progress each stage before the next payment.",
      },
      {
        number: "04",
        title: "Launch",
        description: "Ship a landing for leads or an MVP for the startup — with demos already approved.",
      },
    ];
  }
  if (locale === "kk") {
    return [
      {
        number: "01",
        title: "Бриф",
        description: "Міндетті чатта немесе формада сипаттайсыз. Мақсат, мерзім, бюджет болса — соны.",
      },
      {
        number: "02",
        title: "1–2 күнде бағалау",
        description: "Бюджет вилкасы, кезеңдер және мерзім — шотқа дейін жібереміз.",
      },
      {
        number: "03",
        title: "Демомен жасау",
        description: "Құрылым → дизайн → верстка. Әр кезеңді келесі төлемге дейін көресіз.",
      },
      {
        number: "04",
        title: "Іске қосу",
        description: "Өтінім лендингін немесе стартап MVP-ін шығарамыз — демолар алдын ала келісілген.",
      },
    ];
  }

  return [
    {
      number: "01",
      title: "Бриф",
      description: "Описываете задачу в чате или форме. Цель, срок, бюджет если есть.",
    },
    {
      number: "02",
      title: "Оценка за 1–2 дня",
      description: "Присылаем вилку бюджета, этапы и сроки — до любого счёта.",
    },
    {
      number: "03",
      title: "Сборка с демо",
      description: "Структура → дизайн → вёрстка. Каждый этап видите до следующей оплаты.",
    },
      {
      number: "04",
      title: "Запуск",
      description: "Выводим лендинг под заявки или MVP для стартапа — с уже согласованными демо.",
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
      className="ds-section bg-canvas-muted dark:bg-canvas-elevated-dark"
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
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6"
          variants={grid}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={item}
              whileHover={{ y: -4, transition: springSnappy }}
              className="border border-line bg-canvas-elevated p-6 dark:border-line-dark dark:bg-canvas-dark"
            >
              <p className="font-mono text-xs font-medium tracking-[0.16em] text-accent">
                {step.number}
              </p>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-ink-faint">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
