"use client";

import { motion } from "framer-motion";
import { technologies } from "@/data/technologies";

export default function TechStack() {
  return (
    <section id="stack" className="section-shell py-28">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="section-label"
      >
        Technical Stack
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-gradient-anim sm:text-4xl"
      >
        Organized by architecture layer
      </motion.h2>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((layer, i) => (
          <motion.div
            key={layer.layer}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="card-glow rounded-xl border border-white/10 bg-card p-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-wide text-accent-blue">
              {layer.layer}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {layer.items.map((item) => (
                <span
                  key={item}
                  className="chip rounded-md border px-2.5 py-1 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
