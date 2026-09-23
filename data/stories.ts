export interface EngineeringStory {
  title: string;
  body: string[];
  lesson?: string;
}

export const engineeringStories: EngineeringStory[] = [
  {
    title: "Production Incident — Real-Time Translation",
    body: [
      "During rehearsal, a real-time translation system experienced timeout and latency problems.",
      "Instead of treating it as one issue, the system was decomposed into speech recognition, translation, network, and application layers.",
      "Mitigations included timeout handling, retry mechanisms, fallback services, an offline backup, network improvements, and eliminating single points of failure.",
      "The production event subsequently operated reliably.",
    ],
  },
  {
    title: "Improving Enterprise RAG",
    body: [
      "Initial RAG answers were sometimes incomplete when users asked questions requiring information from multiple documents.",
      "Rather than tuning prompts alone, retrieval logs were introduced to inspect what information the system actually retrieved.",
      "The architecture was then upgraded from single retrieval to agent-driven iterative search.",
    ],
    lesson: "Observability is essential for debugging AI systems.",
  },
  {
    title: "Working with Domain Experts",
    body: [
      "Industrial AI systems cannot be built in isolation.",
      "For PCB defect detection, ambiguous images required collaboration with inspection specialists to establish labeling rules and clarify edge cases.",
    ],
    lesson: "Domain knowledge is part of the model.",
  },
];
