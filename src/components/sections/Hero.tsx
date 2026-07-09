"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { smoothEase, springSnappy } from "@/lib/motion";
import { useI18n } from "@/components/i18n/I18nProvider";
import { CountUp } from "@/components/motion/CountUp";
import { HeroTerminal } from "@/components/motion/HeroTerminal";
import { RevealWords } from "@/components/motion/RevealWords";

export function Hero() {
  const reduce = useReducedMotion();
  const { m } = useI18n();
  const { scrollY } = useScroll();
  const orbLeftY = useTransform(scrollY, [0, 700], [0, 100]);
  const orbRightY = useTransform(scrollY, [0, 700], [0, -80]);

  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: {
      duration: reduce ? 0 : 0.55,
      delay: reduce ? 0 : 0.08 + i * 0.09,
      ease: smoothEase,
    },
  });

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-canvas pt-20 dark:bg-canvas-dark">
      <div className="blueprint-grid pointer-events-none absolute inset-0" aria-hidden />
      <motion.div
        style={{ y: reduce ? 0 : orbLeftY }}
        className="pointer-events-none absolute -left-24 bottom-32 h-[280px] w-[280px] rounded-full bg-accent/6 blur-3xl dark:bg-accent/10"
        aria-hidden
      />
      <motion.div
        style={{ y: reduce ? 0 : orbRightY }}
        className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-accent/8 blur-3xl dark:bg-accent/12"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          <div className="min-w-0">
            <motion.p
              className="mt-10 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent sm:mt-12 lg:mt-14"
              {...item(0)}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              DevSystems
            </motion.p>

            <motion.h1
              className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink dark:text-white sm:text-5xl lg:text-[3.5rem]"
              {...item(1)}
            >
              <RevealWords text={m.hero.titleA} delay={0.12} className="text-inherit" />{" "}
              <motion.span
                className="text-accent-gradient inline-block"
                initial={reduce ? false : { opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: reduce ? 0 : 0.55,
                  delay: reduce ? 0 : 0.55,
                  ease: smoothEase,
                }}
              >
                {m.hero.titleB}
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl dark:text-ink-faint"
              {...item(2)}
            >
              {m.hero.description}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.38, duration: 0.5, ease: smoothEase }}
            >
              <motion.div whileHover={reduce ? undefined : { scale: 1.03 }} whileTap={reduce ? undefined : { scale: 0.98 }} transition={springSnappy}>
                <Button href="#contact" variant="primary" size="lg">
                  {m.hero.discussBtn}
                </Button>
              </motion.div>
              <motion.div whileHover={reduce ? undefined : { scale: 1.03 }} whileTap={reduce ? undefined : { scale: 0.98 }} transition={springSnappy}>
                <Button href="#services" variant="outline" size="lg">
                  {m.hero.servicesBtn}
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-14 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3 dark:border-line-dark dark:bg-line-dark"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduce ? 0 : 0.55,
                delay: reduce ? 0 : 0.48,
                ease: smoothEase,
              }}
            >
              {m.hero.stats.map((stat, i) => (
                <motion.div
                  key={stat.t}
                  className="stat-cell min-w-0 bg-canvas px-4 py-4 dark:bg-canvas-dark"
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: reduce ? 0 : 0.55 + i * 0.1,
                    duration: 0.45,
                    ease: smoothEase,
                  }}
                  whileHover={reduce ? undefined : { y: -2 }}
                >
                  <CountUp
                    value={stat.n}
                    className="font-display text-2xl font-bold tabular-nums text-ink dark:text-white"
                  />
                  <span className="mt-1 block text-xs leading-snug text-ink-muted dark:text-ink-faint">
                    {stat.t}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <HeroTerminal />
        </div>
      </Container>
    </section>
  );
}
