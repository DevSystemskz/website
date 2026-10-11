"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { springSnappy } from "@/lib/motion";
import { useI18n } from "@/components/i18n/I18nProvider";
import { HeroShowcase } from "@/components/sections/HeroShowcase";

export function Hero() {
  const reduce = useReducedMotion();
  const { m } = useI18n();

  return (
    <section className="relative overflow-hidden bg-canvas pt-20 dark:bg-canvas-dark">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 bottom-32 hidden h-[280px] w-[280px] rounded-full bg-accent/6 blur-3xl md:block dark:bg-accent/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-20 hidden h-[420px] w-[420px] rounded-full bg-accent/8 blur-3xl md:block dark:bg-accent/12"
        aria-hidden
      />

      <Container className="relative pb-14 lg:pb-16">
        <div className="grid items-center gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="min-w-0">
            <p className="mt-8 font-display text-4xl font-bold tracking-tight text-ink sm:mt-10 sm:text-5xl lg:mt-12 lg:text-[3.25rem] dark:text-white">
              DevSystems
            </p>

            <p className="mt-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {m.hero.eyebrow}
            </p>

            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-ink dark:text-white sm:text-4xl lg:text-[2.75rem]">
              {m.hero.titleA}{" "}
              <span className="text-accent-gradient">{m.hero.titleB}</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg dark:text-ink-faint">
              {m.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.div
                whileHover={reduce ? undefined : { scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                transition={springSnappy}
              >
                <Button href="#contact" variant="primary" size="lg">
                  {m.hero.discussBtn}
                </Button>
              </motion.div>
              <motion.div
                whileHover={reduce ? undefined : { scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                transition={springSnappy}
              >
                <Button href="#portfolio" variant="outline" size="lg">
                  {m.hero.portfolioBtn}
                </Button>
              </motion.div>
            </div>
          </div>

          <HeroShowcase />
        </div>
      </Container>
    </section>
  );
}
