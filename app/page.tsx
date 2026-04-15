import DynamicBackground from "@/components/DynamicBackground";
import HeroSection from "@/components/HeroSection";
import SkillsSection, { TechStackItem } from "@/components/SkillsSection";
import ProjectGrid, { Project } from "@/components/ProjectGrid";
import ContactSection from "@/components/ContactSection";
import BlogGrid, { BlogPost } from "@/components/BlogGrid";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const techStack: TechStackItem[] = [
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

const myProjects: Project[] = [
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

const recentPosts: BlogPost[] = [
  {
    title: "Scaling Next.js with Distributed Caching",
    excerpt:
      "Exploring how to handle high-traffic spikes using Redis and edge-based revalidation strategies.",
    date: "April 12, 2026",
    image: "/blog/blog-1.jpg",
    slug: "scaling-nextjs-caching",
    tags: ["DevOps", "Nextjs"],
  },
  {
    title: "The Shift Toward AI-Native Architectures",
    excerpt:
      "Why traditional backend patterns are evolving to accommodate real-time LLM inference and RAG pipelines.",
    date: "March 28, 2026",
    image: "/blog/blog-2.jpg",
    slug: "ai-native-architecture",
    tags: ["AI", "Architecture"],
  },
  {
    title: "Building a High-Performance Matching Engine",
    excerpt:
      "Deep dive into the memory management and data structures required for sub-millisecond order execution.",
    date: "March 15, 2026",
    image: "/blog/blog-3.jpg",
    slug: "matching-engine-deep-dive",
    tags: ["TypeScript", "Systems"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen text-foreground">
      {/* 1. The Fixed Blurring Background */}
      <DynamicBackground />

      {/* 2. Your Page Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection stack={techStack} />
        <ProjectGrid projects={myProjects} />
        <BlogGrid posts={recentPosts} />
        {/* You can easily add more components here later: */}
        {/* <ProjectsSection /> */}
        <ContactSection />
      </div>
    </main>
  );
}
