"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PortfolioCard } from "./PortfolioCard";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";
import { useI18n } from "@/components/i18n/I18nProvider";
import { getCases } from "@/lib/cases";

export function Portfolio() {
  const { section, item, grid } = useStaggerVariants();
  const { m, locale } = useI18n();
  const projects = getCases(locale);

  return (
    <motion.section
      id="portfolio"
      className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28 dark:border-slate-800 dark:bg-slate-900/50"
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
        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={grid}
        >
          {projects.map((p) => (
            <motion.div key={p.slug} variants={item}>
              <PortfolioCard
                slug={p.slug}
                title={p.title}
                description={p.summary}
                industry={p.industry}
                tags={p.tags}
                gradient={p.gradient}
                results={p.results}
                viewCaseLabel={m.sections.viewCase}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
