"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function AuroraBackground() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX }}
        className="btn-rainbow fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left"
      />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="aurora-blob left-[-10%] top-[-10%] h-[45vw] w-[45vw] bg-[#5b8cff]" />
        <div
          className="aurora-blob right-[-10%] top-[20%] h-[40vw] w-[40vw] bg-[#a78bfa]"
          style={{ animationDelay: "-7s" }}
        />
        <div
          className="aurora-blob bottom-[-15%] left-[20%] h-[40vw] w-[40vw] bg-[#f472b6]"
          style={{ animationDelay: "-14s", opacity: 0.22 }}
        />
        <div
          className="aurora-blob bottom-[10%] right-[5%] h-[25vw] w-[25vw] bg-[#22d3ee]"
          style={{ animationDelay: "-3s", opacity: 0.2 }}
        />
      </div>
    </>
  );
}
