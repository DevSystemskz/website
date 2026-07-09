"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
}

export function PortfolioCard({
  title,
  description,
  tags,
  imageSrc,
  imageAlt,
}: PortfolioCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="group overflow-hidden border border-line bg-canvas-elevated transition hover:border-accent/40 dark:border-line-dark dark:bg-canvas-elevated-dark"
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <div className="relative h-44 w-full overflow-hidden bg-canvas-muted dark:bg-canvas-dark">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      </div>
      <div className="p-5 lg:p-6">
        <h3 className="font-display text-lg font-semibold text-ink dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-ink-muted dark:text-ink-faint">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-line bg-canvas-muted px-2.5 py-0.5 font-mono text-xs text-ink-muted dark:border-line-dark dark:bg-canvas-dark dark:text-ink-faint"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
