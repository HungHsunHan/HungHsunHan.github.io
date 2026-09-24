"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import ThreadsIcon from "./ThreadsIcon";

export default function Contact() {
  return (
    <section id="contact" className="section-shell py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-card px-8 py-16 text-center sm:px-16"
      >
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(91,140,255,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative">
          <h2 className="text-3xl font-semibold tracking-tight text-gradient-anim sm:text-4xl">
            Let&apos;s build something useful with AI.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink-muted">
            I&apos;m interested in AI engineering, enterprise AI systems, cloud AI, Agentic AI,
            and production-scale AI applications.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/hung-hsun-han/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-white/30 hover:bg-white/5"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/HungHsunHan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-white/30 hover:bg-white/5"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://www.threads.net/tripleh.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-white/30 hover:bg-white/5"
            >
              <ThreadsIcon size={16} />
              Threads
            </a>
            <a
              href="mailto:contact@hunghsun.dev"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-blue px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_24px_-4px_rgba(91,140,255,0.6)]"
            >
              <Mail size={16} />
              Email Me
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
