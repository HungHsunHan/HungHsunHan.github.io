export interface Principle {
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    title: "Build for reality",
    description: "A successful demo is not the same as a reliable product.",
  },
  {
    title: "Observe before optimizing",
    description: "Logs, traces, evaluation, and evidence should guide improvements.",
  },
  {
    title: "Systems over models",
    description: "Many AI failures originate outside the model itself.",
  },
  {
    title: "Human + AI",
    description:
      "The best enterprise AI systems augment domain experts rather than attempting to remove them from the workflow.",
  },
];
