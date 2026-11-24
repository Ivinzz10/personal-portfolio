"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-[#4B83B8] motion-reduce:hidden"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    function updateVisibility() {
      const shouldShow = window.scrollY > 640;
      setIsVisible((visible) => (visible === shouldShow ? visible : shouldShow));
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: reduceMotion ? "auto" : "smooth",
        })
      }
      className="fixed bottom-4 right-4 z-40 inline-flex size-11 items-center justify-center border border-[#F4F6F8]/30 bg-[#101F35] text-[#F4F6F8] shadow-sm transition-colors hover:border-[#4B83B8] hover:bg-[#234C78] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B83B8] motion-reduce:transition-none sm:bottom-6 sm:right-6"
    >
      <ArrowUp aria-hidden="true" size={19} />
    </button>
  );
}
