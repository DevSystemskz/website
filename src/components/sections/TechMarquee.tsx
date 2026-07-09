"use client";

import { motion, useReducedMotion } from "framer-motion";
import { smoothEase } from "@/lib/motion";

const items = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "AWS",
  "GraphQL",
  "React Native",
  "AI / RAG",
  "Solidity",
  "Redis",
];

export function TechMarquee() {
  const reduce = useReducedMotion();
  const track = [...items, ...items];

  return (
    <motion.div
      className="relative overflow-hidden border-y border-line bg-ink py-3 dark:border-line-dark"
      aria-hidden
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: smoothEase }}
    >
      <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent" />
      <div className="marquee-track">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-6 px-6 font-mono text-xs uppercase tracking-[0.14em] text-white/55"
          >
            <span className="text-accent">◆</span>
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
