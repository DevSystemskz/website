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
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-800/30 lg:p-8"
      whileHover={reduce ? undefined : { y: -4, boxShadow: "0 20px 40px -15px rgba(99, 102, 241, 0.15)" }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
    >
      <p className="text-slate-600 dark:text-slate-300">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-sm font-semibold text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
          {author.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <p className="font-medium text-slate-900 dark:text-white">{author}</p>
          <p className="text-sm text-slate-500">
            {role}, {company}
          </p>
        </div>
      </footer>
    </motion.blockquote>
  );
}
