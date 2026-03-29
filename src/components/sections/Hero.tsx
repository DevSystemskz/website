"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { smoothEase } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();

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
      <motion.div
        className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-600/10"
        aria-hidden
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.12, 1],
                opacity: [0.3, 0.5, 0.3],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <Container className="relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="min-w-0 flex-1 max-w-3xl">
            <motion.h1
              className="mt-10 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:mt-12 sm:text-5xl lg:mt-14 lg:text-6xl dark:text-white"
              {...item(0)}
            >
              Создаём цифровые продукты, которые{" "}
              <span className="text-indigo-600 dark:text-indigo-400">работают на бизнес</span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-slate-600 sm:text-xl dark:text-slate-400"
              {...item(1)}
            >
              Веб-приложения, мобильные приложения, облачные решения и техническая поддержка. От идеи до запуска и масштабирования.
            </motion.p>
            <motion.div className="mt-10 flex flex-wrap gap-4" {...item(2)}>
              <Button href="#contact" variant="primary" size="lg">
                Обсудить проект
              </Button>
              <Button href="#services" variant="outline" size="lg">
                Наши услуги
              </Button>
            </motion.div>

            <motion.div
              className="mt-16 flex flex-wrap gap-8 text-sm text-slate-600 dark:text-slate-500"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: reduce ? 0 : 0.5,
                delay: reduce ? 0 : 0.45,
                ease: smoothEase,
              }}
            >
              {[
                { n: "50+", t: "реализованных проектов" },
                { n: "8+", t: "лет на рынке" },
                { n: "100%", t: "фокус на качестве" },
              ].map((stat, i) => (
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
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">{stat.n}</span>
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
            <motion.div
              animate={
                reduce
                  ? undefined
                  : {
                      y: [0, -10, 0],
                    }
              }
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-xl shadow-indigo-500/10 backdrop-blur dark:border-slate-700 dark:bg-slate-800/80 dark:shadow-indigo-500/5">
                <div className="mb-3 flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <pre className="overflow-x-auto text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <code>
                    <span className="text-indigo-600 dark:text-indigo-400">const</span>{" "}
                    <span className="text-slate-800 dark:text-slate-100">project</span>{" "}
                    <span className="text-slate-500">=</span>{" "}
                    <span className="text-amber-600 dark:text-amber-400">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-slate-500">name:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">{"\""}your-idea{"\""}</span>
                    {","}
                    {"\n"}
                    {"  "}
                    <span className="text-slate-500">stack:</span>{" "}
                    <span className="text-amber-600 dark:text-amber-400">[</span>
                    <span className="text-emerald-600 dark:text-emerald-400">{"\""}React{"\""}</span>
                    {", "}
                    <span className="text-emerald-600 dark:text-emerald-400">{"\""}Node{"\""}</span>
                    <span className="text-amber-600 dark:text-amber-400">]</span>
                    {","}
                    {"\n"}
                    {"  "}
                    <span className="text-slate-500">ship:</span>{" "}
                    <span className="text-indigo-600 dark:text-indigo-400">true</span>
                    {"\n"}
                    <span className="text-amber-600 dark:text-amber-400">{"}"}</span>
                    {";"}
                    {"\n\n"}
                    <span className="text-slate-500">// мы доведём до релиза</span>
                  </code>
                </pre>
              </div>
              <motion.div
                className="absolute -right-4 -top-4 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-500 shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
                animate={
                  reduce
                    ? undefined
                    : {
                        y: [0, -4, 0],
                        rotate: [0, 1.5, 0],
                      }
                }
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                {"<DevSystems />"}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
