# Personal Website Build Brief

請幫我設計並實作一個 **modern、premium、technical、minimalist 的個人 Portfolio Website**。

網站主人是：

**Hung-Hsun Han / 韓汯勳**

目前主要定位：

> **Enterprise AI Engineer · AI Solutions Builder · Agentic AI / RAG / Computer Vision / Cloud**

不要把網站做成傳統履歷頁，也不要只是把 CV 內容排成卡片。

我希望網站給人的感覺是：

* 技術能力強
* 做過真實企業 AI 專案
* 不只是模型研究，而是懂 deployment / production / cloud / integration
* 有能力從需求訪談、POC、architecture、development 到 production troubleshooting
* 熟悉 Enterprise AI、Agent、RAG、Computer Vision、Azure、Databricks
* Modern AI Engineer，而不是傳統 Data Scientist
* 有國際背景
* 乾淨、有設計感，不浮誇

---

# 1. Website Positioning

網站主要目標族群：

1. AI / Cloud / Software 招募者
2. Hiring Manager
3. AI Engineering / Solution Architecture 團隊
4. Microsoft / Azure / Databricks / Enterprise AI 相關職缺
5. 想了解我專案經驗的人
6. 技術合作對象

網站不應該像學生 Portfolio。

整體感覺應該接近：

> AI Engineer + Solution Architect + Builder

而不是：

> ML Research Student

網站的核心訊息：

> I build AI systems that move beyond prototypes and into real enterprise workflows.

可以進一步延伸為：

> From computer vision and RAG to AI agents and cloud deployment, I focus on turning AI prototypes into reliable enterprise solutions.

---

# 2. Hero Section

首頁第一屏要非常乾淨。

建議左側文字，右側使用 abstract technical visualization。

不要使用典型人物大頭照佔滿畫面。

## Main Heading

**Hung-Hsun Han**

副標：

**Enterprise AI Engineer & AI Solutions Builder**

主要描述：

> I design and build production-oriented AI systems across Agentic AI, RAG, Computer Vision, and Cloud — turning business problems into deployable AI solutions.

第二行可以：

> Currently working on enterprise AI adoption, intelligent automation, and AI infrastructure across industrial use cases.

CTA：

**View Projects**

次要 CTA：

**Explore My Experience**

另外可以有：

GitHub
LinkedIn
Email

---

# 3. Hero Visual

右邊不要放普通插圖。

希望做一個 animated AI architecture visualization。

例如幾個 floating nodes：

```text
Enterprise Data
      ↓
     RAG
      ↓
 AI Agents
      ↓
 Tools / APIs
      ↓
 Enterprise Systems
```

旁邊可以有：

```text
Computer Vision
Azure
Databricks
LangGraph
LLM
```

使用小型 glowing nodes 與線條連接。

動畫非常 subtle。

不要有過多 neon cyberpunk。

偏向：

* Linear
* Vercel
* OpenAI
* Anthropic
* Stripe
* modern developer portfolio

的質感。

---

# 4. About Me

Section title：

**Building AI that works beyond the demo**

內容：

I'm an AI Engineer focused on building practical enterprise AI systems.

My work spans the full AI delivery lifecycle — from identifying business problems and designing proof-of-concepts to developing, deploying, evaluating, and troubleshooting production-oriented systems.

My recent focus includes Agentic AI, Retrieval-Augmented Generation, enterprise knowledge systems, computer vision, multimodal AI, and cloud AI infrastructure.

At Taiwan Cement Group, I work across subsidiaries and business units to identify AI opportunities and transform them into usable solutions. This involves much more than model development: requirements discovery, system architecture, data integration, security, deployment, evaluation, user adoption, and continuous improvement.

Before that, I worked as a Data Scientist in the semiconductor industry, where I focused on machine learning and computer vision applications.

I received my Master's degree in Simulation Sciences from RWTH Aachen University, with a focus on machine learning and computer vision. My master's thesis applied machine learning to battery degradation and lifetime prediction.

I particularly enjoy solving the gap between:

**"The AI demo works."**

and

**"The AI system works reliably for real users."**

---

# 5. Core Expertise

不要單純用 skill bar。

用 4–6 個 capability blocks。

## Agentic AI & LLM Systems

Description:

Designing AI systems that combine reasoning, retrieval, tools, and workflows rather than relying on a single LLM call.

Keywords:

* LangGraph
* Multi-Agent Systems
* Tool Calling
* MCP
* Supervisor / Executor Agents
* Human-in-the-loop
* Deep Research
* AI Agents
* Workflow orchestration

---

## Retrieval-Augmented Generation

Description:

Building enterprise knowledge systems capable of searching, reasoning over, and comparing information across multiple documents and data sources.

Keywords:

* RAG
* Agentic RAG
* Chunking
* Embeddings
* Reranking
* Hybrid Search
* Vector Databases
* Milvus
* Azure AI Search
* Retrieval Evaluation

---

## Computer Vision & Multimodal AI

Description:

Developing industrial vision systems that combine object detection and multimodal models for more reliable visual understanding.

Keywords:

* YOLO
* Vision-Language Models
* Object Detection
* Industrial Vision
* Video Understanding
* Multimodal AI
* PyTorch
* Image Classification

---

## Enterprise AI & Cloud

Description:

Designing AI solutions that need to operate within enterprise infrastructure, security, networking, and compliance constraints.

Keywords:

* Microsoft Azure
* Azure OpenAI
* Azure AI Foundry
* Azure AI Search
* Azure Document Intelligence
* Azure Speech
* Private Endpoint
* VNet
* Identity
* Monitoring
* Container Apps

---

## AI Platform & Data

Keywords:

* Databricks
* Delta Lake
* Unity Catalog
* Lakehouse
* Lakehouse Federation
* MLflow
* Data Engineering
* MSSQL
* PostgreSQL
* MongoDB
* Supabase

---

## AI Engineering

Keywords:

* Python
* FastAPI
* Docker
* Git
* GitLab CI/CD
* GitHub Actions
* REST APIs
* Streamlit
* Gradio
* Chainlit
* n8n

---

# 6. Featured Projects

這是網站最重要的部分。

不要只是「Project title + 技術」。

每個專案應該回答：

**Problem → Approach → Engineering → Impact**

Cards 點擊後可以展開 detail。

---

# Project 1

## Enterprise Agentic RAG Assistant

Tag:

**Agentic AI · RAG · Enterprise Search**

Problem:

Enterprise R&D teams had years of technical reports and material data distributed across documents, making it difficult to quickly retrieve and compare historical knowledge.

Solution:

Designed an enterprise knowledge assistant using Agentic RAG and multi-step retrieval.

Instead of relying on a single retrieval query, the system allows an AI agent to repeatedly search and reason across multiple documents before composing an answer.

Engineering highlights:

* Multi-step retrieval
* Cross-document reasoning
* Retrieval logging
* RAG monitoring
* Evaluation workflow
* User feedback loop
* Retrieval quality improvement
* Enterprise knowledge integration

Impact:

Used by more than 20 R&D users.

One important lesson from this project was the difference between a successful POC and a reliable production AI system.

Initial user testing exposed incomplete answers caused by single-step retrieval.

I redesigned the workflow into an agent-based multi-retrieval architecture and introduced monitoring and evaluation mechanisms to continuously improve answer quality.

Tech:

LangGraph / RAG / LLM / Vector Database / Azure / Python

---

# Project 2

## AI Safety Monitoring Platform

Tag:

**Computer Vision · VLM · Industrial AI**

Problem:

Industrial safety monitoring requires continuously identifying potential safety violations from CCTV streams.

Traditional object detection alone may produce false positives or lack contextual understanding.

Solution:

Designed an AI safety monitoring system combining:

**YOLO object detection + Vision-Language Model verification**

Architecture concept:

```text
CCTV / RTSP
      ↓
YOLO Detection
      ↓
Candidate Violation
      ↓
VLM Verification
      ↓
Alert
      ↓
Email / Dashboard
```

The platform also supports natural-language querying of safety data through NL2SQL.

Capabilities:

* Real-time object detection
* VLM verification
* Violation notification
* CCTV / RTSP integration
* Safety analytics
* NL2SQL
* Trend analysis

The design reduces dependence on a single model and uses VLM reasoning as a verification layer.

Tech:

YOLOv8 / VLM / Python / FastAPI / SQL / RTSP

---

# Project 3

## Enterprise Material Ordering Assistant

Tag:

**AI Agent · Automation · Human-in-the-loop**

Problem:

Material ordering involved repetitive communication and system operations.

Solution:

Built an AI-assisted workflow using:

* n8n
* Dify
* Database integrations
* Human-in-the-loop approval

The system allows AI to assist users while keeping important operational actions under human confirmation.

Highlight:

Demonstrates how AI agents can integrate with real enterprise workflows rather than operating as standalone chatbots.

---

# Project 4

## Cement Recipe Multi-Objective Optimization

Tag:

**Optimization · Industrial AI**

Goal:

Optimize cement mixture formulations based on multiple competing objectives.

Variables include:

* Cement
* Slag
* Fly ash

Objectives:

* Minimize cost
* Reduce carbon emissions
* Maintain required material constraints

Approach:

Multi-Objective Linear Programming.

This project represents the intersection between:

**AI / Optimization / Sustainability / Industrial Engineering**

---

# Project 5

## Azure AI Enterprise Applications

Tag:

**Azure · Enterprise AI · Cloud**

A collection of enterprise AI applications built using Microsoft Azure.

Examples include:

### Intelligent Document Processing

Azure Document Intelligence for invoice and contract extraction.

Engineering considerations:

* Field extraction
* Confidence thresholds
* Retry strategy
* API throttling
* Queue / worker architecture

### Real-time Meeting Translation

Architecture:

```text
Speech
↓
Azure Speech-to-Text
↓
Translation
↓
Real-time UI
```

Engineering challenges:

* Latency
* Timeout
* Network instability
* Retry
* Fallback
* Single-point-of-failure mitigation

### Enterprise Chatbot

Using:

Azure OpenAI
Azure AI Search
Enterprise RAG
Private networking

---

# Project 6

## PCB Defect Detection

Tag:

**Computer Vision · Manufacturing**

Developed a computer vision workflow for PCB defect inspection.

One key challenge was ambiguous and blurry imagery.

Instead of treating uncertain images as normal samples, I worked with inspection specialists to establish labeling rules and dataset standards.

A lightweight classification tool was created to help inspectors quickly categorize ambiguous images.

Key lesson:

Good industrial AI performance often depends more on **data definition and human collaboration** than simply changing the model architecture.

---

# Project 7

## Battery Lifetime Prediction

Tag:

**Machine Learning · Battery AI**

During my work and research involving battery degradation prediction, insufficient local training data limited model accuracy.

Additional experiments and data were coordinated with an overseas R&D team.

The expanded dataset improved model accuracy by approximately 5%.

This experience reinforced an important ML lesson:

> Better data can be more valuable than a more complicated model.

---

# 7. Production Engineering Philosophy

建立一個特別 section：

# Beyond the POC

這可以成為整個網站最有特色的部分。

顯示：

```text
POC
↓
Production
```

中間列出真正需要處理的問題：

```text
Model Quality
     ↓
Evaluation
     ↓
Latency
     ↓
Networking
     ↓
Authentication
     ↓
Security
     ↓
Monitoring
     ↓
Cost
     ↓
Reliability
     ↓
User Adoption
```

文字：

A model working in a notebook is only the beginning.

Production AI requires understanding the entire system around the model — networking, authentication, security, latency, monitoring, data quality, failure handling, and user workflows.

This is the area of AI engineering that interests me most.

---

# 8. Troubleshooting Mindset

新增一個 section：

**How I approach production problems**

可以做成 horizontal flow：

```text
Impact
↓
Evidence
↓
Hypothesis
↓
Isolation
↓
Mitigation
↓
Root Cause
↓
Prevention
```

描述：

When troubleshooting production AI systems, I prefer evidence-driven debugging rather than immediately changing the model.

I typically separate the problem into layers:

```text
Application
Model
API
Authentication
Networking
Infrastructure
Data
```

Then identify where the failure actually occurs.

For production incidents, my priority is:

1. Reduce user impact
2. Establish a workaround
3. Identify root cause
4. Implement the fix
5. Add monitoring or safeguards to prevent recurrence

---

# 9. Selected Engineering Stories

可以放幾個小 Story Cards。

## Production Incident — Real-Time Translation

During rehearsal, a real-time translation system experienced timeout and latency problems.

Instead of treating it as one issue, the system was decomposed into:

* Speech recognition
* Translation
* Network
* Application

Mitigations included:

* Timeout handling
* Retry mechanisms
* Fallback services
* Offline backup
* Network improvements
* Eliminating single points of failure

The production event subsequently operated reliably.

---

## Improving Enterprise RAG

Initial RAG answers were sometimes incomplete when users asked questions requiring information from multiple documents.

Rather than tuning prompts alone, retrieval logs were introduced to inspect what information the system actually retrieved.

The architecture was then upgraded from single retrieval to agent-driven iterative search.

Lesson:

> Observability is essential for debugging AI systems.

---

## Working with Domain Experts

Industrial AI systems cannot be built in isolation.

For PCB defect detection, ambiguous images required collaboration with inspection specialists to establish labeling rules and clarify edge cases.

Lesson:

> Domain knowledge is part of the model.

---

# 10. Experience Timeline

Timeline style.

## Taiwan Cement Group / TCC

**AI Engineer / Innovation Project Manager**

2024 – Present

Focus:

* Enterprise AI strategy and implementation
* Agentic AI
* RAG
* Computer Vision
* Azure AI
* Databricks
* AI workshops
* Cross-functional AI projects

Responsibilities:

* Identify AI opportunities across business units
* Conduct requirements interviews
* Design POCs
* Develop AI solutions
* Coordinate stakeholders
* Evaluate models
* Design deployment architecture
* Troubleshoot production issues
* Promote AI adoption

---

## NavCore Tech

**Data Scientist**

2023 – 2024

Industry:

Semiconductor

Focus:

* Computer Vision
* Machine Learning
* Industrial AI
* Data Analysis

---

## RWTH Aachen University

**M.Sc. Simulation Sciences**

Focus:

Machine Learning / Computer Vision

Master Thesis:

Machine Learning for Battery Degradation and Lifetime Prediction

---

# 11. AI Education & Knowledge Sharing

這是我的差異化之一，可以放一區：

## Making AI understandable

Besides developing AI systems, I also teach and promote AI adoption inside the enterprise.

Topics include:

* Generative AI fundamentals
* Enterprise RAG
* AI Agents
* OCR
* Document AI
* AI automation
* Prompt engineering
* Computer Vision
* Azure AI
* Databricks
* Enterprise AI architecture

I enjoy translating complex AI concepts into practical workflows that non-AI teams can understand and use.

---

# 12. Technical Stack

不要用超多 logo 亂塞。

按照 architecture layer 分類。

## AI / LLM

```text
OpenAI
Azure OpenAI
LangChain
LangGraph
LlamaIndex
Dify
MCP
```

## Machine Learning

```text
PyTorch
YOLO
Computer Vision
VLM
ML
Optimization
```

## Cloud

```text
Microsoft Azure
Azure AI Foundry
Azure OpenAI
Azure AI Search
Azure Document Intelligence
Azure Speech
Azure Container Apps
```

## Data

```text
Databricks
Delta Lake
Unity Catalog
Milvus
MongoDB
PostgreSQL
MSSQL
Supabase
```

## Engineering

```text
Python
FastAPI
Docker
Git
GitLab
GitHub Actions
REST API
Streamlit
Gradio
Chainlit
```

## Automation

```text
n8n
MCP
AI Agents
Tool Calling
Human-in-the-loop
```

---

# 13. Currently Exploring

增加一個比較動態的 section。

Title：

**Currently Exploring**

內容：

### Agentic AI

Building reliable multi-agent systems with tool use, verification, planning, and human oversight.

### Enterprise Agentic RAG

Moving beyond traditional retrieve-and-answer pipelines toward iterative retrieval, reasoning, verification, and self-correction.

### Vision-Language Models

Exploring VLM-based verification for industrial object detection and video understanding.

### AI Infrastructure

Understanding how networking, identity, security, observability, and deployment architecture affect real-world AI systems.

### AI Coding Agents

Exploring how modern coding agents can accelerate software development and enterprise automation.

---

# 14. Personal Engineering Principles

希望設計成 4 張簡潔卡片。

## Build for reality

A successful demo is not the same as a reliable product.

## Observe before optimizing

Logs, traces, evaluation, and evidence should guide improvements.

## Systems over models

Many AI failures originate outside the model itself.

## Human + AI

The best enterprise AI systems augment domain experts rather than attempting to remove them from the workflow.

---

# 15. Contact Section

最後非常簡潔。

Headline：

**Let's build something useful with AI.**

Description：

I'm interested in AI engineering, enterprise AI systems, cloud AI, Agentic AI, and production-scale AI applications.

Buttons:

**LinkedIn**

**GitHub**

**Email Me**

---

# 16. UI / UX Design Direction

## Overall visual language

希望風格：

**Modern / Technical / Premium / Minimal**

不要：

* 傳統 Bootstrap Portfolio
* 滿版漸層
* 過多霓虹
* cyberpunk
* 到處 glowing
* 太多玻璃效果
* 技能百分比 progress bar
* 圓形 skill chart
* 打字機動畫
* 大量 emoji
* 卡片全部長一樣
* 過多陰影

---

# 17. Color Palette

優先 Dark Mode。

Background：

```text
#08090A
#0D0E10
```

Cards：

```text
#111315
#151719
```

Main text：

```text
#F5F5F5
```

Secondary：

```text
#9CA3AF
```

Accent 可以使用：

```text
Electric Blue
Soft Cyan
Indigo
```

但只當 accent。

例如：

```text
#5B8CFF
```

不要整頁藍紫 gradient。

可以使用非常 subtle 的：

```text
blue → cyan
```

作為 border glow 或 architecture line。

---

# 18. Typography

推薦：

Headings：

**Inter / Geist / Manrope**

Technical text：

**JetBrains Mono**

Body：

**Inter / Geist**

Hero Name 可以 64–80px desktop。

網站 typography 要有大量 whitespace。

---

# 19. Navigation

Sticky navigation。

Logo 可以：

```text
HH.
```

或者：

```text
Hung-Hsun Han
```

Navigation：

```text
About
Work
Experience
Stack
Contact
```

右側：

```text
GitHub icon
LinkedIn icon
```

---

# 20. Website Structure

完整結構：

```text
Navbar

Hero

About

Core Expertise

Featured Projects

Beyond the POC

Engineering Stories

Experience

Technical Stack

Currently Exploring

Engineering Principles

Contact

Footer
```

---

# 21. Project Interaction

Featured Project 不要全部把文字攤開。

首頁先顯示：

```text
Project Name
Category
1 sentence
Tech
```

點擊：

**View Case Study**

之後展開：

```text
Problem

Architecture

Approach

Challenges

Engineering Decisions

Impact

Lessons
```

Project card hover 可以有輕微：

```text
border highlight
translateY
cursor glow
```

不要誇張動畫。

---

# 22. Architecture Diagrams

我的網站應該大量使用簡單 architecture diagram。

例如：

```text
User
 ↓
Agent
 ↓
Retriever
 ↓
Vector DB
 ↓
LLM
```

以及：

```text
CCTV
 ↓
YOLO
 ↓
VLM
 ↓
Alert
```

這會比一般作品集單純 screenshot 更符合我的定位。

Diagram style：

* minimalist
* rounded rectangle
* 1 px border
* subtle glow
* animated connection line
* monochrome + blue accent

---

# 23. Subtle Animations

使用：

Framer Motion。

可使用：

* fade in
* slide up 10–20px
* architecture line animation
* subtle card hover
* text reveal
* scroll progress

Duration 約：

```text
300–600 ms
```

不要：

```text
massive parallax
3D camera
heavy WebGL
excessive motion
```

Performance 優先。

---

# 24. Mouse Interaction

可以加入非常 subtle cursor spotlight。

例如 mouse 移動時：

```text
radial-gradient
```

跟著 cursor。

Opacity 很低。

不要出現大光球。

---

# 25. Background

Hero background 可以有：

```text
subtle grid
```

例如：

```text
40px × 40px grid
```

opacity 約：

```text
0.03–0.06
```

加上輕微 radial gradient。

讓整體像 modern AI developer website。

---

# 26. Responsive

Mobile 必須非常乾淨。

Desktop：

```text
Hero
text        visualization
```

Mobile：

```text
Hero text
visualization
```

Project cards：

Desktop：

```text
2 columns
```

Mobile：

```text
1 column
```

---

# 27. Tech Stack for Website

建議：

```text
Next.js
TypeScript
Tailwind CSS
Framer Motion
Lucide Icons
```

部署：

```text
GitHub
↓
GitHub Actions
↓
GitHub Pages
```

如果 Next.js 使用 GitHub Pages：

必須使用 static export。

例如：

```javascript
output: "export"
```

不要使用需要 server runtime 的 feature。

如果 GitHub Pages deployment 過於麻煩，也可以設計成：

```text
Vite + React + TypeScript
```

但優先：

```text
Next.js + static export
```

---

# 28. SEO

設定：

Title：

**Hung-Hsun Han | Enterprise AI Engineer**

Description：

**Enterprise AI Engineer specializing in Agentic AI, RAG, Computer Vision, Azure, and production AI systems.**

Keywords：

```text
AI Engineer
Enterprise AI
Agentic AI
RAG
LLM
Computer Vision
Azure AI
Databricks
AI Agents
LangGraph
Taiwan AI Engineer
```

加入：

OpenGraph metadata。

---

# 29. GitHub CI/CD

請建立：

```text
.github/workflows/deploy.yml
```

流程：

```text
Push main
↓
Install dependencies
↓
Lint
↓
Build
↓
Static export
↓
Deploy GitHub Pages
```

網站每次 push 到：

```text
main
```

自動更新。

---

# 30. Repository Structure

希望乾淨，例如：

```text
portfolio/
│
├── app/
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Expertise.tsx
│   ├── Projects.tsx
│   ├── ArchitectureDiagram.tsx
│   ├── Experience.tsx
│   ├── TechStack.tsx
│   └── Contact.tsx
│
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   └── technologies.ts
│
├── public/
│
├── styles/
│
└── .github/
    └── workflows/
        └── deploy.yml
```

Project 內容盡量 data-driven。

不要把所有內容 hard-code 在 component。

---

# 31. Code Quality

要求：

* TypeScript
* reusable components
* clear folder structure
* responsive
* semantic HTML
* accessibility
* keyboard navigation
* optimized assets
* SEO metadata
* no unnecessary dependencies
* Lighthouse-friendly
* avoid hydration issues
* no console errors

---

# 32. Language

網站主要使用：

**English**

因為定位包含國際公司與國際 AI / Cloud 職涯。

未來可以預留：

```text
EN / 中文
```

language switch。

但第一版先 English。

---

# 33. Important Content Principle

不要把網站寫得像：

> I am passionate about AI and love learning new technologies.

這種 generic AI engineer 描述。

應該透過專案證明能力。

強調：

```text
Problem
Architecture
Engineering decision
Production challenge
Outcome
```

而不是一直說：

```text
passionate
innovative
hardworking
fast learner
```

---

# 34. Main Personal Brand

整個網站最後應該讓 Hiring Manager 對我留下：

> Hung-Hsun is an AI engineer who understands both AI models and the systems required to make them work inside real enterprises.

第二印象：

> He can work across LLM, RAG, Agent, Computer Vision, Cloud, Data, and enterprise integration instead of being limited to one AI specialization.

第三印象：

> His strength is moving AI from POC toward production.

這三點是整個網站最重要的設計原則。

---

# 35. Optional Premium Feature

如果實作成本合理，可以在首頁加入一個 interactive terminal：

```text
> whoami

Hung-Hsun Han
Enterprise AI Engineer

> focus

Agentic AI
RAG
Computer Vision
Enterprise AI

> current_mission

Turning AI prototypes into production systems.
```

但 terminal 不要太 geeky。

只是一個 subtle visual component。

---

# 36. Footer

簡單：

```text
Hung-Hsun Han
Enterprise AI Engineer

Built with Next.js

Taiwan
```

加 GitHub / LinkedIn。

---

# Final Requirement

請不要只建立 skeleton。

請直接產生完整可執行網站。

完成：

* UI
* Responsive design
* animations
* content
* project data
* navigation
* SEO
* GitHub Pages deployment
* GitHub Actions
* README
* installation instructions

網站必須可以：

```bash
npm install
npm run dev
```

直接啟動。

並且：

```bash
npm run build
```

成功。

最終網站應該像一個：

**2026 modern AI Engineer portfolio**

而不是傳統工程師履歷網站。
