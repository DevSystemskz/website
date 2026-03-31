"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { smoothEase } from "@/lib/motion";
import { viewportOnce } from "@/components/motion/useStaggerVariants";
import { useI18n } from "@/components/i18n/I18nProvider";

export function CTABanner() {
  const reduce = useReducedMotion();
  const { m } = useI18n();

  return (
    <motion.section
      className="border-t border-slate-200 bg-white py-20 lg:py-28 dark:border-slate-800 dark:bg-slate-900"
      initial={reduce ? false : { opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewportOnce}
      transition={{ duration: reduce ? 0 : 0.55, ease: smoothEase }}
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-indigo-300 bg-gradient-to-br from-indigo-50 to-slate-100 p-8 dark:border-indigo-500/30 dark:from-indigo-500/10 dark:to-slate-800/80 lg:p-12">
          <motion.div
            className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/20"
            animate={
              reduce
                ? undefined
                : {
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0.65, 0.4],
                  }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              {m.sections.ctaTitle}
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              {m.sections.ctaDesc}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#contact" variant="primary" size="lg">
                {m.sections.leaveRequest}
              </Button>
              <Button href="mailto:devsystemg@gmail.com" variant="outline" size="lg">
                devsystemg@gmail.com
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
