"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";
import { useI18n } from "@/components/i18n/I18nProvider";
import { type Locale } from "@/i18n/messages";

function getAboutData(locale: Locale) {
  if (locale === "en") {
    return {
      listItems: [
        "Brief and budget range in 1–2 days",
        "Offer and lead path before visual polish",
        "Sprint demos before the next payment",
        "Live cases in Astana you can open today",
      ],
      trustTitle: "How we work",
      trustPoints: [
        { label: "Estimate", value: "1–2 days" },
        { label: "Typical landing", value: "1–2 weeks" },
        { label: "Chat", value: "Telegram / WhatsApp" },
        { label: "Live cases", value: "3 in production" },
      ],
    };
  }
  if (locale === "kk") {
    return {
      listItems: [
        "Бриф және бюджет вилкасы — 1–2 күнде",
        "Алдымен оффер мен өтінім жолы, содан кейін визуал",
        "Келесі төлемге дейін спринт демосы",
        "Астанадағы тірі кейстер — бүгін ашуға болады",
      ],
      trustTitle: "Қалай жұмыс істейміз",
      trustPoints: [
        { label: "Бағалау", value: "1–2 күн" },
        { label: "Типтік лендинг", value: "1–2 апта" },
        { label: "Байланыс", value: "Telegram / WhatsApp" },
        { label: "Тірі кейстер", value: "3 продакшенде" },
      ],
    };
  }

  return {
    listItems: [
      "Бриф и вилка бюджета за 1–2 дня",
      "Сначала оффер и путь заявки, потом визуал",
      "Демо спринта до следующей оплаты",
      "Живые кейсы в Астане — можно открыть сегодня",
    ],
    trustTitle: "Как работаем",
    trustPoints: [
      { label: "Оценка", value: "1–2 дня" },
      { label: "Типовой лендинг", value: "1–2 недели" },
      { label: "Связь", value: "Telegram / WhatsApp" },
      { label: "Живые кейсы", value: "3 в продакшене" },
    ],
  };
}

export function About() {
  const { section, item } = useStaggerVariants();
  const { m, locale } = useI18n();
  const about = getAboutData(locale);

  return (
    <motion.section
      id="about"
      className="ds-section bg-canvas dark:bg-canvas-dark"
      variants={section}
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={item}>
            <SectionTitle
              tag={m.sections.aboutTag}
              title={m.sections.aboutTitle}
              description={m.sections.aboutDesc}
            />
            <ul className="mt-8 space-y-4">
              {about.listItems.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 text-ink-muted dark:text-ink-faint"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                  {text}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="#contact" variant="primary" size="md">
                {m.sections.tellProject}
              </Button>
            </div>
          </motion.div>
          <motion.div className="relative" variants={item}>
            <motion.div
              className="border border-line bg-canvas-elevated p-8 dark:border-line-dark dark:bg-canvas-elevated-dark lg:p-10"
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {about.trustTitle}
              </p>
              <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                {about.trustPoints.map((point) => (
                  <div key={point.label}>
                    <dt className="text-sm text-ink-faint">{point.label}</dt>
                    <dd className="mt-1 font-display text-xl font-semibold text-ink dark:text-white">
                      {point.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
