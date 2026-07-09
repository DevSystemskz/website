"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
}

export function ServiceCard({
  icon,
  title,
  description,
  features = [],
}: ServiceCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="group relative h-full border border-line bg-canvas-elevated p-6 transition hover:border-accent/50 dark:border-line-dark dark:bg-canvas-elevated-dark lg:p-7"
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <div className="absolute left-0 top-0 h-0 w-0.5 bg-accent transition-all duration-300 group-hover:h-full" />
      <div className="mb-4 inline-flex border border-line bg-canvas-muted p-3 text-accent dark:border-line-dark dark:bg-canvas-dark">
        {icon}
      </div>
      <h3 className="font-display text-lg font-semibold text-ink dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-ink-faint">{description}</p>
      {features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-ink-muted dark:text-ink-faint">
              <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
              {f}
            </li>
          ))}
        </ul>
      )}
    </motion.article>
  );
}
