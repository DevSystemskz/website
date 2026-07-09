"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";
import { useI18n } from "@/components/i18n/I18nProvider";

export function Engineering() {
  const { section, item, grid } = useStaggerVariants();
  const { m } = useI18n();

  return (
    <motion.section
      className="border-t border-slate-200 bg-white py-20 lg:py-28 dark:border-slate-800 dark:bg-slate-900"
      variants={section}
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <motion.div variants={item}>
          <SectionTitle
            tag={m.engineering.tag}
            title={m.engineering.title}
            description={m.engineering.desc}
          />
        </motion.div>
        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={grid}
        >
          {m.engineering.items.map((block) => (
            <motion.div
              key={block.title}
              variants={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-800/30"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {block.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {block.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
