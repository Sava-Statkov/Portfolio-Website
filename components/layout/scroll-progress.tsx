"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 shadow-[0_0_26px_rgba(59,130,246,0.45)]"
      style={{ scaleX }}
    />
  );
}
