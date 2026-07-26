import React from 'react';

// Portfolio Content Data
// Edit this file to customize your portfolio content

export const RESUME_LINK = "/resume.pdf"; // Update with your actual resume PDF path

export const heroContent = {
  name: "Amah Martin",
  emoji: "👋🏿",
  intro: "Building enterprise analytics infrastructure and self-service platforms that transform data into decisions.",
  highlights: ["coding", "photography", "laser engraving"],
};

export const heroHighlights = [
  "I love coding",
  ", photography",
  " and laser engraving!",
];

// Structured highlights data (for future presenter adapters)
export interface HighlightItem {
  text: string;
  highlight?: boolean; // Optional - defaults to false for backward compatibility
}

export const heroHighlightsStructured: HighlightItem[] = [
  { text: "I love coding", highlight: true },
  { text: ", photography", highlight: false },
  { text: " and laser engraving!", highlight: true },
];

// Helper to combine highlights array into highlighted JSX
export function buildHighlightedHighlights(highlights: string[]): React.ReactNode {
  if (!highlights.length) return "";
  const combinedText = highlights.join("");
  return highlightPhrases(combinedText, highlights);
}

// Pure function adapter for phrase highlighting (testable, isolated)
// Returns React nodes that can be rendered directly in React components
export function highlightPhrases(text: string, phrases: string[]): React.ReactNode {
  if (!text || !phrases.length) {
    return text;
  }

  const resultParts: (string | React.ReactNode)[] = [];
  let lastEnd = 0;

  for (const phrase of phrases) {
    const index = text.indexOf(phrase, lastEnd);
    if (index !== -1) {
      // Add non-highlighted text before this phrase
      if (index > lastEnd) {
        resultParts.push(text.substring(lastEnd, index));
      }
      // Add highlighted phrase using React.createElement for proper parsing
      resultParts.push(React.createElement('span', { className: 'highlight-accent' }, phrase));
      lastEnd = index + phrase.length;
    }
  }

  // Add any remaining text after the last match
  if (lastEnd < text.length) {
    resultParts.push(text.substring(lastEnd));
  }

  return resultParts;
}

// About Section Content
export const aboutSection = {
  title: "Behind the Data",
  subtitle: "I'm Amah. I build data analytics infrastructure that turns chaos into clarity. Whether it involves validating quality across 14M+ customer records, building Power BI models for marketing teams, or automating workflows that save hundreds of hours annually, I care about data quality as much as I care about outcomes.",
  intro: "The way I work: I solve problems that involve messy processes and data, have conversations with stakeholders to gather context and feasibility, build something useful, then iterate with feedback. I value effective work over shiny tools. Whether it's re-designing SQL models that cut ETL time or creating Python automation scripts that replace weekly hours of work, I focus on getting things done.",
  mostRecent: "Completed the 10-week Intensive Data Engineering Zoomcamp Course where I built a scalable cloud-native data platform that processed ~87GB of data using GCP infrastructure (Terraform, Docker), Airflow orchestration, and dbt analytics engineering. Now I'm in a LLM AI Zoomcamp building RAG applications to explore how generative AI can augment traditional data work.",
  careerHistory: "Before that: Worked at Humana as Data Scientist and Data Reporting Specialist supporting a $30B healthcare enterprise; previously served as an Epidemiology at Cabinet for Health and Family Services where I built a SAS automation process that reduced compliance reporting from 6 hours to under 30 minutes.",
  education: "Certified Azure Data Engineer Associate | Data Engineering Zoomcamp Graduate | Cloud Architecture • Production ETL • dbt Modeling • Python & SQL for Data Engineering. Currently building a RAG AI capstone project using LLMs. The GitHub repos below are actual projects I have built.",
};

export interface ProjectItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  category: "Data Engineering" | "Data Analytics" | "Front-End Engineering" | "AI Engineering";
  techStack: string[];
  link?: string;
  githubLink?: string;
}

// Updated with real project data
export const projects: ProjectItem[] = [
  {
    id: "project-1",
    imageSrc: "/assets/projects/project1.svg", // Using placeholder SVG
    imageAlt: "Cloud Native Storage Metrics ETL Orchestration Dashboard - Streamlit visualization interface showing drive health metrics and failure rates over time",
    title: "Cloud Native Storage Metrics ETL Orchestration Dashboard",
    description:
      "End-to-end data pipeline that ingests Backblaze's daily SMART health snapshots, transforms metrics using dbt on BigQuery, and delivers interactive visualizations through Streamlit to help users make evidence-based storage hardware decisions.",
    problem:
      "Consumer-grade storage drives carry high failure risk, yet users purchase based on marketing specifications rather than empirical longevity data, leading to unexpected hardware failures and data loss.",
    solution:
      "Built an automated batch pipeline with Apache Airflow orchestrating Python ETL tasks (download → Parquet conversion → GCS upload), dbt applying star schema transformations on BigQuery, and a Streamlit dashboard with Plotly visualizations showing failure rates by manufacturer over time.",
    impact:
      "Automated ingested daily SMART health snapshots from Backblaze to build a star schema data model in BigQuery, enabling users to make evidence-based decisions on hard drive purchases rather than relying on marketing specifications.",
    category: "Data Engineering",
    techStack: ["PYTHON", "SQL", "AIRFLOW", "DBT", "DOCKER", "TERRAFORM", "GOOGLE CLOUD PLATFORM", "BIGQUERY"],
    link: "https://github.com/ammartin8/storage_metrics_etl_orchestration",
  },
  {
    id: "project-2",
    imageSrc: "/assets/projects/project2.svg", // Using placeholder SVG
    imageAlt: "NYC Taxi Analytics Pipeline & Data Engineering Portfolio - Multi-layer architecture diagram showing data flow from raw ingestion to production-grade warehousing and business intelligence",
    title: "NYC Taxi Analytics Pipeline & Data Engineering Portfolio",
    description:
      "Comprehensive data engineering portfolio demonstrating end-to-end analytics pipelines processing 20+ million NYC TLC taxi records, from raw ingestion through production-grade warehousing to business intelligence reporting.",
    problem:
      "Raw taxi trip data lacks structure and data quality for actionable business insights; the pipeline addresses this by implementing automated ETL with deduplication logic (handling of duplicate records), enriched dimension tables, and comprehensive data quality tests on critical fields like payment type.",
    solution:
      "Multi-layer architecture featuring Kestra orchestration with Terraform IaC, BigQuery optimization strategies, dbt with unique_key incremental loads and accepted_values tests, plus streaming pipelines using Kafka/Flink with tumbling and session windows for real-time analytics.",
    impact:
      "Built multi-layer architecture using Kestra orchestration, BigQuery DATE partitioning and CLUSTER BY optimization (reducing 310MB queries to 26MB), dbt with unique_key incremental loads and accepted_values data quality tests, plus Kafka/Flink streaming pipelines with tumbling and session windows.",
    category: "Data Engineering",
    techStack: ["GOOGLE CLOUD PLATFORM", "TERRAFORM", "DOCKER", "POSTGRESQL", "BIGQUERY", "DBT", "KESTRA", "APACHE SPARK", "APACHE KAFKA", "PYFLINK", "REDPANDA"],
    link: "https://github.com/ammartin8/data_engineering_zoom_camp",
  },
  {
    id: "project-3",
    imageSrc: "/assets/projects/project3.svg", // Using placeholder SVG
    imageAlt: "LLM Zoomcamp Course & Portfolio Capstone - RAG pipeline architecture showing vector embeddings, hybrid search, and agentic workflows",
    title: "LLM Zoomcamp Course & Portfolio Capstone (In-Progress)",
    description:
      "Production-ready AI systems portfolio documenting a 10-week journey building RAG pipelines, agentic workflows, vector search engines, and orchestrated LLM applications, currently in active development with Modules 1-3 completed.",
    problem:
      "The gap between LLM theory and practical production implementation requires hands-on experience creating systems that answer questions about custom knowledge bases, implement agentic tool use, master vector embeddings, and deploy monitored applications at scale.",
    solution:
      "Implements RAG pipelines from scratch using keyword and vector search, builds AI agents with function calling capabilities, creates hybrid search strategies combining text and vector methods, and deploys orchestrated workflows using Kestra for deterministic task-based execution with Google Cloud Platform infrastructure.",
    impact:
      "Bridged the gap between LLM theory and production implementation by building RAG pipelines, agentic workflows with tool use, and hybrid search strategies demonstrating the ability to translate cutting-edge AI research into deployable business applications.",
    category: "AI Engineering",
    techStack: ["PYTHON", "LANGCHAIN", "LLAMA INDEX", "HUGGINGFACE TRANSFORMERS", "SENTENCE-TRANSFORMERS", "CHROMADB", "FAISS", "PINECONE", "QDRANT", "OLLAMA", "VLLM", "LM STUDIO", "KESTRA", "LANGGRAPH", "DOCKER", "TERRAFORM", "GOOGLE CLOUD PLATFORM", "ONNX RUNTIME"],
    link: "https://github.com/ammartin8/llm_zoomcamp_portfolio",
  },
  {
    id: "project-4",
    imageSrc: "/assets/projects/project1.svg", // Using placeholder SVG
    imageAlt: "Modern React Portfolio Platform - Professional portfolio website with custom design system, scroll-triggered animations, and enterprise-grade architecture",
    title: "Modern React Portfolio Platform",
    description:
      "Professional portfolio website rebuilt from static Jekyll to modern React + TypeScript + Vite with custom design system, animations, and enterprise-grade architecture showcasing data analytics engineering expertise.",
    problem:
      "The previous static site lacked modern web technologies and dynamic features needed to effectively showcase data analytics engineering capabilities and recent cloud-native ETL data pipeline work.",
    solution:
      "Complete modernization to React 19 + TypeScript + Vite + Tailwind CSS v4 + Framer Motion with custom typography system, scroll-triggered animations, client-side routing, and modular component architecture mirroring enterprise code bases.",
    impact:
      "Modernized portfolio from static Jekyll site to production-grade React + TypeScript application, showcasing enterprise-level coding practices including type safety, component reusability, accessibility compliance, and modern build optimization that better communicates technical proficiency to hiring managers.",
    category: "Front-End Engineering",
    techStack: ["REACT", "TYPESCRIPT", "VITE", "TAILWIND CSS", "FRAMER MOTION", "REACT ROUTER DOM"],
    link: "#",
    githubLink: "https://github.com/ammartin8/dev-portfolio-project",
  },
  {
    id: "project-5",
    imageSrc: "/assets/projects/project1.svg", // Using placeholder SVG
    imageAlt: "Healthcare Data Breaches Analysis Dashboard - Tableau visualization showing healthcare data breach patterns, geographic distribution, and incident categorization",
    title: "Healthcare Data Breaches Analysis Dashboard",
    description:
      "Visual analytics dashboard analyzing US healthcare data breaches using Verizon DBIR Healthcare Snapshot data 2002-2020 (VERIS framework), revealing patterns in cyber-security incidents affecting patient records across the United States.",
    problem:
      "Healthcare organizations face increasing cybercriminal attacks targeting sensitive patient data, requiring business intelligence tools to understand breach trends, geographic hotspots, and risk factors to support compliance monitoring and security strategy planning.",
    solution:
      "Applied Python-based exploratory data analysis followed by Tableau visualization to distribute breaches geographically, categorize by breach type, and assess impact on healthcare providers and patients using self-reported and official HIPAA-mandated reporting data for nearly 2000+ incidents in the United States.",
    impact:
      "Provides actionable business intelligence on cyber-security risks in healthcare, enabling stakeholders to identify breach patterns and temporal trends that inform security investments and regulatory compliance efforts.",
    category: "Data Analytics",
    techStack: ["TABLEAU", "PYTHON"],
    link: "https://public.tableau.com/views/HealthcareDataBreachesintheUnitedStates/DataBreaches",
  },
];

export const contactLinks = [
  {
    label: "Email",
    href: "mailto:ammartin8842@gmail.com",
    url: "mailto:ammartin8842@gmail.com",
    description: "For opportunities & questions",
    icon: "FaEnvelope",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/amahmartin",
    url: "linkedin.com/in/amahmartin",
    description: "Connect with me",
    icon: "FaLinkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/ammartin8",
    url: "github.com/ammartin8",
    description: "View my code",
    icon: "FaGithub",
  },
];



// Summary Card Data - Used by SummaryCard component
export const summaryCardData = {
  solutions: "Analytics · Data Platforms · ETL Pipelines · Data Products",
  location: "Ohio",
  careerAdv: "4 Microsoft Certs · 2 DE Certs · 1 AI Cert",
  mostRecent: "Data Scientist @ Humana",
  status: "OPEN TO BUILD",
};

// What I'm Looking For text - used in SummaryCard component
export const summaryCardLookingFor = `Teams that tackle hard data problems. Analytics/Data Engineer roles across health, tech, and life science industries building data platforms at scale. Will travel for the right team.`;

// Projects section header data
export const projectsHeader = {
  title: "The builds.",
  subtitle: "Each entry are projects and systems I built including the problems, solutions, and impact made. Click links to learn more",
  highlights: ["builds."],  // Highlighted phrases for the Projects section
};

// footerLinks removed per Issue 16 - Footer now displays copyright only
