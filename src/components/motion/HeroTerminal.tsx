"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { smoothEase } from "@/lib/motion";

const lines = [
  { parts: [{ t: "const ", c: "kw" }, { t: "project", c: "id" }, { t: " = ", c: "op" }, { t: "{", c: "br" }] },
  { parts: [{ t: "  name: ", c: "key" }, { t: '"your-idea"', c: "str" }, { t: ",", c: "op" }] },
  { parts: [{ t: "  stack: ", c: "key" }, { t: "[", c: "br" }, { t: '"React"', c: "str" }, { t: ", ", c: "op" }, { t: '"Node"', c: "str" }, { t: "]", c: "br" }, { t: ",", c: "op" }] },
  { parts: [{ t: "  ship: ", c: "key" }, { t: "true", c: "bool" }] },
  { parts: [{ t: "}", c: "br" }, { t: ";", c: "op" }] },
  { parts: [{ t: "// мы доведём до релиза", c: "cmt" }] },
];

const colors: Record<string, string> = {
  kw: "text-accent",
  id: "text-ink dark:text-white",
  op: "text-ink-faint",
  br: "text-[#D4A84B]",
  key: "text-ink-faint",
  str: "text-[#6BBF7B]",
  bool: "text-accent",
  cmt: "text-ink-faint/70",
};

export function HeroTerminal() {
  const reduce = useReducedMotion();
  const [visibleLines, setVisibleLines] = useState(reduce ? lines.length : 0);
  const [showCursor, setShowCursor] = useState(!reduce);

  useEffect(() => {
    if (reduce) return;

    let line = 0;
    const interval = setInterval(() => {
      line += 1;
      setVisibleLines(line);
      if (line >= lines.length) {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 1200);
      }
    }, 380);

    return () => clearInterval(interval);
  }, [reduce]);

  return (
    <motion.div
      className="relative hidden lg:block"
      initial={reduce ? false : { opacity: 0, x: 48 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, delay: 0.15, ease: smoothEase }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="corner-marks overflow-hidden rounded-md border border-line bg-canvas-elevated shadow-2xl shadow-ink/8 dark:border-line-dark dark:bg-canvas-elevated-dark dark:shadow-black/40">
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5 dark:border-line-dark">
            <div className="flex gap-1.5">
              <motion.span
                className="h-2.5 w-2.5 rounded-full bg-[#E06B5E]"
                animate={reduce ? undefined : { scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              />
              <motion.span
                className="h-2.5 w-2.5 rounded-full bg-[#D4A84B]"
                animate={reduce ? undefined : { scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
              <motion.span
                className="h-2.5 w-2.5 rounded-full bg-accent"
                animate={reduce ? undefined : { scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              />
            </div>
            <span className="font-mono text-[10px] text-ink-faint">ship.ts</span>
          </div>
          <pre className="min-h-[200px] overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
            <code>
              {lines.slice(0, visibleLines).map((line, li) => (
                <motion.div
                  key={li}
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, ease: smoothEase }}
                >
                  {line.parts.map((part, pi) => (
                    <span key={pi} className={colors[part.c]}>
                      {part.t}
                    </span>
                  ))}
                </motion.div>
              ))}
              {showCursor && (
                <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-accent align-middle" />
              )}
            </code>
          </pre>
        </div>
        <motion.div
          className="absolute -bottom-3 -left-3 border border-line bg-canvas-elevated px-3 py-1.5 font-mono text-[11px] text-ink-muted shadow-lg dark:border-line-dark dark:bg-canvas-elevated-dark dark:text-ink-faint"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.4, ease: smoothEase }}
        >
          build → deploy → scale
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
