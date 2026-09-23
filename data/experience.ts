export interface ExperienceEntry {
  organization: string;
  role: string;
  period: string;
  industry?: string;
  focus: string[];
  responsibilities?: string[];
  thesis?: string;
}

export const experience: ExperienceEntry[] = [
  {
    organization: "Taiwan Cement Group / TCC",
    role: "AI Engineer / Innovation Project Manager",
    period: "2024 – Present",
    focus: [
      "Enterprise AI strategy and implementation",
      "Agentic AI",
      "RAG",
      "Computer Vision",
      "Azure AI",
      "Databricks",
      "AI workshops",
      "Cross-functional AI projects",
    ],
    responsibilities: [
      "Identify AI opportunities across business units",
      "Conduct requirements interviews",
      "Design POCs",
      "Develop AI solutions",
      "Coordinate stakeholders",
      "Evaluate models",
      "Design deployment architecture",
      "Troubleshoot production issues",
      "Promote AI adoption",
    ],
  },
  {
    organization: "NavCore Tech",
    role: "Data Scientist",
    period: "2023 – 2024",
    industry: "Semiconductor",
    focus: ["Computer Vision", "Machine Learning", "Industrial AI", "Data Analysis"],
  },
  {
    organization: "RWTH Aachen University",
    role: "M.Sc. Simulation Sciences",
    period: "",
    focus: ["Machine Learning", "Computer Vision"],
    thesis: "Machine Learning for Battery Degradation and Lifetime Prediction",
  },
];
