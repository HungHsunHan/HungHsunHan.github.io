"use client";

import { motion } from "framer-motion";

const paragraphs = [
  "I'm an AI Engineer focused on building practical enterprise AI systems.",
  "My work spans the full AI delivery lifecycle — from identifying business problems and designing proof-of-concepts to developing, deploying, evaluating, and troubleshooting production-oriented systems.",
  "My recent focus includes Agentic AI, Retrieval-Augmented Generation, enterprise knowledge systems, computer vision, multimodal AI, and cloud AI infrastructure.",
  "At Taiwan Cement Group, I work across subsidiaries and business units to identify AI opportunities and transform them into usable solutions. This involves much more than model development: requirements discovery, system architecture, data integration, security, deployment, evaluation, user adoption, and continuous improvement.",
  "Before that, I worked as a Data Scientist in the semiconductor industry, where I focused on machine learning and computer vision applications.",
  "I received my Master's degree in Simulation Sciences from RWTH Aachen University, with a focus on machine learning and computer vision. My master's thesis applied machine learning to battery degradation and lifetime prediction.",
];

export default function About() {
  return (
    <section id="about" className="section-shell py-28">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="section-label"
      >
        About
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-gradient-anim sm:text-4xl"
      >
        Building AI that works beyond the demo
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="leading-relaxed text-ink-muted"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col justify-center gap-4 card-glow rounded-xl border border-white/10 bg-card p-8"
        >
          <p className="text-lg text-ink-muted">I particularly enjoy solving the gap between:</p>
          <p className="text-xl font-medium text-ink">&ldquo;The AI demo works.&rdquo;</p>
          <div className="h-px w-8 bg-gradient-to-r from-accent-blue to-accent-cyan" />
          <p className="text-xl font-medium text-gradient">
            &ldquo;The AI system works reliably for real users.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
