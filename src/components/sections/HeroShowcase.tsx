"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { smoothEase, springSnappy } from "@/lib/motion";
import { useI18n } from "@/components/i18n/I18nProvider";
import {
  getAllPortfolioProjects,
  getPortfolioCard,
} from "@/lib/portfolio";

function useFeaturedProjects() {
  const { locale } = useI18n();
  return getAllPortfolioProjects()
    .filter((p) => p.liveUrl)
    .slice(0, 3)
    .map((p) => ({
      ...getPortfolioCard(locale, p),
      liveUrl: p.liveUrl!,
      year: p.year,
    }));
}

function BrowserChrome({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-canvas-elevated shadow-[0_24px_80px_-20px_rgba(14,16,20,0.35)] dark:border-line-dark dark:bg-canvas-elevated-dark dark:shadow-[0_24px_80px_-12px_rgba(0,0,0,0.65)]">
      <div className="flex items-center gap-3 border-b border-line bg-canvas-muted/80 px-3 py-2.5 backdrop-blur-md dark:border-line-dark dark:bg-canvas-dark/80">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-md bg-canvas px-3 py-1 font-mono text-[11px] text-ink-muted dark:bg-canvas-elevated-dark dark:text-ink-faint">
          {url.replace(/^https?:\/\//, "")}
        </div>
      </div>
      <div className="relative aspect-[16/10] bg-ink">{children}</div>
    </div>
  );
}

export function HeroShowcase() {
  const reduce = useReducedMotion();
  const { m } = useI18n();
  const featured = useFeaturedProjects();
  const [active, setActive] = useState(0);
  const project = featured[active] ?? featured[0];

  if (!project) return null;

  return (
    <motion.div
      className="relative mx-auto hidden w-full max-w-[520px] lg:block"
      initial={false}
    >
      <BrowserChrome url={project.liveUrl}>
        <AnimatePresence mode="wait">
          <motion.div
            key={project.slug}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.28, ease: smoothEase }}
          >
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              fill
              sizes="520px"
              className="object-cover object-top"
              quality={65}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent p-5 pt-16">
              <p className="font-display text-lg font-semibold text-white">
                {project.title}
              </p>
              <p className="mt-1 line-clamp-2 text-sm text-white/65">
                {project.description}
              </p>
              <Link
                href={`/portfolio/${project.slug}`}
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-accent transition hover:text-white"
              >
                {m.sections.portfolioView}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </BrowserChrome>

      <div className="mt-4 flex gap-2">
        {featured.map((p, i) => (
          <motion.button
            key={p.slug}
            type="button"
            onClick={() => setActive(i)}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={springSnappy}
            className={`group relative flex-1 overflow-hidden rounded-lg border text-left transition ${
              i === active
                ? "border-accent bg-accent/8 dark:bg-accent/12"
                : "border-line bg-canvas-elevated hover:border-accent/40 dark:border-line-dark dark:bg-canvas-elevated-dark"
            }`}
            aria-pressed={i === active}
            aria-label={p.title}
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={p.imageSrc}
                alt=""
                fill
                sizes="120px"
                className="object-cover object-top opacity-90 transition group-hover:opacity-100"
              />
            </div>
            <span className="block truncate px-2 py-1.5 font-mono text-[10px] uppercase tracking-wide text-ink-muted dark:text-ink-faint">
              {p.title}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

export function HeroFeaturedMobile() {
  const reduce = useReducedMotion();
  const { m } = useI18n();
  const featured = useFeaturedProjects();
  const [active, setActive] = useState(0);
  const project = featured[active] ?? featured[0];

  if (!project) return null;

  return (
    <motion.div className="mt-6 lg:hidden" initial={false}>
      <BrowserChrome url={project.liveUrl}>
        <AnimatePresence mode="wait">
          <motion.div
            key={project.slug}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 1023px) 92vw, 480px"
              className="object-cover object-top"
              quality={60}
              priority
              fetchPriority="high"
              decoding="sync"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4 pt-12">
              <p className="font-display text-base font-semibold text-white">
                {project.title}
              </p>
              <Link
                href={`/portfolio/${project.slug}`}
                className="mt-1 inline-block font-mono text-[10px] uppercase tracking-wider text-accent"
              >
                {m.sections.portfolioView} →
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </BrowserChrome>

      <div className="mt-3 flex gap-2">
        {featured.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => setActive(i)}
            className={`h-1.5 flex-1 rounded-full transition ${
              i === active ? "bg-accent" : "bg-line dark:bg-line-dark"
            }`}
            aria-label={p.title}
            aria-pressed={i === active}
          />
        ))}
      </div>
    </motion.div>
  );
}
