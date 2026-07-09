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
    hidden: {
      opacity: reduce ? 1 : 0,
      y: reduce ? 0 : 32,
      filter: reduce ? "blur(0px)" : "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: reduce ? 0 : 0.62, ease: [...smoothEase] },
    },
  };

  const card: Variants = {
    hidden: {
      opacity: reduce ? 1 : 0,
      y: reduce ? 0 : 24,
      scale: reduce ? 1 : 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: reduce ? 0 : 0.55, ease: [...smoothEase] },
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

  return { section, item, grid, card };
}

export const viewportOnce = {
  once: true as const,
  margin: "-12% 0px -8% 0px" as const,
  amount: 0.15 as const,
};
