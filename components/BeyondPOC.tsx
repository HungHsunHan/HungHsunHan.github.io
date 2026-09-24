"use client";

import { motion } from "framer-motion";
import ArchitectureDiagram from "./ArchitectureDiagram";

const productionConcerns = [
  "Model Quality",
  "Evaluation",
  "Latency",
  "Networking",
  "Authentication",
  "Security",
  "Monitoring",
  "Cost",
  "Reliability",
  "User Adoption",
];

export default function BeyondPOC() {
  return (
    <section className="section-shell py-28">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="section-label"
      >
        Production Engineering Philosophy
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-gradient-anim sm:text-4xl"
      >
        Beyond the POC
      </motion.h2>

      <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-5">
          <p className="leading-relaxed text-ink-muted">
            A model working in a notebook is only the beginning.
          </p>
          <p className="leading-relaxed text-ink-muted">
            Production AI requires understanding the entire system around the model — networking,
            authentication, security, latency, monitoring, data quality, failure handling, and
            user workflows.
          </p>
          <p className="leading-relaxed text-ink">
            This is the area of AI engineering that interests me most.
          </p>
        </div>

        <div className="card-glow rounded-xl border border-white/10 bg-card p-8">
          <ArchitectureDiagram nodes={["POC"]} direction="vertical" className="mb-1" />
          <div className="my-1 ml-[15px] h-6 w-px bg-gradient-to-b from-accent-blue to-accent-cyan/40" />
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2">
            {productionConcerns.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-sm text-ink-muted"
              >
                {item}
              </motion.div>
            ))}
          </div>
          <div className="my-1 ml-[15px] h-6 w-px bg-gradient-to-b from-accent-cyan/40 to-accent-blue" />
          <ArchitectureDiagram nodes={["Production"]} direction="vertical" className="mt-1" />
        </div>
      </div>
    </section>
  );
}
