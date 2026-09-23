"use client";

import { motion } from "framer-motion";
import ArchitectureDiagram from "./ArchitectureDiagram";

const flow = ["Impact", "Evidence", "Hypothesis", "Isolation", "Mitigation", "Root Cause", "Prevention"];
const layers = ["Application", "Model", "API", "Authentication", "Networking", "Infrastructure", "Data"];
const priorities = [
  "Reduce user impact",
  "Establish a workaround",
  "Identify root cause",
  "Implement the fix",
  "Add monitoring or safeguards to prevent recurrence",
];

export default function TroubleshootingMindset() {
  return (
    <section className="section-shell py-28">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm text-accent-blue"
      >
        Troubleshooting Mindset
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
      >
        How I approach production problems
      </motion.h2>

      <p className="mt-6 max-w-2xl leading-relaxed text-ink-muted">
        When troubleshooting production AI systems, I prefer evidence-driven debugging rather
        than immediately changing the model. I typically separate the problem into layers, then
        identify where the failure actually occurs.
      </p>

      <div className="mt-10 overflow-x-auto rounded-xl border border-white/10 bg-card p-8">
        <ArchitectureDiagram nodes={flow} direction="horizontal" />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-card p-7">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
            Problem Layers
          </h3>
          <ul className="mt-4 space-y-2">
            {layers.map((layer) => (
              <li key={layer} className="flex items-center gap-2.5 text-sm text-ink">
                <span className="h-1 w-1 rounded-full bg-accent-blue" />
                {layer}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 bg-card p-7">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
            Incident Priority
          </h3>
          <ol className="mt-4 space-y-2">
            {priorities.map((p, i) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-ink">
                <span className="font-mono text-xs text-accent-blue">{i + 1}.</span>
                {p}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
