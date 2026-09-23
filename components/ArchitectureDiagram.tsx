"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ArchitectureDiagramProps {
  nodes: string[];
  direction?: "vertical" | "horizontal";
  className?: string;
}

export default function ArchitectureDiagram({
  nodes,
  direction = "vertical",
  className = "",
}: ArchitectureDiagramProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isHorizontal = direction === "horizontal";

  return (
    <div
      ref={ref}
      className={`flex ${
        isHorizontal ? "flex-row items-center flex-wrap md:flex-nowrap" : "flex-col items-start"
      } gap-0 ${className}`}
    >
      {nodes.map((node, index) => (
        <div
          key={node + index}
          className={`flex ${isHorizontal ? "flex-row" : "flex-col"} items-center`}
        >
          <motion.div
            initial={{ opacity: 0, y: isHorizontal ? 0 : 12, x: isHorizontal ? 12 : 0 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
            className="relative rounded-lg border border-white/10 bg-card px-4 py-2.5 text-sm text-ink whitespace-nowrap shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            style={{
              boxShadow: "0 0 24px -8px rgba(91,140,255,0.25)",
            }}
          >
            {node}
          </motion.div>
          {index < nodes.length - 1 && (
            <div
              className={
                isHorizontal
                  ? "h-px w-8 md:w-10 flex items-center justify-center overflow-hidden"
                  : "w-px h-8 flex items-center justify-center overflow-hidden"
              }
            >
              <motion.svg
                width={isHorizontal ? 40 : 2}
                height={isHorizontal ? 2 : 32}
                className="overflow-visible"
              >
                <motion.line
                  x1={isHorizontal ? 0 : 1}
                  y1={isHorizontal ? 1 : 0}
                  x2={isHorizontal ? 40 : 1}
                  y2={isHorizontal ? 1 : 32}
                  stroke="url(#lineGradient)"
                  strokeWidth={2}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.12 + 0.15 }}
                />
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5B8CFF" />
                    <stop offset="100%" stopColor="#67E8F9" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
