// data.js — Single source of truth for all portfolio content.
// Components import from here. Never hardcode text in components.

// ============================================================
// PERSONAL INFO
// ============================================================
export const personalInfo = {
  name: "Aswin Kumar B",
  role: "ECE Engineer",          // shown under your name in About
  email: "ashwinbta01@gmail.com",
  github: "https://github.com/Ashxin",
  linkedin: "https://linkedin.com/in/aswin-kumar-b",
  phone: "9361543378",

  // This is your headline — shown in Hero as typewriter text
  // Each string in this array types out one after another
  roles: [
    "AI Systems Builder",
    "Full Stack Developer",
    "Edge AI Engineer",
    "Workflow Automation Dev",
  ],

  // 2-3 sentences max. Punchy. No "I am passionate about..."
  bio: "ECE fresher who builds real systems — from edge AI on Raspberry Pi to WhatsApp bots running on Docker. I sit at the intersection of hardware, web, and AI automation. I don't just write code; I ship things that work.",
}

// ============================================================
// PROJECTS
// ============================================================
// Each project is an object with consistent fields.
// "hero: true" means it gets a large featured card.
// "hero: false" means it gets a smaller secondary card.

export const projects = [
  {
    id: 1,
    title: "WhatsApp Automation Suite",
    tagline: "AI-powered order management for small manufacturers",
    description:
      "End-to-end WhatsApp automation system for school accessory manufacturers. An LLM parses unstructured messages, logs structured orders into Google Sheets, and auto-notifies customers on dispatch.",
    // These metrics are the most important part of a hero project card.
    // Numbers make impact concrete. Never skip these.
    metrics: [
      { label: "Response time", value: "Minutes → Seconds" },
      { label: "LLM Model", value: "Llama 3.3 70B" },
      { label: "Self-hosted", value: "Docker + n8n" },
    ],
    tech: ["n8n", "Groq API", "Twilio", "Google Sheets API", "Docker"],
    github: null,       // no public repo for this one
    live: null,
    hero: true,         // featured card — large
  },
  {
    id: 2,
    title: "IoT Rubber Latex Monitor",
    tagline: "Edge AI deployed on Raspberry Pi for plantation monitoring",
    description:
      "MobileNetV2 binary classifier deployed on Raspberry Pi 3 to monitor rubber latex cups. Built a hybrid SMS alerting system that cut per-alert cost by 75%. Collected 573 real field images to eliminate domain-shift issues.",
    metrics: [
      { label: "Accuracy", value: "95.45%" },
      { label: "Alert cost", value: "₹2.00 → ₹0.50" },
      { label: "Real images", value: "573 collected" },
    ],
    tech: ["Python", "TFLite", "MobileNetV2", "Raspberry Pi", "Twilio"],
    github: "https://github.com/Ashxin/latex-cup-monitor",
    live: null,
    hero: true,         // featured card — large
  },
  {
    id: 3,
    title: "Notes App",
    tagline: "Full-stack note-taking with real-time sync",
    description:
      "Firebase-backed notes app with authentication, real-time Firestore sync, CRUD operations, and session persistence.",
    metrics: [],        // no standout metrics — secondary project
    tech: ["JavaScript", "Firebase", "Firestore"],
    github: "https://github.com/Ashxin/notes-app",
    live: null,
    hero: false,        // secondary card — small
  },
  {
    id: 4,
    title: "Weather Dashboard",
    tagline: "Real-time weather with 5-day forecasting",
    description:
      "Weather dashboard using OpenWeatherMap API with async/await, 5-day forecast, saved cities via localStorage.",
    metrics: [],
    tech: ["JavaScript", "OpenWeatherMap API"],
    github: "https://github.com/Ashxin/weatherDashboard",
    live: null,
    hero: false,
  },
  {
  id: 5,
  title: "RAG Product Catalogue Bot",
  tagline: "WhatsApp bot that answers from your own data, not guesswork",
  description:
    "Built a RAG pipeline using n8n, Ollama embeddings, and Groq. Indexed a school accessories product catalogue into a vector store. Deployed via Twilio WhatsApp — school owners query live pricing, variants, and MOQs instantly.",
  metrics: [
    { label: "Retrieval", value: "Vector Search" },
    { label: "Embedding", value: "nomic-embed-text" },
    { label: "Interface", value: "WhatsApp" },
  ],
  tech: ["n8n", "Ollama", "Groq API", "Twilio", "Docker"],
  github: null,
  live: null,
  hero: false,
},
{
  id: 6,
  title: "Multi-Step AI Agent",
  tagline: "One agent that reads email, schedules meetings, and logs tasks",
  description:
    "Chained Gmail, Google Calendar, and Notion into a single Groq-powered agent. One message like 'schedule client review tomorrow and log a follow-up task' triggers all three tools in sequence automatically.",
  metrics: [
    { label: "Tools chained", value: "3 live APIs" },
    { label: "Model", value: "Llama 3.3 70B" },
    { label: "Orchestration", value: "n8n + Groq" },
  ],
  tech: ["n8n", "Groq API", "Gmail API", "Google Calendar", "Notion"],
  github: null,
  live: null,
  hero: false,
  },
]

// ─── ABOUT ───────────────────────────────────────────────────────────────────
export const about = {
  name: "Aswin Kumar B",
  bio: [
    "ECE undergrad at Kumaraguru College of Technology, graduating May 2026. Self-taught everything that actually matters — full-stack web, AI automation, and IoT systems — outside of class.",
    "I build things that solve real problems for real businesses. My current focus is WhatsApp automation for small manufacturers in Tamil Nadu who are drowning in manual communication loops.",
    "Not waiting to graduate to start. Already shipped production-grade AI pipelines, edge ML on Raspberry Pi, and end-to-end automation systems.",
  ],
  image: "/src/assets/profile.jpg",
  stats: [
    { label: "Projects Shipped", value: "6+" },
    { label: "Technologies", value: "15+" },
    { label: "Graduating", value: "2026" },
  ],
};

// ─── SKILLS ──────────────────────────────────────────────────────────────────
// Each category maps to one domain card in the Skills section.
export const skillCategories = [
  {
    id: "web",
    domain: "Web & Full Stack",
    icon: "⚡",
    color: "from-gotham-purple/20 to-transparent",
    skills: ["React", "Node.js", "Express", "Tailwind CSS", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    id: "ai",
    domain: "AI & Automation",
    icon: "🤖",
    color: "from-blue-500/20 to-transparent",
    skills: ["Python", "LangChain", "Ollama", "Groq", "n8n", "RAG Pipelines", "Prompt Engineering"],
  },
  {
    id: "infra",
    domain: "Infra & DevOps",
    icon: "🛠️",
    color: "from-green-500/20 to-transparent",
    skills: ["Docker", "Linux", "Git", "Vercel", "Nginx", "CI/CD", "SSH"],
  },
  {
    id: "hardware",
    domain: "Hardware & IoT",
    icon: "🔌",
    color: "from-orange-500/20 to-transparent",
    skills: ["Arduino", "Raspberry Pi", "MQTT", "Sensor Integration", "Serial Comm", "Edge Computing"],
  },
];

// ============================================================
// SKILLS
// ============================================================
// Grouped by domain — not a flat list.
// This grouping is what makes you look focused, not scattered.

export const skills = [
  {
    category: "Web Development",
    icon: "🌐",
    items: ["JavaScript", "React", "HTML5", "CSS3", "Firebase"],
  },
  {
    category: "AI & Automation",
    icon: "🤖",
    items: ["Python", "n8n", "Groq API", "TFLite", "MobileNetV2"],
  },
  {
    category: "Infrastructure",
    icon: "⚙️",
    items: ["Docker", "Git", "SQL", "Vercel", "GitHub Pages"],
  },
  {
    category: "Hardware & IoT",
    icon: "🔌",
    items: ["Raspberry Pi", "GSM800A", "Twilio", "Edge AI"],
  },
]

// ============================================================
// EXPERIENCE
// ============================================================
export const experience = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "Codsoft",
    duration: "June 2025 – July 2025",
    type: "internship",   // used to show the right icon/badge
    points: [
      "Built a Marvel-themed responsive landing page using HTML5 and CSS3",
      "Developed a personal portfolio website with smooth navigation",
      "Implemented a browser-based calculator with keyboard input support",
    ],
  },
]

// ============================================================
// EDUCATION
// ============================================================
export const education = [
  {
    id: 1,
    degree: "B.E. Electronics and Communication Engineering",
    institution: "Kumaraguru College of Technology",
    duration: "Nov 2022 – May 2026",
    cgpa: "7.23",
  },
]

// ─── TIMELINE ─────────────────────────────────────────────────────────────────
export const timeline = [
  {
    id: "exp1",
    type: "work",
    role: "Web Development Intern",
    org: "Codsoft",
    period: "June 2025 — July 2025",
    bullets: [
      "Built a Marvel-themed responsive landing page using HTML5 and CSS3",
      "Developed a personal portfolio website with smooth navigation and project showcase",
      "Implemented a browser-based calculator in JavaScript with arithmetic operations and keyboard input",
    ],
  },
  {
    id: "edu1",
    type: "education",
    role: "B.E. Electronics and Communication Engineering",
    org: "Kumaraguru College of Technology",
    period: "Nov 2022 — May 2026",
    bullets: [
      "CGPA: 7.23",
      "Self-taught full-stack web development, AI automation, and IoT systems alongside coursework",
      "Built 6+ projects spanning web, AI pipelines, and edge hardware during degree",
    ],
  },
];

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────
export const certifications = [
  { id: "cert1", name: "Full Stack (MERN) Web Development Traineeship", issuer: "Maiyyam",                    year: "2024" },
  { id: "cert2", name: "Python for Everybody",                           issuer: "Coursera",                   year: "2025" },
  { id: "cert3", name: "Python Data Structures",                         issuer: "Coursera",                   year: "2025" },
  { id: "cert4", name: "Foundations of Cybersecurity",                   issuer: "Coursera",                   year: "2025" },
  { id: "cert5", name: "6G Deployment",                                  issuer: "Coursera",                   year: "2025" },
  { id: "cert6", name: "Introduction to Packet Tracer",                  issuer: "Cisco Networking Academy",   year: "2024" },
];
// ─── CONTACT ──────────────────────────────────────────────────────────────────
export const contact = {
  email: "ashwinbta01@gmail.com",
  github: "https://github.com/Ashxin",
  linkedin: "https://linkedin.com/in/aswinkumar0b1",
  phone: "+91 9361543378",
};