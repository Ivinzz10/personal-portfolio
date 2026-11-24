"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type HeroEntranceProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  portrait?: boolean;
  subtle?: boolean;
};

export function HeroEntrance({
  children,
  className,
  delay = 0,
  portrait = false,
  subtle = false,
}: HeroEntranceProps) {
  const reduceMotion = useReducedMotion();
  const shouldReduceMotion = reduceMotion ?? false;

  return (
    <motion.div
      className={className}
      data-motion-reveal
      data-motion-portrait={portrait ? "" : undefined}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: subtle ? 0.92 : 0.86,
              y: subtle ? 12 : 18,
              scale: portrait ? 0.985 : 1,
              clipPath: portrait ? "inset(0 0 4% 0)" : undefined,
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
              scale: 1,
              clipPath: portrait ? "inset(0 0 0 0)" : undefined,
            }
      }
      viewport={{ once: false, amount: 0.05 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.64,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
