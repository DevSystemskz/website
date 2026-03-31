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
        "Requirements analysis and architecture planning",
        "Agile process with regular demos",
        "Clean code, tests, and technical documentation",
        "Post-release support and product growth",
      ],
      quote:
        "Working with DevSystems helped us launch on time. The team understands business goals and offers practical technical solutions.",
      person: "Alexey K.",
      role: "CTO, FinTech startup",
      initials: "AK",
    };
  }
  if (locale === "kk") {
    return {
      listItems: [
        "Талаптарды талдау және архитектураны жобалау",
        "Икемді әдістемелер және тұрақты демо",
        "Таза код, тесттер және құжаттама",
        "Релизден кейінгі қолдау және өнімді дамыту",
      ],
      quote:
        "DevSystems-пен жұмыс өнімді нарыққа уақытында шығаруға көмектесті. Команда бизнес-міндеттерді түсінеді және практикалық техникалық шешімдер ұсынады.",
      person: "Алексей К.",
      role: "CTO, FinTech-стартап",
      initials: "АК",
    };
  }

  return {
    listItems: [
      "Анализ требований и проектирование архитектуры",
      "Гибкие методологии и регулярные демо",
      "Чистый код, тесты и документация",
      "Поддержка после запуска и развитие продукта",
    ],
    quote:
      "Работа с DevSystems позволила нам вывести продукт на рынок в срок. Команда понимает бизнес-задачи и предлагает практичные технические решения.",
    person: "Алексей К.",
    role: "CTO, FinTech-стартап",
    initials: "АК",
  };
}

export function About() {
  const { section, item } = useStaggerVariants();
  const { m, locale } = useI18n();
  const about = getAboutData(locale);

  return (
    <motion.section
      id="about"
      className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28 dark:border-slate-800 dark:bg-slate-900/50"
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
                  className="flex items-start gap-3 text-slate-600 dark:text-slate-300"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400" />
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
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-800/30 lg:p-10"
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <blockquote className="text-lg text-slate-600 dark:text-slate-300">
                {`"${about.quote}"`}
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold dark:bg-indigo-500/20 dark:text-indigo-400">
                  {about.initials}
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{about.person}</p>
                  <p className="text-sm text-slate-500">{about.role}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
