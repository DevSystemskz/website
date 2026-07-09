"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { springSnappy, smoothEase } from "@/lib/motion";

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
      className="group overflow-hidden border border-line bg-canvas-elevated dark:border-line-dark dark:bg-canvas-elevated-dark"
      whileHover={reduce ? undefined : { y: -6 }}
      transition={springSnappy}
    >
      <div className="relative h-44 w-full overflow-hidden bg-canvas-muted dark:bg-canvas-dark">
        <motion.div
          className="relative h-full w-full"
          whileHover={reduce ? undefined : { scale: 1.1 }}
          transition={{ duration: 0.65, ease: smoothEase }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent transition-opacity duration-300 group-hover:from-ink/85" />
        <motion.div
          className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-wider text-white/0 transition-colors group-hover:text-white/80"
          initial={false}
        >
          view case
        </motion.div>
      </div>
      <div className="p-5 lg:p-6">
        <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-accent dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-ink-muted dark:text-ink-faint">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              className="border border-line bg-canvas-muted px-2.5 py-0.5 font-mono text-xs text-ink-muted dark:border-line-dark dark:bg-canvas-dark dark:text-ink-faint"
              initial={reduce ? false : { opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
