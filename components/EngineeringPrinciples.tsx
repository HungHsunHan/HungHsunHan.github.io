"use client";

import { motion } from "framer-motion";
import { principles } from "@/data/principles";

export default function EngineeringPrinciples() {
  return (
    <section className="section-shell py-28">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm text-accent-blue"
      >
        Personal Engineering Principles
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
      >
        How I think about this work
      </motion.h2>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-xl border border-white/10 bg-card p-6"
          >
            <div className="mb-4 h-px w-6 bg-gradient-to-r from-accent-blue to-accent-cyan" />
            <h3 className="text-base font-semibold text-ink">{p.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
