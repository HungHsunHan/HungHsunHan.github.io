export interface ProjectCaseStudy {
  problem: string;
  architecture?: string[];
  architectureDirection?: "vertical" | "horizontal";
  approach: string;
  challenges?: string[];
  engineeringDecisions?: string[];
  impact: string;
  lessons?: string;
}

export interface Project {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  tech: string[];
  caseStudy: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    slug: "enterprise-agentic-rag-assistant",
    title: "Enterprise Agentic RAG Assistant",
    tag: "Agentic AI · RAG · Enterprise Search",
    summary:
      "An enterprise knowledge assistant that lets an AI agent search and reason across multiple technical documents before composing an answer.",
    tech: ["LangGraph", "RAG", "LLM", "Vector Database", "Azure", "Python"],
    caseStudy: {
      problem:
        "Enterprise R&D teams had years of technical reports and material data distributed across documents, making it difficult to quickly retrieve and compare historical knowledge.",
      architecture: ["User", "Agent", "Retriever", "Vector DB", "LLM"],
      architectureDirection: "vertical",
      approach:
        "Designed an enterprise knowledge assistant using Agentic RAG and multi-step retrieval. Instead of relying on a single retrieval query, the system allows an AI agent to repeatedly search and reason across multiple documents before composing an answer.",
      challenges: [
        "Single-step retrieval produced incomplete answers when a question required synthesizing multiple documents",
        "No visibility into what the retriever actually returned before an answer was generated",
      ],
      engineeringDecisions: [
        "Multi-step retrieval with agent-controlled query reformulation",
        "Cross-document reasoning before final answer composition",
        "Retrieval logging for every query, chunk, and score",
        "RAG monitoring and an evaluation workflow to track answer quality",
        "User feedback loop feeding back into retrieval quality improvement",
        "Enterprise knowledge integration across existing document repositories",
      ],
      impact:
        "Used by more than 20 R&D users. Initial user testing exposed incomplete answers caused by single-step retrieval. I redesigned the workflow into an agent-based multi-retrieval architecture and introduced monitoring and evaluation mechanisms to continuously improve answer quality.",
      lessons:
        "The gap between a successful POC and a reliable production AI system is rarely the model — it is retrieval depth, observability, and evaluation.",
    },
  },
  {
    slug: "ai-safety-monitoring-platform",
    title: "AI Safety Monitoring Platform",
    tag: "Computer Vision · VLM · Industrial AI",
    summary:
      "A safety monitoring system that pairs YOLO detection with VLM verification to reduce false positives from CCTV streams.",
    tech: ["YOLOv8", "VLM", "Python", "FastAPI", "SQL", "RTSP"],
    caseStudy: {
      problem:
        "Industrial safety monitoring requires continuously identifying potential safety violations from CCTV streams. Traditional object detection alone may produce false positives or lack contextual understanding.",
      architecture: [
        "CCTV / RTSP",
        "YOLO Detection",
        "Candidate Violation",
        "VLM Verification",
        "Alert",
        "Email / Dashboard",
      ],
      architectureDirection: "vertical",
      approach:
        "Designed an AI safety monitoring system combining YOLO object detection with Vision-Language Model verification, using the VLM as a reasoning-based verification layer rather than a single source of truth. The platform also supports natural-language querying of safety data through NL2SQL.",
      challenges: [
        "Object detection alone flagged too many non-violations as candidates",
        "Operators needed to query historical safety data without writing SQL",
      ],
      engineeringDecisions: [
        "Real-time object detection on RTSP streams",
        "VLM verification layer to confirm or reject candidate violations",
        "Violation notification pipeline to email and dashboard",
        "NL2SQL interface for safety analytics and trend analysis",
      ],
      impact:
        "Reduced dependence on a single detection model by introducing a verification layer, lowering false-positive alerts while keeping real-time responsiveness for genuine violations.",
      lessons:
        "Layering a reasoning model on top of a fast detector is often more reliable than trying to make one model do everything.",
    },
  },
  {
    slug: "enterprise-material-ordering-assistant",
    title: "Enterprise Material Ordering Assistant",
    tag: "AI Agent · Automation · Human-in-the-loop",
    summary:
      "An AI-assisted ordering workflow that keeps humans in control of operational actions while automating repetitive communication.",
    tech: ["n8n", "Dify", "Database Integrations", "Human-in-the-loop"],
    caseStudy: {
      problem:
        "Material ordering involved repetitive communication and system operations across multiple internal tools.",
      approach:
        "Built an AI-assisted workflow using n8n and Dify with direct database integrations, where the AI drafts and prepares ordering actions but important operational steps require explicit human confirmation before execution.",
      engineeringDecisions: [
        "Workflow automation with n8n orchestrating system-to-system operations",
        "Dify-based conversational interface for users",
        "Human-in-the-loop approval gate before any write operation",
        "Direct integration with existing ordering databases",
      ],
      impact:
        "Demonstrates how AI agents can integrate with real enterprise workflows rather than operating as standalone chatbots, reducing repetitive manual steps while keeping accountability with human operators.",
      lessons:
        "For operational actions with real consequences, the right design is AI-assisted, human-approved — not fully autonomous.",
    },
  },
  {
    slug: "cement-recipe-multi-objective-optimization",
    title: "Cement Recipe Multi-Objective Optimization",
    tag: "Optimization · Industrial AI",
    summary:
      "A multi-objective optimization model for cement mixture formulation balancing cost, emissions, and material constraints.",
    tech: ["Multi-Objective Linear Programming", "Python", "Optimization"],
    caseStudy: {
      problem:
        "Cement mixture formulations must balance multiple competing objectives across variables such as cement, slag, and fly ash content.",
      approach:
        "Modeled the formulation problem as a multi-objective linear program that minimizes cost and carbon emissions while satisfying required material constraints.",
      engineeringDecisions: [
        "Formulated cost and emissions as competing objectives rather than a single blended score",
        "Encoded material and regulatory constraints directly into the optimization model",
        "Validated candidate recipes against real production constraints",
      ],
      impact:
        "Produced optimized recipe candidates that reduce cost and carbon emissions while meeting required material constraints — sitting at the intersection of AI, optimization, sustainability, and industrial engineering.",
      lessons:
        "Not every industrial AI problem needs a neural network — sometimes the right tool is a well-formulated optimization model.",
    },
  },
  {
    slug: "azure-ai-enterprise-applications",
    title: "Azure AI Enterprise Applications",
    tag: "Azure · Enterprise AI · Cloud",
    summary:
      "A collection of enterprise AI applications on Microsoft Azure spanning document intelligence, real-time translation, and enterprise chat.",
    tech: [
      "Azure Document Intelligence",
      "Azure Speech",
      "Azure OpenAI",
      "Azure AI Search",
      "Private Networking",
    ],
    caseStudy: {
      problem:
        "Multiple business units needed AI applications that operate within enterprise infrastructure, security, and networking constraints rather than as isolated demos.",
      architecture: ["Speech", "Azure Speech-to-Text", "Translation", "Real-time UI"],
      architectureDirection: "vertical",
      approach:
        "Delivered a set of Azure-based applications: intelligent document processing with Azure Document Intelligence for invoice and contract extraction, a real-time meeting translation pipeline, and an enterprise chatbot built on Azure OpenAI and Azure AI Search over a private network.",
      challenges: [
        "Field extraction confidence varied across document types, requiring threshold tuning",
        "API throttling required a queue / worker architecture with retry strategy",
        "Real-time translation was sensitive to latency, timeouts, and network instability",
      ],
      engineeringDecisions: [
        "Confidence thresholds and retry strategy for document extraction",
        "Queue / worker architecture to absorb API throttling",
        "Timeout, retry, and fallback services for real-time translation to eliminate single points of failure",
        "Enterprise RAG chatbot deployed behind private networking with Azure AI Search",
      ],
      impact:
        "Delivered production-usable enterprise applications across document processing, real-time translation, and conversational AI, each operating within enterprise security and networking requirements.",
      lessons:
        "Enterprise AI applications are judged as much on latency, retries, and failure handling as on model quality.",
    },
  },
  {
    slug: "pcb-defect-detection",
    title: "PCB Defect Detection",
    tag: "Computer Vision · Manufacturing",
    summary:
      "A computer vision workflow for PCB defect inspection built around clearer labeling rules for ambiguous imagery.",
    tech: ["Computer Vision", "PyTorch", "Image Classification"],
    caseStudy: {
      problem:
        "PCB defect inspection involved ambiguous and blurry imagery that was difficult to label consistently, limiting model reliability.",
      approach:
        "Rather than treating uncertain images as normal samples, I worked with inspection specialists to establish labeling rules and dataset standards, and built a lightweight classification tool to help inspectors quickly categorize ambiguous images.",
      engineeringDecisions: [
        "Collaborated with domain experts to define labeling rules for edge cases",
        "Built a lightweight tool for rapid categorization of ambiguous images",
        "Treated dataset definition as a first-class engineering task, not a side step",
      ],
      impact:
        "Improved inspection consistency and downstream model reliability by fixing the definition of the data before iterating further on model architecture.",
      lessons:
        "Good industrial AI performance often depends more on data definition and human collaboration than simply changing the model architecture.",
    },
  },
  {
    slug: "battery-lifetime-prediction",
    title: "Battery Lifetime Prediction",
    tag: "Machine Learning · Battery AI",
    summary:
      "A battery degradation prediction project where expanding the dataset mattered more than tuning the model.",
    tech: ["Machine Learning", "PyTorch", "Python"],
    caseStudy: {
      problem:
        "Battery degradation prediction was limited by insufficient local training data, capping model accuracy.",
      approach:
        "Coordinated additional experiments and data collection with an overseas R&D team to expand the training dataset rather than only iterating on model complexity.",
      impact:
        "The expanded dataset improved model accuracy by approximately 5%, more than incremental model tuning had achieved on its own.",
      lessons:
        "Better data can be more valuable than a more complicated model.",
    },
  },
];
