"use client";

import { motion } from "framer-motion";
import { expertiseBlocks } from "@/data/expertise";

export default function Expertise() {
  return (
    <section className="section-shell py-28">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="section-label"
      >
        Core Expertise
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-gradient-anim sm:text-4xl"
      >
        Capability across the full AI stack
      </motion.h2>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {expertiseBlocks.map((block, i) => (
          <motion.div
            key={block.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            className="group card-glow rounded-xl border border-white/10 bg-card p-7 transition-all"
          >
            <h3 className="text-lg font-semibold text-ink">{block.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{block.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {block.keywords.map((kw) => (
                <span
                  key={kw}
                  className="chip rounded-md border px-2.5 py-1 text-xs"
                >
                  {kw}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
