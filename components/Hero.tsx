"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import ArchitectureDiagram from "./ArchitectureDiagram";
import Terminal from "./Terminal";

const floatingNodes = ["Computer Vision", "Azure", "Databricks", "LangGraph", "LLM"];

const roles = [
  "Enterprise AI Engineer",
  "Agentic AI Builder",
  "RAG Systems Architect",
  "Computer Vision Engineer",
  "AI Solutions Builder",
];

const stats = [
  { value: "8", label: "Featured AI Projects", color: "from-[#5b8cff] to-[#22d3ee]" },
  { value: "7", label: "Core Expertise Areas", color: "from-[#a78bfa] to-[#f472b6]" },
  { value: "E2E", label: "POC → Production", color: "from-[#f472b6] to-[#fb923c]" },
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    const done = !deleting && text === word;
    const empty = deleting && text === "";
    const delay = done ? 1600 : deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (done) setDeleting(true);
      else if (empty) {
        setDeleting(false);
        setIdx((i) => i + 1);
      } else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, idx, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);
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
          <p className="section-label mb-5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-[68px] lg:leading-[1.05]">
            <span className="text-ink">Hi, I&apos;m</span>
            <br />
            <span className="text-rainbow drop-shadow-[0_0_30px_rgba(167,139,250,0.35)]">Hung-Hsun Han</span>
          </h1>
          <p className="mt-5 h-8 font-mono text-xl font-medium text-ink sm:text-2xl">
            <span className="text-accent-cyan">&gt; </span>
            {typed}
            <span className="ml-0.5 inline-block h-6 w-[3px] translate-y-1 animate-pulse bg-[#f472b6]" />
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
              className="btn-rainbow rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-6px_rgba(167,139,250,0.8)] transition-transform hover:-translate-y-0.5 hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#experience"
              className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 backdrop-blur text-sm font-medium text-ink transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Explore My Experience
            </a>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.12 }}
                className="card-glow rounded-xl border border-white/10 px-3 py-3 text-center"
              >
                <div className={`bg-gradient-to-r ${s.color} bg-clip-text text-2xl font-bold text-transparent`}>
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] leading-tight text-ink-muted">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/hunghsun"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 bg-white/5 p-2.5 text-ink-muted transition-all hover:-translate-y-1 hover:border-[#f472b6]/50 hover:text-[#f9a8d4] hover:shadow-[0_0_20px_-4px_rgba(244,114,182,0.7)]"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hunghsun"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 bg-white/5 p-2.5 text-ink-muted transition-all hover:-translate-y-1 hover:border-[#f472b6]/50 hover:text-[#f9a8d4] hover:shadow-[0_0_20px_-4px_rgba(244,114,182,0.7)]"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contact@hunghsun.dev"
              aria-label="Email"
              className="rounded-full border border-white/10 bg-white/5 p-2.5 text-ink-muted transition-all hover:-translate-y-1 hover:border-[#f472b6]/50 hover:text-[#f9a8d4] hover:shadow-[0_0_20px_-4px_rgba(244,114,182,0.7)]"
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
                  whileHover={{ scale: 1.1 }}
                  className="chip rounded-full border px-3.5 py-1.5 text-xs backdrop-blur"
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
