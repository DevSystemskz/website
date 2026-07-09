"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { smoothEase } from "@/lib/motion";
import { useI18n } from "@/components/i18n/I18nProvider";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();
  const { m } = useI18n();

  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0 : 0.55,
      delay: reduce ? 0 : 0.12 + i * 0.1,
      ease: smoothEase,
    },
  });

  return (
    <section className="relative min-h-[65vh] overflow-hidden bg-slate-50 pt-20 lg:pt-20 dark:bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.15),transparent)]" />
      <motion.div
        className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-500/10"
        aria-hidden
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.55, 0.35],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="min-w-0 flex-1 max-w-3xl">
            <motion.p
              className="mt-10 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300 sm:mt-12"
              {...item(0)}
            >
              {m.hero.badge}
            </motion.p>
            <motion.h1
              className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:mt-8 lg:text-6xl dark:text-white"
              {...item(1)}
            >
              {m.hero.titleA}{" "}
              <span className="text-indigo-600 dark:text-indigo-400">{m.hero.titleB}</span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-slate-600 sm:text-xl dark:text-slate-400"
              {...item(2)}
            >
              {m.hero.description}
            </motion.p>
            <motion.div className="mt-10 flex flex-wrap gap-3" {...item(3)}>
              <Button href="#contact" variant="primary" size="lg">
                {m.hero.discussBtn}
              </Button>
              <Button href="#portfolio" variant="outline" size="lg">
                {m.hero.casesBtn}
              </Button>
              <Button
                href={siteConfig.calendlyUrl}
                variant="ghost"
                size="lg"
                external
              >
                {m.hero.calendlyBtn}
              </Button>
              <Button
                href={siteConfig.telegramUrl}
                variant="ghost"
                size="lg"
                external
              >
                {m.hero.telegramBtn}
              </Button>
            </motion.div>

            <motion.p
              className="mt-6 text-sm text-slate-500 dark:text-slate-500"
              {...item(4)}
            >
              {m.hero.trustLine}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-8 text-sm text-slate-600 dark:text-slate-500"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: reduce ? 0 : 0.5,
                delay: reduce ? 0 : 0.45,
                ease: smoothEase,
              }}
            >
              {m.hero.stats.map((stat, i) => (
                <motion.div
                  key={stat.t}
                  className="flex items-center gap-2"
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: reduce ? 0 : 0.5 + i * 0.08,
                    duration: reduce ? 0 : 0.4,
                    ease: smoothEase,
                  }}
                >
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {stat.n}
                  </span>
                  <span>{stat.t}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative mt-10 hidden flex-shrink-0 md:mt-0 md:block md:w-[360px]"
            initial={reduce ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: reduce ? 0 : 0.65,
              delay: reduce ? 0 : 0.25,
              ease: smoothEase,
            }}
          >
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-xl shadow-indigo-500/10 backdrop-blur dark:border-slate-700 dark:bg-slate-800/80">
              <div className="mb-3 flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <pre className="overflow-x-auto text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                <code>
                  <span className="text-indigo-600 dark:text-indigo-400">async function</span>{" "}
                  <span className="text-slate-800 dark:text-slate-100">shipFeature</span>
                  <span className="text-slate-500">() {"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-slate-500">await</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">discovery</span>
                  <span className="text-slate-500">();</span>
                  {"\n"}
                  {"  "}
                  <span className="text-slate-500">await</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">build</span>
                  <span className="text-slate-500">({"{"}</span>
                  {"\n"}
                  {"    "}
                  <span className="text-slate-500">rag:</span>{" "}
                  <span className="text-indigo-600 dark:text-indigo-400">true</span>
                  {","}
                  {"\n"}
                  {"    "}
                  <span className="text-slate-500">tests:</span>{" "}
                  <span className="text-indigo-600 dark:text-indigo-400">true</span>
                  {"\n"}
                  {"  "}
                  <span className="text-slate-500">{"});"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-slate-500">return</span>{" "}
                  <span className="text-indigo-600 dark:text-indigo-400">production</span>
                  <span className="text-slate-500">;</span>
                  {"\n"}
                  <span className="text-slate-500">{"}"}</span>
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
