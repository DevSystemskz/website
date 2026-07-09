"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useI18n } from "@/components/i18n/I18nProvider";
import { viewportOnce } from "@/components/motion/useStaggerVariants";

export function TrustStrip() {
  const { m } = useI18n();

  return (
    <section className="border-b border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4 }}
        >
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            {m.trust.tag}
          </p>
          <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
            {m.trust.title}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {m.trust.industries.map((label) => (
              <span
                key={label}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300"
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
