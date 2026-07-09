"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";
import { useI18n } from "@/components/i18n/I18nProvider";

const stacks = [
  { label: "React / Next.js", group: "Frontend" },
  { label: "Vue / Nuxt", group: "Frontend" },
  { label: "TypeScript", group: "Frontend" },
  { label: "Node.js", group: "Backend" },
  { label: "Python", group: "Backend" },
  { label: "Go", group: "Backend" },
  { label: "PostgreSQL", group: "Data" },
  { label: "MongoDB", group: "Data" },
  { label: "Redis", group: "Data" },
  { label: "AWS", group: "Cloud" },
  { label: "Docker / K8s", group: "DevOps" },
  { label: "GraphQL", group: "API" },
];

export function Technologies() {
  const { section, item, grid } = useStaggerVariants();
  const { m } = useI18n();

  return (
    <motion.section
      className="ds-section bg-canvas-elevated dark:bg-canvas-dark"
      variants={section}
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <motion.div variants={item}>
          <SectionTitle
            tag={m.sections.technologiesTag}
            title={m.sections.technologiesTitle}
            description={m.sections.technologiesDesc}
          />
        </motion.div>
        <motion.div
          className="mt-12 flex flex-wrap gap-3"
          variants={grid}
        >
          {stacks.map(({ label }) => (
            <motion.span
              key={label}
              variants={item}
              className="inline-block border border-line bg-canvas-muted px-4 py-2 font-mono text-sm text-ink-muted transition hover:border-accent hover:text-accent dark:border-line-dark dark:bg-canvas-elevated-dark dark:text-ink-faint dark:hover:text-accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {label}
            </motion.span>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
