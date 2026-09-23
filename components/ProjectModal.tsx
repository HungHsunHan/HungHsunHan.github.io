"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/data/projects";
import ArchitectureDiagram from "./ArchitectureDiagram";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-card-soft p-8 sm:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-accent-blue">{project.tag}</span>
                <h3 className="mt-2 text-2xl font-semibold text-ink">{project.title}</h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close case study"
                className="shrink-0 rounded-lg p-1.5 text-ink-muted transition-colors hover:bg-white/5 hover:text-ink"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-8 space-y-7">
              <CaseSection title="Problem" text={project.caseStudy.problem} />

              {project.caseStudy.architecture && (
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                    Architecture
                  </h4>
                  <div className="mt-4 overflow-x-auto">
                    <ArchitectureDiagram
                      nodes={project.caseStudy.architecture}
                      direction={project.caseStudy.architectureDirection ?? "vertical"}
                    />
                  </div>
                </div>
              )}

              <CaseSection title="Approach" text={project.caseStudy.approach} />

              {project.caseStudy.challenges && (
                <CaseList title="Challenges" items={project.caseStudy.challenges} />
              )}

              {project.caseStudy.engineeringDecisions && (
                <CaseList
                  title="Engineering Decisions"
                  items={project.caseStudy.engineeringDecisions}
                />
              )}

              <CaseSection title="Impact" text={project.caseStudy.impact} />

              {project.caseStudy.lessons && (
                <div className="rounded-xl border border-accent-blue/20 bg-accent-blue/[0.04] p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                    Lessons
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink">
                    {project.caseStudy.lessons}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CaseSection({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-ink">{text}</p>
    </div>
  );
}

function CaseList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">{title}</h4>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-ink">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
