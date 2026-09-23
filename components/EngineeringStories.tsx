"use client";

import { motion } from "framer-motion";
import { engineeringStories } from "@/data/stories";

export default function EngineeringStories() {
  return (
    <section className="section-shell py-28">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="section-label"
      >
        Selected Engineering Stories
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-gradient-anim sm:text-4xl"
      >
        Notes from the field
      </motion.h2>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {engineeringStories.map((story, i) => (
          <motion.div
            key={story.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col card-glow rounded-xl border border-white/10 bg-card p-7"
          >
            <h3 className="text-base font-semibold text-ink">{story.title}</h3>
            <div className="mt-3 flex-1 space-y-2.5">
              {story.body.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </div>
            {story.lesson && (
              <p className="mt-5 border-t border-white/10 pt-4 text-sm font-medium text-gradient">
                {story.lesson}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
