"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
  href?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  features = [],
  href,
}: ServiceCardProps) {
  const reduce = useReducedMotion();

  const inner = (
    <>
      <div className="mb-4 inline-flex rounded-xl bg-indigo-100 p-3 text-indigo-600 transition group-hover:bg-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:group-hover:bg-indigo-500/20">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
        {title}
      </h3>
      <p className="mt-2 text-slate-600 dark:text-slate-400">{description}</p>
      {features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
              {f}
            </li>
          ))}
        </ul>
      )}
      {href && (
        <p className="mt-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          →
        </p>
      )}
    </>
  );

  const className =
    "group relative block rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-indigo-400 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800/30 dark:hover:border-indigo-500/50 dark:hover:bg-slate-800/50 lg:p-8";

  if (href) {
    return (
      <motion.div
        whileHover={reduce ? undefined : { y: -6 }}
        whileTap={reduce ? undefined : { scale: 0.99 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        <Link href={href} className={className}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.article
      className={className}
      whileHover={reduce ? undefined : { y: -6 }}
      whileTap={reduce ? undefined : { scale: 0.99 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {inner}
    </motion.article>
  );
}
