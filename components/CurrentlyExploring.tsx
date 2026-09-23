"use client";

import { motion } from "framer-motion";
import { currentlyExploring } from "@/data/exploring";

export default function CurrentlyExploring() {
  return (
    <section className="section-shell py-28">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm text-accent-blue"
      >
        Currently Exploring
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
      >
        What&apos;s next on my radar
      </motion.h2>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {currentlyExploring.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-card p-6"
          >
            <span className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse" />
            <h3 className="text-base font-semibold text-ink">{item.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
