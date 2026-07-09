"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { type CaseMetric } from "@/lib/cases";

interface PortfolioCardProps {
  slug: string;
  title: string;
  description: string;
  industry: string;
  tags: string[];
  gradient: string;
  results: CaseMetric[];
  viewCaseLabel: string;
}

export function PortfolioCard({
  slug,
  title,
  description,
  industry,
  tags,
  gradient,
  results,
  viewCaseLabel,
}: PortfolioCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-slate-800 dark:bg-slate-800/30 dark:hover:border-indigo-500/40"
      whileHover={reduce ? undefined : { y: -8 }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
    >
      <Link href={`/cases/${slug}`} className="block">
        <div
          className={`relative flex h-44 flex-col justify-end bg-gradient-to-br p-5 ${gradient}`}
        >
          <span className="text-xs font-medium uppercase tracking-wider text-white/80">
            {industry}
          </span>
          <div className="mt-3 flex flex-wrap gap-3">
            {results.slice(0, 2).map((r) => (
              <div key={r.label} className="rounded-lg bg-black/20 px-2 py-1 backdrop-blur-sm">
                <span className="text-sm font-bold text-white">{r.value}</span>
                <span className="ml-1 text-xs text-white/80">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-5 lg:p-6">
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
            {title}
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            {viewCaseLabel} →
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
