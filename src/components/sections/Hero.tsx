"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { smoothEase } from "@/lib/motion";
import { useI18n } from "@/components/i18n/I18nProvider";

export function Hero() {
  const reduce = useReducedMotion();
  const { m } = useI18n();

  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0 : 0.55,
      delay: reduce ? 0 : 0.1 + i * 0.09,
      ease: smoothEase,
    },
  });

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-canvas pt-20 dark:bg-canvas-dark">
      <div className="blueprint-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
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
              className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]"
              {...item(1)}
            >
              {m.hero.titleA}{" "}
              <span className="text-accent">{m.hero.titleB}</span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl dark:text-ink-faint"
              {...item(2)}
            >
              {m.hero.description}
            </motion.p>

            <motion.div className="mt-10 flex flex-wrap gap-3" {...item(3)}>
              <Button href="#contact" variant="primary" size="lg">
                {m.hero.discussBtn}
              </Button>
              <Button href="#services" variant="outline" size="lg">
                {m.hero.servicesBtn}
              </Button>
            </motion.div>

            <motion.div
              className="mt-14 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3 dark:border-line-dark dark:bg-line-dark"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduce ? 0 : 0.5,
                delay: reduce ? 0 : 0.42,
                ease: smoothEase,
              }}
            >
              {m.hero.stats.map((stat) => (
                <div
                  key={stat.t}
                  className="min-w-0 bg-canvas px-4 py-4 dark:bg-canvas-dark"
                >
                  <span className="font-display text-2xl font-bold tabular-nums text-ink dark:text-white">
                    {stat.n}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-ink-muted dark:text-ink-faint">
                    {stat.t}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative hidden lg:block"
            initial={reduce ? false : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: reduce ? 0 : 0.65,
              delay: reduce ? 0 : 0.2,
              ease: smoothEase,
            }}
          >
            <div className="overflow-hidden rounded-md border border-line bg-canvas-elevated shadow-2xl shadow-ink/8 dark:border-line-dark dark:bg-canvas-elevated-dark dark:shadow-black/40">
              <div className="flex items-center justify-between border-b border-line px-4 py-2.5 dark:border-line-dark">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E06B5E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D4A84B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                </div>
                <span className="font-mono text-[10px] text-ink-faint">ship.ts</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-ink-muted dark:text-ink-faint">
                <code>
                  <span className="text-accent">const</span>{" "}
                  <span className="text-ink dark:text-white">project</span>{" "}
                  <span className="text-ink-faint">=</span>{" "}
                  <span className="text-[#D4A84B]">{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-ink-faint">name:</span>{" "}
                  <span className="text-[#6BBF7B]">{"\""}your-idea{"\""}</span>
                  {","}
                  {"\n"}
                  {"  "}
                  <span className="text-ink-faint">stack:</span>{" "}
                  <span className="text-[#D4A84B]">[</span>
                  <span className="text-[#6BBF7B]">{"\""}React{"\""}</span>
                  {", "}
                  <span className="text-[#6BBF7B]">{"\""}Node{"\""}</span>
                  <span className="text-[#D4A84B]">]</span>
                  {","}
                  {"\n"}
                  {"  "}
                  <span className="text-ink-faint">ship:</span>{" "}
                  <span className="text-accent">true</span>
                  {"\n"}
                  <span className="text-[#D4A84B]">{"}"}</span>
                  {";"}
                  {"\n\n"}
                  <span className="text-ink-faint/70">// мы доведём до релиза</span>
                </code>
              </pre>
            </div>
            <div className="absolute -bottom-3 -left-3 border border-line bg-canvas-elevated px-3 py-1.5 font-mono text-[11px] text-ink-muted shadow-lg dark:border-line-dark dark:bg-canvas-elevated-dark dark:text-ink-faint">
              build → deploy → scale
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
