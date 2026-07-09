"use client";

import { motion, useReducedMotion } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export function TeamCard({ name, role, bio, initials }: TeamCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="border border-line bg-canvas-elevated p-6 transition hover:border-accent/40 dark:border-line-dark dark:bg-canvas-elevated-dark"
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <div className="flex h-14 w-14 items-center justify-center border border-line bg-accent-muted font-display text-lg font-semibold text-accent dark:border-line-dark">
        {initials}
      </div>
      <h3 className="mt-4 font-display font-semibold text-ink dark:text-white">{name}</h3>
      <p className="font-mono text-xs uppercase tracking-wider text-accent">{role}</p>
      <p className="mt-2 text-sm text-ink-muted dark:text-ink-faint">{bio}</p>
    </motion.article>
  );
}
