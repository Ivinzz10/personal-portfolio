"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  initialScale?: number;
};

export function SectionReveal({
  children,
  className,
  delay = 0,
  initialScale = 1,
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion();
  const shouldReduceMotion = reduceMotion ?? false;

  return (
    <motion.div
      className={className}
      data-motion-reveal
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0.85, y: 18, scale: initialScale }
      }
      whileInView={
        shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
      }
      viewport={{ once: false, amount: 0.05 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
