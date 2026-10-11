"use client";

import { motion, useReducedMotion } from "framer-motion";

type Token =
  | { t: "plain"; v: string }
  | { t: "kw"; v: string }
  | { t: "fn"; v: string }
  | { t: "str"; v: string }
  | { t: "prop"; v: string }
  | { t: "cmt"; v: string }
  | { t: "num"; v: string };

const lines: Token[][] = [
  [{ t: "kw", v: "export" }, { t: "plain", v: " " }, { t: "kw", v: "function" }, { t: "plain", v: " " }, { t: "fn", v: "Landing" }, { t: "plain", v: "() {" }],
  [{ t: "plain", v: "  " }, { t: "kw", v: "return" }, { t: "plain", v: " (" }],
  [
    { t: "plain", v: "    <" },
    { t: "fn", v: "section" },
    { t: "plain", v: " " },
    { t: "prop", v: "className" },
    { t: "plain", v: "=" },
    { t: "str", v: '"hero"' },
    { t: "plain", v: ">" },
  ],
  [
    { t: "plain", v: "      <" },
    { t: "fn", v: "h1" },
    { t: "plain", v: ">" },
    { t: "str", v: "Сайт под заявки" },
    { t: "plain", v: "</" },
    { t: "fn", v: "h1" },
    { t: "plain", v: ">" },
  ],
  [
    { t: "plain", v: "      <" },
    { t: "fn", v: "Button" },
    { t: "plain", v: " " },
    { t: "prop", v: "href" },
    { t: "plain", v: "=" },
    { t: "str", v: '"https://wa.me/…"' },
  ],
  [
    { t: "plain", v: "        " },
    { t: "prop", v: "label" },
    { t: "plain", v: "=" },
    { t: "str", v: '"Написать"' },
    { t: "plain", v: " />" },
  ],
  [
    { t: "plain", v: "      <" },
    { t: "fn", v: "Meta" },
    { t: "plain", v: " " },
    { t: "prop", v: "seo" },
    { t: "plain", v: "=" },
    { t: "str", v: '"local"' },
    { t: "plain", v: " " },
    { t: "prop", v: "lcp" },
    { t: "plain", v: "=" },
    { t: "num", v: "90" },
    { t: "plain", v: " />" },
  ],
  [{ t: "plain", v: "    </" }, { t: "fn", v: "section" }, { t: "plain", v: ">" }],
  [{ t: "plain", v: "  )" }],
  [{ t: "plain", v: "}" }],
  [],
  [{ t: "cmt", v: "// brief → estimate in 1–2 days" }],
];

const tokenClass: Record<Token["t"], string> = {
  plain: "text-ink-muted dark:text-[#c8cdd6]",
  kw: "text-[#0a8580] dark:text-[#5eead4]",
  fn: "text-[#0284c7] dark:text-[#82aaff]",
  str: "text-[#0c9b95] dark:text-[#c3e88d]",
  prop: "text-[#b45309] dark:text-[#ffcb6b]",
  cmt: "text-ink-faint dark:text-[#676e7b]",
  num: "text-[#d97706] dark:text-[#f78c6c]",
};

export function HeroShowcase() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto mt-8 w-full max-w-[560px] lg:mt-0"
      initial={false}
      animate={reduce ? undefined : { y: [0, -5, 0] }}
      transition={
        reduce
          ? undefined
          : { duration: 9, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <div
        className="overflow-hidden border border-line bg-canvas-elevated shadow-[0_28px_80px_-36px_rgba(12,155,149,0.35)] dark:border-line-dark dark:bg-[#0e1014] dark:shadow-[0_28px_80px_-16px_rgba(0,0,0,0.75)]"
        aria-label="Fragment of landing page code"
      >
        <div className="flex items-center gap-3 border-b border-line bg-canvas-muted px-3 py-2.5 dark:border-white/10 dark:bg-[#14171c]">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <span className="truncate border-b-2 border-accent px-2.5 py-1 font-mono text-[11px] text-ink dark:text-white">
              landing.tsx
            </span>
            <span className="hidden truncate px-2 py-1 font-mono text-[11px] text-ink-faint sm:inline">
              seo.ts
            </span>
          </div>
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-accent">
            Next.js
          </span>
        </div>

        <div className="relative overflow-hidden bg-gradient-to-br from-canvas-elevated via-white to-accent-muted px-3 py-4 sm:px-4 sm:py-5 dark:from-transparent dark:via-transparent dark:to-transparent">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12] dark:opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(#0c9b95 1px, transparent 1px), linear-gradient(90deg, #0c9b95 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />

          <pre className="relative overflow-x-auto font-mono text-[12px] leading-[1.7] sm:text-[13px]">
            <code>
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  className="flex gap-3"
                  initial={reduce ? false : { opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: reduce ? 0 : 0.04 * i,
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                >
                  <span className="w-5 shrink-0 select-none text-right text-ink-faint/70 dark:text-white/25">
                    {i + 1}
                  </span>
                  <span className="min-w-0 whitespace-pre">
                    {line.length === 0 ? (
                      <span>{"\u00a0"}</span>
                    ) : (
                      line.map((tok, j) => (
                        <span key={j} className={tokenClass[tok.t]}>
                          {tok.v}
                        </span>
                      ))
                    )}
                    {i === lines.length - 1 && (
                      <motion.span
                        className="ml-0.5 inline-block h-[1.05em] w-[0.55ch] translate-y-[0.15em] bg-accent align-middle"
                        aria-hidden
                        animate={reduce ? undefined : { opacity: [1, 0, 1] }}
                        transition={
                          reduce
                            ? undefined
                            : { duration: 1.1, repeat: Infinity, ease: "linear" }
                        }
                      />
                    )}
                  </span>
                </motion.div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
}
