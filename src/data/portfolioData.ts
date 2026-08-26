export type ProjectCategory =
  "All" | "AI" | "SaaS" | "Dev Tools" | "Infrastructure" | "Experiments";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  status: "active" | "building" | "shipped" | "archived";
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export interface TechCategory {
  label: string;
  items: string[];
}

export interface TimelineMilestone {
  era: string;
  detail: string;
}

export interface NowItem {
  type: "Building" | "Learning" | "Exploring";
  description: string;
}

export const siteConfig = {
  name: "Pranay Gupta",
  title: "Pranay Gupta — Developer & AI Engineer",
  description:
    "Pranay Gupta is a developer and AI engineer building software, AI systems, developer tools, and products.",
  url: "https://pranaygupta.dev",
  github: "https://github.com/Pranay6973",
  twitter: "https://x.com/Pranay7405871",
  linkedin: "", // Add if desired
  email: "pranay9343336973@gmail.com",
};

export const hero = {
  eyebrow: "Developer · AI Engineer · Builder",
  title: "I build software, AI systems, and products.",
  description:
    "I'm Pranay Gupta — a developer building full-stack applications, AI-powered systems, developer tools, and products. I learn by shipping real things and figuring out the rest along the way.",
};

export const about = {
  heading: "Building by doing.",
  paragraphs: [
    "I don't wait until I feel ready. I pick an idea, open an editor, and start building. That's how I learn — by wrestling with real problems, not following along with tutorials.",
    "My work spans full-stack web development, AI engineering, developer infrastructure, and product experimentation. I care about understanding how systems actually work under the hood: from database queries to API design, from LLM integration to containerized deployments.",
    "Right now I'm focused on building AI-powered applications, exploring developer tooling, and learning what it takes to turn an idea into a real product.",
  ],
};

export const focusAreas = [
  {
    title: "AI Engineering",
    desc: "Building AI-powered applications, agents, automation pipelines, and intelligent workflows using modern AI APIs and tooling.",
    icon: "Cpu", // Used to map to Lucide icons
  },
  {
    title: "Full-Stack Engineering",
    desc: "End-to-end product development across frontend, backend, APIs, databases, and infrastructure.",
    icon: "Layers",
  },
  {
    title: "Developer Tools",
    desc: "Exploring systems that improve developer productivity — tooling, CLIs, internal platforms, and workflow automation.",
    icon: "Terminal",
  },
  {
    title: "SaaS & Startups",
    desc: "Turning ideas into usable products with real-world architecture, business logic, and iterative learning.",
    icon: "Globe",
  },
  {
    title: "Infrastructure",
    desc: "Working with Docker, deployment pipelines, distributed services, and production-oriented system design.",
    icon: "Server",
  },
];

export const projects: Project[] = [
  {
    id: "project-ai-orchestration",
    title: "CognitiveAgent Orchestrator (Placeholder)",
    description:
      "A template description for your AI project. [Replace with your project details: e.g. An autonomous agent framework designed to spawn, evaluate, and coordinate task loops using OpenAI & Anthropic SDKs with trace visualizer.]",
    tags: ["Next.js", "TypeScript", "Anthropic SDK", "LangChain"],
    category: "AI",
    status: "building",
    featured: true,
  },
  {
    id: "project-saas-template",
    title: "OmniSaaS Core Platform (Placeholder)",
    description:
      "A template description for your SaaS project. [Replace with your SaaS details: e.g. A micro-SaaS framework supporting multi-tenant databases, Stripe subscriptions, user permissions, and fully integrated analytics dashboard.]",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    category: "SaaS",
    status: "building",
    featured: true,
  },
  {
    id: "project-dev-cli",
    title: "FastDeploy Container CLI (Placeholder)",
    description:
      "A template description for your Developer Tool. [Replace with your Dev Tool details: e.g. A zero-config command line utility designed to build, optimize, and push Docker images directly into multi-cloud environments.]",
    tags: ["TypeScript", "Node.js", "Docker", "CLI"],
    category: "Dev Tools",
    status: "shipped",
  },
  {
    id: "project-db-experiment",
    title: "VectorStore Graph Sync (Placeholder)",
    description:
      "A template description for your Experiment. [Replace with your Experiment details: e.g. A lightweight data pipeline syncing Postgres tables and Pinecone vector indexes in real-time using change data capture.]",
    tags: ["Python", "Docker", "PostgreSQL", "Pinecone"],
    category: "Experiments",
    status: "archived",
  },
];

export const techStack: TechCategory[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "Go"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML5/CSS3", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "Vercel", "Linux", "Git / GitHub", "CI/CD Actions"],
  },
  {
    label: "AI / Systems",
    items: [
      "Claude API",
      "OpenAI SDK",
      "Vector Databases",
      "MCP Servers",
      "AI Agents",
    ],
  },
];

export const nowItems: NowItem[] = [
  {
    type: "Building",
    description: "AI-powered products and multi-agent coordination systems",
  },
  {
    type: "Building",
    description:
      "Minimal developer tools to automate environment bootstrapping",
  },
  {
    type: "Learning",
    description:
      "Advanced TypeScript architectural patterns and clean systems design",
  },
  {
    type: "Learning",
    description:
      "Distributed web architectures and scalable database deployments",
  },
  {
    type: "Exploring",
    description:
      "SaaS product validation validation strategies and user onboarding",
  },
  {
    type: "Exploring",
    description:
      "Anthropic Model Context Protocol (MCP) server implementations",
  },
];

export const timeline: TimelineMilestone[] = [
  {
    era: "Started Building",
    detail:
      "Discovered programming, built first command-line shell utilities, and learned software fundamentals.",
  },
  {
    era: "Full-Stack Development",
    detail:
      "Shipped personal applications using React, Node.js, databases, and client-server communication structures.",
  },
  {
    era: "AI Systems Engineering",
    detail:
      "Began integrating Large Language Models, utilizing embeddings, and structuring vector search tools.",
  },
  {
    era: "Developer Infrastructure",
    detail:
      "Explored containerization via Docker, automated environment scripting, and set up CI/CD workflows.",
  },
  {
    era: "Startup Ideation & Products",
    detail:
      "Currently consolidating building blocks to prototype and launch robust developer-centric SaaS products.",
  },
];

export const philosophy = [
  {
    principle: "Build real things.",
    note: "Theoretical knowledge is validated only through code execution. Ship constantly.",
  },
  {
    principle: "Understand the system.",
    note: "Look through the abstractions. Understand how databases, protocols, and runtimes operate underneath.",
  },
  {
    principle: "Simple before clever.",
    note: "Avoid over-engineering. Clear, maintainable, readable code is always superior.",
  },
  {
    principle: "Experiment quickly.",
    note: "Iterative testing and rapid failures reveal true insights faster than perfect architectural design.",
  },
  {
    principle: "Learn from failures.",
    note: "Every server crash or compiler error is an opportunity to learn system mechanics.",
  },
  {
    principle: "Continuous refinement.",
    note: "Commit to regular optimization. Refine methods and keep the quality bar exceptionally high.",
  },
];
