// ============================================
// AHMAD — Portfolio Data
// Muhammad Ahmad — ML Engineer & Full-Stack Dev
// ============================================

import darkTowerImg from './assets/dark_tower.webp';
import footballAiImg from './assets/football_ai.webp';
import cyberLibImg from './assets/cyber_lib.webp';
import colorBlindImg from './assets/colorblind.webp';
import memeTentImg from './assets/memetent.webp';
import portfolioImg from './assets/portfolio.webp';

export const personalInfo = {
  name: "Muhammad Ahmad",
  title: "ML Engineer & Full-Stack Developer",
  tagline: "Building intelligent systems at the intersection of AI and the web.",
  location: "Islamabad, Pakistan",
  email: "ahmadnaul.495@gmail.com",
  university: "National University of Sciences and Technology (NUST)",
  degree: "Bachelor of Computer Science",
  gradYear: "2027",
  linkedin: "https://www.linkedin.com/in/muhammad-ahmad-517324372/",
  github: "https://github.com/muahmad232",
  cvPath: "/assets/Muhammad_Ahmad_CV.pdf",
  bio: `I'm a CS student at NUST, Pakistan, passionate about building end-to-end solutions — from training machine learning models to deploying full-stack web apps. I bridge the gap between intelligent systems and scalable interfaces, with a deep focus on AI/ML and the MERN stack.`,
  bioExtra: `Currently exploring AI agents, EEG-based neural decoding, and LLM-powered applications. I believe the best software is invisible — it just works, intelligently.`,
};

export const featuredProjects = [
  {
    id: "kaguide",
    title: "KaGuide — Dark Tower Chatbot",
    slug: "kaguide",
    description:
      "Built a production RAG chatbot with FAISS retrieval and Groq Llama 3.1 generation to deliver real-time, lore-accurate Dark Tower answers with spoiler-aware response filtering.",
    stack: ["Python", "FastAPI", "FAISS", "Groq LLM", "React", "Hugging Face", "Vercel"],
    category: "AI / RAG",
    type: "AI/ML",
    live: "https://ka-guide.vercel.app",
    repo: "https://github.com/muhammad-ahmad/kaguide",
    image: darkTowerImg,
    accentColor: "#e8ff47",
    year: "Jan 2026",
    highlights: [
      "FAISS vector similarity search",
      "Llama 3.1 via Groq API (low-latency)",
      "Spoiler-protection logic",
      "Sentence Transformers embeddings",
    ],
  },
  {
    id: "football-ai",
    title: "Football AI Predictor",
    slug: "football-ai",
    description:
      "Developed an end-to-end football forecasting app with Pandas + Scikit-Learn models served through a Node API to a React UI for real-time player trajectory insights.",
    stack: ["Python", "Pandas", "Scikit-Learn", "React", "Node.js"],
    category: "ML + Full-Stack",
    type: "AI/ML",
    live: "https://football-player-creator.vercel.app",
    repo: "https://github.com/muhammad-ahmad/football-ai",
    image: footballAiImg,
    accentColor: "#47b8ff",
    year: "Dec 2025",
    highlights: [
      "EA Sports FC 25 dataset analysis",
      "Gradient boosting models",
      "Career pathway forecasting",
      "MERN-stack integration",
    ],
  },
  {
    id: "cyberlib",
    title: "CyberLib",
    slug: "cyberlib",
    description:
      "Built a MERN book platform with JWT auth, live Google Books/Open Library aggregation, and a query-driven chatbot that generates real-time reading recommendations.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    category: "Full-Stack / MERN",
    type: "Full-Stack",
    live: "https://cyberlib-rho.vercel.app",
    repo: "https://github.com/muhammad-ahmad/cyberlib",
    image: cyberLibImg,
    accentColor: "#ff4747",
    year: "Apr 2025",
    highlights: [
      "MERN full-stack architecture",
      "Google Books + Open Library APIs",
      "MongoDB authentication system",
    ],
  },
];

export const allProjects = [
  ...featuredProjects,
  {
    id: "color-accessibility",
    title: "Color & Cognitive Accessibility",
    slug: "color-accessibility",
    description:
      "Engineered a browser extension that applies low-latency DOM and palette transformations in real time to support color-blind and cognitive accessibility needs.",
    stack: ["JavaScript", "HTML", "CSS"],
    category: "Web Extension",
    type: "Full-Stack",
    repo: "https://github.com/muahmad232/color-and-cognitive-accessibility",
    image: colorBlindImg,
    accentColor: "#22c55e",
    year: "2024",
    highlights: ["Accessibility adaptation", "Diverse visual support", "Cognitive modifications"],
  },
  {
    id: "memetent",
    title: "MemeTent",
    slug: "memetent",
    description:
      "Implemented a Java OOP content management app for digital asset tracking with maintainable class design and real-time state updates across linked entities.",
    stack: ["Java", "OOP"],
    category: "Software Development",
    type: "Other",
    repo: "https://github.com/muahmad232/MemeTent",
    image: memeTentImg,
    accentColor: "#f59e0b",
    year: "2024",
    highlights: ["Java App", "Object-Oriented Design", "Asset Management"],
  },
  {
    id: "trapped",
    title: "Trapped Maze Game",
    slug: "trapped",
    description:
      "Built a C++ CLI maze game with procedural generation, synchronized multiplayer input handling, and real-time collision logic in a lightweight game loop.",
    stack: ["C++", "CLI"],
    category: "Game Development",
    type: "Other",
    repo: "https://github.com/muahmad232/Trapped",
    accentColor: "#a855f7",
    year: "2023",
    highlights: ["Procedural maze generation", "C++ game loop", "Head-to-head multiplayer"],
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    slug: "portfolio",
    description:
      "Developed a responsive React portfolio using component-driven architecture, optimized asset delivery, and smooth interactive UI behavior for real-time content exploration.",
    stack: ["React", "JavaScript", "CSS"],
    category: "Web Frontend",
    type: "Full-Stack",
    repo: "https://github.com/muahmad232/portfolio",
    image: portfolioImg,
    accentColor: "#3b82f6",
    year: "2026",
    highlights: ["React SPA", "Custom styling & animations", "Fully responsive design"],
  },
];

export const skills = {
  ai_ml: [
    { name: "Python", level: 90 },
    { name: "TensorFlow", level: 80 },
    { name: "Scikit-Learn", level: 88 },
    { name: "Pandas / NumPy", level: 90 },
    { name: "FAISS / RAG", level: 78 },
    { name: "Hugging Face", level: 75 },
    { name: "LLM Integration", level: 80 },
    { name: "EEG / Signal Processing", level: 65 },
  ],
  fullstack: [
    { name: "React", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "MongoDB", level: 82 },
    { name: "REST APIs", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "HTML / CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
  ],
  other: [
    { name: "C / C++", level: 80 },
    { name: "MySQL / PostgreSQL", level: 75 },
    { name: "Git", level: 88 },
    { name: "FastAPI", level: 78 },
  ],
};

export const certifications = [
  {
    name: "Machine Learning Specialization",
    org: "DeepLearning.AI (Coursera)",
    courses: [
      "Supervised Machine Learning: Regression and Classification",
      "Advanced Learning Algorithms",
      "Unsupervised Learning, Recommenders, Reinforcement Learning",
    ],
  },
  {
    name: "Deep Learning Specialization",
    org: "DeepLearning.AI (Coursera)",
    courses: [
      "Neural Networks and Deep Learning",
      "Improving Deep Neural Networks: Hyperparameter Tuning",
      "Structuring ML Projects",
      "Convolutional Neural Networks",
    ],
  },
  {
    name: "Applied Data Science Lab",
    org: "WorldQuant University",
    courses: [],
  },
];

export const experience = [
  {
    role: "CyberSecurity Intern",
    company: "CyberSecurity Zone",
    location: "Islamabad, Pakistan",
    period: "Jun 2025 – Aug 2025",
    points: [
      "Developed a robust file & hard disk encryption system in Python with secure key management and automated SMTP-based key recovery.",
      "Explored AI SaaS ecosystems and investigated AI-driven defense mechanisms against Quantum Computing threats.",
    ],
    type: "internship",
  },
  {
    role: "Research Intern",
    company: "Research Lab",
    location: "Islamabad, Pakistan",
    period: "May 2025 – Present",
    points: [
      "Orchestrating acquisition and preprocessing of raw EEG signal data for neural decoding ML models.",
      "Designing a predictive system using student EEG profiles to measure cognitive load and optimize lecture slides for visual accessibility.",
    ],
    type: "research",
  },
];
