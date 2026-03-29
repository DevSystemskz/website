"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";

const listItems = [
  "Анализ требований и проектирование архитектуры",
  "Гибкие методологии и регулярные демо",
  "Чистый код, тесты и документация",
  "Поддержка после запуска и развитие продукта",
];

export function About() {
  const { section, item } = useStaggerVariants();

  return (
    <motion.section
      id="about"
      className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28 dark:border-slate-800 dark:bg-slate-900/50"
      variants={section}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={item}>
            <SectionTitle
              tag="О нас"
              title="Команда, которая превращает идеи в работающий код"
              description="Мы фокусируемся на качестве, сроках и прозрачной коммуникации. Каждый проект ведёт выделенная команда с опытом в вашей области."
            />
            <ul className="mt-8 space-y-4">
              {listItems.map((text) => (
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
                Рассказать о проекте
              </Button>
            </div>
          </motion.div>
          <motion.div className="relative" variants={item}>
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-800/30 lg:p-10"
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <blockquote className="text-lg text-slate-600 dark:text-slate-300">
                «Работа с DevSystems позволила нам вывести продукт на рынок в срок. Команда понимает бизнес-задачи и предлагает практичные технические решения.»
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold dark:bg-indigo-500/20 dark:text-indigo-400">
                  АК
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Алексей К.</p>
                  <p className="text-sm text-slate-500">CTO, FinTech-стартап</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
