"use client";

import { motion, useReducedMotion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
}: TestimonialCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.blockquote
      className="border border-line bg-canvas-elevated p-6 dark:border-line-dark dark:bg-canvas-elevated-dark lg:p-8"
      whileHover={reduce ? undefined : { y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <p className="text-ink-muted dark:text-ink-faint">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-6 flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center border border-line bg-accent-muted font-mono text-sm font-semibold text-accent dark:border-line-dark">
          {author.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <p className="font-medium text-ink dark:text-white">{author}</p>
          <p className="text-sm text-ink-faint">
            {role}, {company}
          </p>
        </div>
      </footer>
    </motion.blockquote>
  );
}
