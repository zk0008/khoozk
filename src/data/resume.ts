// All site copy lives here so the resume can be updated without touching layout code.

export const profile = {
  name: "Ze Kang",
  fullName: "Khoo Ze Kang",
  email: "zekangkhoo@gmail.com",
  linkedin: "https://www.linkedin.com/in/ze-kang-khoo-",
  github: "https://github.com/zk0008",
};

export const navLinks = [
  { id: "experience", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const stats = [
  { value: "40×", label: "faster daily reporting job (70s → 1.75s)" },
  { value: "3,000+", label: "account records unified into 500" },
  { value: "100", label: "active users on my final-year app" },
];

// One fact is revealed per bug caught in the hero mini-game, in this order.
// The number of bugs to hunt equals the number of facts here.
export const bugFacts = [
  "Cut a daily reporting job from 70s to 1.75s.",
  "Turned 50–100 page bank statements into structured JSON with a multimodal LLM pipeline.",
  "Reconciled 3,000+ account records into 500 unique accounts.",
  "Deployed a collaborative AI education chatbot to 100 active users.",
  "Designed a LangGraph multi-agent system with real-time SSE streaming.",
  "Trained a CNN that retrains online from user corrections.",
  "Worked across Sitefinity, Kentico, Umbraco and Strapi in one internship.",
  "Tutored students in robotics and Python.",
  "Helped build school toilets in Laos.",
  "Applied Content Security Policy (CSP) web security controls.",
];

export type Role = {
  title: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const roles: Role[] = [
  {
    title: "Software Engineer Intern",
    company: "Lumen Capital Investors",
    period: "Jul – Dec 2026",
    summary: "AI document extraction, data pipelines and compliance tooling.",
    highlights: [
      "Built a multimodal LLM pipeline that turns 50–100 page bank statements into structured JSON, and benchmarked AI document-extraction services.",
      "Deployed a daily Azure job that detects CRM data changes and publishes SSO-protected reports, cutting runtime from 70s to 1.75s.",
      "Designed a unified account data model that consolidated 3,000+ records into 500 unique accounts.",
      "Built a compliance tool for quarterly leverage-limit breach reviews, defining case rules and leading the production release.",
      "Engineered a rules-based wealth calculation engine for a KYC application.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Amber Creative",
    period: "May – Dec 2025",
    summary: "Full-stack work on live web applications in ASP.NET MVC across multiple CMS platforms.",
    highlights: [
      "Supported front and back end on CMS platforms including Sitefinity, Kentico, Umbraco and Strapi.",
      "Sped up pages with caching and new API endpoints; built dynamic pages on REST and GraphQL.",
      "Supported deployments across dev, UAT, staging and prod; troubleshot Linux servers and applied CSP.",
      "Refactored front-end and back-end code for a CMS platform upgrade.",
    ],
  },
  {
    title: "Part-time Coding Instructor",
    company: "NK Robotics",
    period: "May – Aug 2024",
    summary: "Taught robotics and Python, adapting lessons to each student.",
    highlights: [
      "Ran assessments to gauge each student's level.",
      "Tailored the curriculum to individual needs.",
    ],
  },
  {
    title: "Intern",
    company: "Meiban Micro",
    period: "Jun – Aug 2020",
    summary: "Production and quality control in a clean-room environment.",
    highlights: ["Generated system reports and analyzed data with Minitab."],
  },
];

export const projectTags = ["AI", "Mobile", "Web", "Systems"] as const;
export type ProjectTag = (typeof projectTags)[number];

export type Project = {
  name: string;
  kind: string;
  year: string;
  blurb: string;
  stack: string[];
  tags: ProjectTag[];
};

export const projects: Project[] = [
  {
    name: "Collaborative Chatbots for Education",
    kind: "Final-year project",
    year: "2026",
    blurb:
      "A full-stack collaborative AI education chatbot with real-time features, role-based access and a hybrid RAG pipeline. Deployed for 100 active users on iOS and Android.",
    stack: ["React Native", "RAG", "Real-time"],
    tags: ["AI", "Mobile"],
  },
  {
    name: "FinAgent-SG",
    kind: "Agentic AI",
    year: "2026",
    blurb:
      "Multi-tenant agentic AI SaaS that automates Singapore accounting compliance, with per-client PostgreSQL isolation and a LangGraph multi-agent system streaming over SSE.",
    stack: ["LangGraph", "PostgreSQL", "RAG", "SSE"],
    tags: ["AI", "Web"],
  },
  {
    name: "IoT-Digit-App",
    kind: "Internet of Things",
    year: "2026",
    blurb:
      "A cloud-connected digit-recognition mobile app with real-time inference from a self-trained CNN that retrains on user corrections.",
    stack: ["Expo", "Flask", "CNN", "GCP"],
    tags: ["AI", "Mobile"],
  },
  {
    name: "PolyQuest",
    kind: "Software project (SDLC)",
    year: "2024",
    blurb: "A team-built web app with a personality quiz for personalized course recommendations. I focused on the front end.",
    stack: ["React", "Mantine", "Tailwind"],
    tags: ["Web"],
  },
  {
    name: "Hospital Management System Application",
    kind: "Java project",
    year: "2024",
    blurb: "A team-built object-oriented Java application applying MVC and SOLID principles.",
    stack: ["Java", "OOP", "MVC"],
    tags: ["Systems"],
  },
  {
    name: "Contact Tracing Mobile Application",
    kind: "Final-year project",
    year: "2020",
    blurb: "A location-tracking Java mobile app using Cloud Firestore for data and Node.js for web and map services.",
    stack: ["Java", "Firestore", "Node.js"],
    tags: ["Mobile"],
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C#", "C++", "C", "SQL", "Assembly"],
  },
  {
    label: "Web & mobile",
    items: ["React", "React Native", "Node.js", "Flask", "Razor (CSHTML)", "HTML", "CSS"],
  },
  {
    label: "Data & AI",
    items: ["PostgreSQL", "SQLAlchemy", "Alembic", "LangGraph", "RAG", "MCP"],
  },
  {
    label: "Tools",
    items: ["Git", "Linux"],
  },
];

export const education = [
  {
    school: "Nanyang Technological University",
    award: "Bachelor of Computing in Computer Science",
    period: "Aug 2023 – Jan 2027",
  },
  {
    school: "Nanyang Polytechnic",
    award: "Diploma in Electronic Systems with Merit",
    note: "Specialized in Smart Connected Systems",
    period: "Apr 2019 – Mar 2021",
  },
];

export const volunteering = {
  title: "Overseas Community Engagement Projects, Laos",
  role: "Member",
  period: "Jul – Aug 2024",
  summary: "Facilitated interactive learning sessions and helped build toilets to improve school sanitation.",
};
