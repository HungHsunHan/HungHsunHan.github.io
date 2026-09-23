export interface ExploringItem {
  title: string;
  description: string;
}

export const currentlyExploring: ExploringItem[] = [
  {
    title: "Agentic AI",
    description:
      "Building reliable multi-agent systems with tool use, verification, planning, and human oversight.",
  },
  {
    title: "Enterprise Agentic RAG",
    description:
      "Moving beyond traditional retrieve-and-answer pipelines toward iterative retrieval, reasoning, verification, and self-correction.",
  },
  {
    title: "Vision-Language Models",
    description:
      "Exploring VLM-based verification for industrial object detection and video understanding.",
  },
  {
    title: "AI Infrastructure",
    description:
      "Understanding how networking, identity, security, observability, and deployment architecture affect real-world AI systems.",
  },
  {
    title: "AI Coding Agents",
    description:
      "Exploring how modern coding agents can accelerate software development and enterprise automation.",
  },
];
