import DynamicBackground from "@/components/DynamicBackground";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import ProjectGrid from "@/components/ProjectGrid";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import TechStackSection, { TechStackItem } from "@/components/SkillsSection";
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

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen text-foreground">
      {/* 1. The Fixed Blurring Background */}
      <DynamicBackground />

      {/* 2. Your Page Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TechStackSection stack={techStack} />
        {/* <ProjectGrid /> */}

        {/* You can easily add more components here later: */}
        {/* <ProjectsSection /> */}
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
