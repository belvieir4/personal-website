"use client";
import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="progress-bar h-2 origin-left bg-teal-400"
      style={{ scaleX }}
    />
  );
}

export default ScrollProgressBar;
