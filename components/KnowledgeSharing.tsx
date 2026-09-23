"use client";

import { motion } from "framer-motion";
import { educationTopics } from "@/data/education";

export default function KnowledgeSharing() {
  return (
    <section className="section-shell py-28">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="section-label"
      >
        AI Education &amp; Knowledge Sharing
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-gradient-anim sm:text-4xl"
      >
        Making AI understandable
      </motion.h2>

      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <p className="leading-relaxed text-ink-muted">
            Besides developing AI systems, I also teach and promote AI adoption inside the
            enterprise.
          </p>
          <p className="leading-relaxed text-ink-muted">
            I enjoy translating complex AI concepts into practical workflows that non-AI teams
            can understand and use.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2.5"
        >
          {educationTopics.map((topic) => (
            <span
              key={topic}
              className="rounded-lg border border-white/10 bg-card px-3.5 py-2 text-sm text-ink-muted"
            >
              {topic}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
