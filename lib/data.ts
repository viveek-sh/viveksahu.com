import { TechStackItem } from "@/components/SkillsSection";
import { Project } from "@/components/ProjectGrid";

export const TechStack: TechStackItem[] = [
  {
    category: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "C++",
      "Java",
      "SQL",
      "HTML/CSS",
    ],
    className: "md:col-span-2", // Wider card for variety
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Tailwind",
      "shadcn/ui",
      "Three.js",
      "Motion",
      "Vite",
    ],
    className: "md:col-span-2",
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express", "FastAPI", "WebSockets", "REST", "gRPC"],
    className: "md:col-span-1",
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Terraform", "GHA", "Nginx", "Linux"],
    className: "md:col-span-1",
  },
  {
    category: "AI & ML",
    skills: ["PyTorch", "TensorFlow", "LLM APIs", "RAG", "MLOps", "Pandas"],
    className: "md:col-span-1",
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "SQLite"],
    className: "md:col-span-1",
  },
  {
    category: "CS Fundamentals",
    skills: ["DSA", "OOPs", "Networks", "OS", "Software Eng", "DBMS"],
    className: "md:col-span-2",
  },
  {
    category: "Areas of Interest",
    skills: ["Full-Stack", "AI Agents", "Open Source", "Game Dev"],
    className: "md:col-span-2",
  },
];

export const Projects: Project[] = [
  {
    title: "exchange-lab.",
    description:
      "A high-performance exchange simulation featuring an in-memory matching engine and real-time market data streaming.",
    image: "/project.webp",
    techStack: ["TypeScript", "Node.js", "Redis", "Next.js"],
    liveLink: "",
    githubLink: "https://github.com/viveek-sh/exchange-lab",
    credentials: { user: "admin", pass: "123" },
  },
  {
    title: "Gym buddy.",
    description:
      "A modern web app that helps gym-goers follow structured workout splits and calculate fitness metrics like BMI.",
    image: "/project-2.webp",
    techStack: [
      "Next.js",
      "ShadCN UI",
      "TypeScript",
      "Tailwind CSS",
      "Cloudflare R2",
    ],
    liveLink: "https://viveek-sh.github.io/gym-buddy/",
    githubLink: "https://github.com/viveek-sh/gym-buddy",
  },
  {
    title: "Flight fare predictor.",
    description:
      "Machine learning project predicting flight ticket prices using Random Forest Regression with a Flask API.",
    image: "/project.webp",
    techStack: ["Python", "Flask", "Scikit-learn", "Pandas"],
    liveLink: "#",
    githubLink: "https://github.com/viveek-sh/flight-fare-predictor",
  },
];
