"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-28">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm text-accent-blue"
      >
        Experience
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
      >
        Where the work happened
      </motion.h2>

      <div className="mt-14 space-y-10 border-l border-white/10 pl-8">
        {experience.map((entry, i) => (
          <motion.div
            key={entry.organization}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[35px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-blue shadow-[0_0_10px_2px_rgba(91,140,255,0.5)]" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-ink">{entry.organization}</h3>
              {entry.period && (
                <span className="font-mono text-xs text-ink-muted">{entry.period}</span>
              )}
            </div>
            <p className="mt-1 text-sm text-accent-blue">{entry.role}</p>
            {entry.industry && (
              <p className="mt-1 text-xs text-ink-muted">Industry: {entry.industry}</p>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {entry.focus.map((f) => (
                <span
                  key={f}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-ink-muted"
                >
                  {f}
                </span>
              ))}
            </div>

            {entry.responsibilities && (
              <ul className="mt-4 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {entry.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                    {r}
                  </li>
                ))}
              </ul>
            )}

            {entry.thesis && (
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                <span className="text-ink">Master Thesis: </span>
                {entry.thesis}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
