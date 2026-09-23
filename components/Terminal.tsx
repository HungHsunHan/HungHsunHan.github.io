"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TerminalLine {
  command: string;
  output: string[];
}

const lines: TerminalLine[] = [
  {
    command: "whoami",
    output: ["Hung-Hsun Han", "Enterprise AI Engineer"],
  },
  {
    command: "focus",
    output: ["Agentic AI", "RAG", "Computer Vision", "Enterprise AI"],
  },
  {
    command: "current_mission",
    output: ["Turning AI prototypes into production systems."],
  },
];

export default function Terminal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="rounded-xl border border-white/10 bg-card/70 backdrop-blur-sm overflow-hidden font-mono text-[13px] leading-relaxed"
    >
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-2 text-ink-muted text-xs">session — hunghsun</span>
      </div>
      <div className="px-5 py-4 space-y-3">
        {lines.map((line, i) => (
          <motion.div
            key={line.command}
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.35 }}
          >
            <p className="text-ink-muted">
              <span className="text-accent-blue">$</span> {line.command}
            </p>
            {line.output.map((out) => (
              <p key={out} className="text-ink pl-4">
                {out}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
