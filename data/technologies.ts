export interface TechLayer {
  layer: string;
  items: string[];
}

export const technologies: TechLayer[] = [
  {
    layer: "AI / LLM",
    items: ["OpenAI", "Azure OpenAI", "LangChain", "LangGraph", "LlamaIndex", "Dify", "MCP"],
  },
  {
    layer: "Machine Learning",
    items: ["PyTorch", "YOLO", "Computer Vision", "VLM", "ML", "Optimization"],
  },
  {
    layer: "Cloud",
    items: [
      "Microsoft Azure",
      "Azure AI Foundry",
      "Azure OpenAI",
      "Azure AI Search",
      "Azure Document Intelligence",
      "Azure Speech",
      "Azure Container Apps",
    ],
  },
  {
    layer: "Data",
    items: [
      "Databricks",
      "Delta Lake",
      "Unity Catalog",
      "Milvus",
      "MongoDB",
      "PostgreSQL",
      "MSSQL",
      "Supabase",
    ],
  },
  {
    layer: "Engineering",
    items: [
      "Python",
      "FastAPI",
      "Docker",
      "Git",
      "GitLab",
      "GitHub Actions",
      "REST API",
      "Streamlit",
      "Gradio",
      "Chainlit",
    ],
  },
  {
    layer: "Automation",
    items: ["n8n", "MCP", "AI Agents", "Tool Calling", "Human-in-the-loop"],
  },
];
