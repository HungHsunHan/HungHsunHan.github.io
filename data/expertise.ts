export interface ExpertiseBlock {
  title: string;
  description: string;
  keywords: string[];
}

export const expertiseBlocks: ExpertiseBlock[] = [
  {
    title: "Agentic AI & LLM Systems",
    description:
      "Designing AI systems that combine reasoning, retrieval, tools, and workflows rather than relying on a single LLM call.",
    keywords: [
      "LangGraph",
      "Multi-Agent Systems",
      "Tool Calling",
      "MCP",
      "Supervisor / Executor Agents",
      "Human-in-the-loop",
      "Deep Research",
      "AI Agents",
      "Workflow Orchestration",
    ],
  },
  {
    title: "Retrieval-Augmented Generation",
    description:
      "Building enterprise knowledge systems capable of searching, reasoning over, and comparing information across multiple documents and data sources.",
    keywords: [
      "RAG",
      "Agentic RAG",
      "Chunking",
      "Embeddings",
      "Reranking",
      "Hybrid Search",
      "Vector Databases",
      "Milvus",
      "Azure AI Search",
      "Retrieval Evaluation",
    ],
  },
  {
    title: "Computer Vision & Multimodal AI",
    description:
      "Developing industrial vision systems that combine object detection and multimodal models for more reliable visual understanding.",
    keywords: [
      "YOLO",
      "Vision-Language Models",
      "Object Detection",
      "Industrial Vision",
      "Video Understanding",
      "Multimodal AI",
      "PyTorch",
      "Image Classification",
    ],
  },
  {
    title: "Enterprise AI & Cloud",
    description:
      "Designing AI solutions that need to operate within enterprise infrastructure, security, networking, and compliance constraints.",
    keywords: [
      "Microsoft Azure",
      "Azure OpenAI",
      "Azure AI Foundry",
      "Azure AI Search",
      "Azure Document Intelligence",
      "Azure Speech",
      "Private Endpoint",
      "VNet",
      "Identity",
      "Monitoring",
      "Container Apps",
    ],
  },
  {
    title: "AI Platform & Data",
    description:
      "Working across the data platform layer that enterprise AI systems actually depend on, from lakehouse architecture to operational databases.",
    keywords: [
      "Databricks",
      "Delta Lake",
      "Unity Catalog",
      "Lakehouse",
      "Lakehouse Federation",
      "MLflow",
      "Data Engineering",
      "MSSQL",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
    ],
  },
  {
    title: "AI Engineering",
    description:
      "Shipping AI systems as real software: APIs, containers, pipelines, and interfaces that other teams can depend on.",
    keywords: [
      "Python",
      "FastAPI",
      "Docker",
      "Git",
      "GitLab CI/CD",
      "GitHub Actions",
      "REST APIs",
      "Streamlit",
      "Gradio",
      "Chainlit",
      "n8n",
    ],
  },
];
