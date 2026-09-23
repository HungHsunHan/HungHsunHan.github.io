"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import ArchitectureDiagram from "./ArchitectureDiagram";
import Terminal from "./Terminal";

const floatingNodes = ["Computer Vision", "Azure", "Databricks", "LangGraph", "LLM"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_60%,transparent_100%)]" />
      <div
        className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(91,140,255,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="section-shell relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-5 font-mono text-sm text-accent-blue">Hi, I&apos;m</p>
          <h1 className="text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-[68px] lg:leading-[1.05]">
            Hung-Hsun Han
          </h1>
          <p className="mt-4 text-xl font-medium text-ink sm:text-2xl">
            Enterprise AI Engineer &amp; AI Solutions Builder
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted">
            I design and build production-oriented AI systems across Agentic AI, RAG, Computer
            Vision, and Cloud — turning business problems into deployable AI solutions.
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
            Currently working on enterprise AI adoption, intelligent automation, and AI
            infrastructure across industrial use cases.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-lg bg-accent-blue px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_24px_-4px_rgba(91,140,255,0.6)]"
            >
              View Projects
            </a>
            <a
              href="#experience"
              className="rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Explore My Experience
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/hunghsun"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hunghsun"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contact@hunghsun.dev"
              aria-label="Email"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative flex flex-col gap-8"
        >
          <div className="relative flex justify-between gap-6">
            <ArchitectureDiagram
              nodes={["Enterprise Data", "RAG", "AI Agents", "Tools / APIs", "Enterprise Systems"]}
              direction="vertical"
            />
            <div className="hidden flex-col gap-3 pt-2 sm:flex">
              {floatingNodes.map((node, i) => (
                <motion.div
                  key={node}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="rounded-full border border-accent-blue/25 bg-card/60 px-3.5 py-1.5 text-xs text-ink-muted"
                  style={{ boxShadow: "0 0 18px -6px rgba(103,232,249,0.35)" }}
                >
                  {node}
                </motion.div>
              ))}
            </div>
          </div>
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
