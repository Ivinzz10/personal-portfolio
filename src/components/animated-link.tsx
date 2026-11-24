"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type AnimatedLinkProps = HTMLMotionProps<"a">;

export function AnimatedLink(props: AnimatedLinkProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      {...props}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.16, ease: "easeOut" }}
    />
  );
}
