"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PortfolioCard } from "./PortfolioCard";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";
import { useI18n } from "@/components/i18n/I18nProvider";
import {
  getAllPortfolioProjects,
  getPortfolioCard,
} from "@/lib/portfolio";

export function Portfolio() {
  const { section, item, grid } = useStaggerVariants();
  const { m, locale } = useI18n();
  const projects = getAllPortfolioProjects().map((project) =>
    getPortfolioCard(locale, project),
  );

  return (
    <motion.section
      id="portfolio"
      className="ds-section bg-white dark:bg-canvas-dark"
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
              <PortfolioCard {...p} viewLabel={m.sections.portfolioView} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
