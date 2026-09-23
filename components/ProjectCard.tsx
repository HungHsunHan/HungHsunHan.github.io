"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col rounded-xl border border-white/10 bg-card p-7 transition-colors hover:border-accent-blue/30"
    >
      <span className="font-mono text-xs text-accent-blue">{project.tag}</span>
      <h3 className="mt-3 text-xl font-semibold text-ink">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-ink-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <button
        onClick={() => onOpen(project)}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent-blue"
      >
        View Case Study
        <ArrowUpRight
          size={15}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>
    </motion.div>
  );
}
