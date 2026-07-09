"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

function parseStatValue(raw: string): { target: number; suffix: string } {
  const match = raw.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { target: 0, suffix: raw };
  return { target: Number(match[1]), suffix: match[2] };
}

type CountUpProps = {
  value: string;
  className?: string;
};

export function CountUp({ value, className = "" }: CountUpProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const { target, suffix } = parseStatValue(value);
  const [display, setDisplay] = useState(reduce ? value : `0${suffix}`);

  useEffect(() => {
    if (!inView || reduce) {
      setDisplay(value);
      return;
    }

    const duration = 1400;
    const start = performance.now();

    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, suffix, target, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
