"use client";

import { useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { smoothEase } from "@/lib/motion";

export function useStaggerVariants() {
  const reduce = useReducedMotion();

  const section: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: reduce ? 0 : 0.06,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.52, ease: [...smoothEase] },
    },
  };

  const grid: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.09,
        delayChildren: reduce ? 0 : 0,
      },
    },
  };

  return { section, item, grid };
}

export const viewportOnce = {
  once: true as const,
  margin: "-12% 0px -8% 0px" as const,
  amount: 0.15 as const,
};
