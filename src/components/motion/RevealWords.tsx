"use client";

import { motion, useReducedMotion } from "framer-motion";
import { smoothEase } from "@/lib/motion";

type RevealWordsProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function RevealWords({ text, className = "", delay = 0 }: RevealWordsProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="mr-[0.28em] inline-block"
          initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.45,
            delay: delay + i * 0.07,
            ease: smoothEase,
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
