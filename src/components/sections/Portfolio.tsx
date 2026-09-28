"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";
import { useI18n } from "@/components/i18n/I18nProvider";
import {
  getAllPortfolioProjects,
  getPortfolioCard,
} from "@/lib/portfolio";
import { springSnappy, smoothEase } from "@/lib/motion";

const LIVE_SLUGS = ["auarai", "abdrahmanov", "shanyrak"] as const;

export function Portfolio() {
  const { section, item } = useStaggerVariants();
  const { m, locale } = useI18n();
  const reduce = useReducedMotion();
  const projects = LIVE_SLUGS.map((slug) => {
    const project = getAllPortfolioProjects().find((p) => p.slug === slug)!;
    return { ...getPortfolioCard(locale, project), liveUrl: project.liveUrl, year: project.year };
  });
  const [featured, ...rest] = projects;

  return (
    <motion.section
      id="portfolio"
      className="ds-section bg-white dark:bg-canvas-elevated-dark"
      variants={section}
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <motion.div variants={item}>
          <SectionTitle
            tag={m.sections.portfolioTag}
            title={m.sections.portfolioTitle}
            description={m.sections.portfolioDesc}
          />
        </motion.div>

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-12 lg:gap-6">
          {featured && (
            <motion.div className="lg:col-span-7" variants={item}>
              <Link href={`/portfolio/${featured.slug}`} className="group block h-full">
                <motion.article
                  className="flex h-full flex-col overflow-hidden border border-line bg-canvas-elevated dark:border-line-dark dark:bg-canvas-elevated-dark"
                  whileHover={reduce ? undefined : { y: -4 }}
                  transition={springSnappy}
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-ink sm:aspect-[16/10]">
                    <motion.div
                      className="relative h-full w-full"
                      whileHover={reduce ? undefined : { scale: 1.04 }}
                      transition={{ duration: 0.6, ease: smoothEase }}
                    >
                      <Image
                        src={featured.imageSrc}
                        alt={featured.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover object-top"
                        quality={60}
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                        {featured.year}
                        {featured.liveUrl ? " · live" : ""}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                        {featured.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm text-white/70 sm:text-base">
                        {featured.description}
                      </p>
                      <span className="mt-4 inline-flex font-mono text-[11px] uppercase tracking-wider text-white/0 transition group-hover:text-white/90">
                        {m.sections.portfolioView} →
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          )}

          <div className="flex flex-col gap-5 lg:col-span-5 lg:gap-6">
            {rest.map((p) => (
              <motion.div key={p.slug} variants={item} className="flex-1">
                <Link href={`/portfolio/${p.slug}`} className="group block h-full">
                  <motion.article
                    className="flex h-full overflow-hidden border border-line bg-canvas-elevated dark:border-line-dark dark:bg-canvas-elevated-dark"
                    whileHover={reduce ? undefined : { y: -3 }}
                    transition={springSnappy}
                  >
                    <div className="relative w-[42%] min-w-[120px] shrink-0 overflow-hidden bg-ink sm:w-[46%]">
                      <Image
                        src={p.imageSrc}
                        alt={p.imageAlt}
                        fill
                        sizes="200px"
                        className="object-cover object-top transition duration-500 group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-4 sm:p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                        {p.year}
                        {p.liveUrl ? " · live" : ""}
                      </p>
                      <h3 className="mt-1.5 font-display text-lg font-semibold text-ink transition group-hover:text-accent dark:text-white">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-sm text-ink-muted dark:text-ink-faint">
                        {p.description}
                      </p>
                      <span className="mt-3 font-mono text-[10px] uppercase tracking-wider text-ink-faint transition group-hover:text-accent">
                        {m.sections.portfolioView} →
                      </span>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
