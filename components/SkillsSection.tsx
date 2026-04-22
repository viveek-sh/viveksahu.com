"use client";

import React from "react";
import {
  Code2,
  Layout,
  Server,
  Cloud,
  Database,
  Binary,
  Cpu,
  Terminal,
  LaptopMinimalCheck,
  UserStar,
  Bot,
} from "lucide-react";
import { FaAws, FaJava } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiRedis,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiNginx,
  SiLinux,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiPytorch,
  SiPandas,
  SiPlotly,
  SiShadcnui,
  SiOpensourceinitiative,
} from "react-icons/si";
import SectionHeader from "@/components/SectionHeader";

const TECH_STACK = [
  {
    category: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "SQL",
      "HTML/CSS",
    ],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind", "shadcn/ui", "Vite"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express", "WebSockets", "REST", "gRPC"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernets", "GHA", "Nginx", "Linux"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Redis"],
  },
  {
    category: "CS Fundamentals",
    skills: ["DSA", "OOPs", "Networks", "OS", "Software Eng", "DBMS"],
  },
  { category: "AI & ML", skills: ["PyTorch", "Pandas", "Matplot Lib"] },
  {
    category: "Areas of Interest",
    skills: ["Full-Stack", "Cloud", "Linux", "AI Agents", "Open Source"],
  },
];

const getSkillIcon = (name: string) => {
  const icons: Record<string, React.ReactNode> = {
    // --- Languages ---
    TypeScript: <SiTypescript className="text-[#3178C6]" />,
    JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
    Python: <SiPython className="text-[#3776AB]" />,
    Java: <FaJava className="text-[#ED8B00]" />, // Oracle Java Orange/Blue
    "C++": <SiCplusplus className="text-[#00599C]" />,
    SQL: <Database size={14} className="text-zinc-400" />,
    "HTML/CSS": <Layout size={14} className="text-[#E34F26]" />, // HTML5 Orange

    // --- Frontend ---
    React: <SiReact className="text-[#61DAFB]" />,
    "Next.js": <SiNextdotjs className="text-white" />,
    Tailwind: <SiTailwindcss className="text-[#06B6D4]" />,
    "shadcn/ui": <SiShadcnui size={14} className="text-white" />,
    Vite: <SiVite className="text-[#646CFF]" />,

    // --- Backend & APIs ---
    "Node.js": <SiNodedotjs className="text-[#339933]" />,
    Express: <SiExpress className="text-zinc-100" />,
    WebSockets: <Terminal size={14} className="text-emerald-400" />,
    REST: <Server size={14} className="text-zinc-400" />,
    gRPC: <Cpu size={14} className="text-[#244c5a]" />,

    // --- Cloud & DevOps ---
    AWS: <FaAws className="text-[#FF9900]" />,
    Docker: <SiDocker className="text-[#2496ED]" />,
    Kubernets: <SiKubernetes className="text-[#326CE5]" />,
    GHA: <SiGithubactions className="text-[#2088FF]" />,
    Nginx: <SiNginx className="text-[#009639]" />,
    Linux: <SiLinux className="text-white" />,

    // --- Databases ---
    PostgreSQL: <SiPostgresql className="text-[#4169E1]" />,
    MongoDB: <SiMongodb className="text-[#47A248]" />,
    MySQL: <SiMysql className="text-[#4479A1]" />,
    Prisma: <SiPrisma className="text-white" />,
    Redis: <SiRedis className="text-[#DC382D]" />,

    // --- CS Fundamentals ---
    DSA: <Binary size={14} className="text-emerald-500" />,
    OOPs: <Code2 size={14} className="text-blue-400" />,
    Networks: <Cloud size={14} className="text-sky-400" />,
    OS: <Cpu size={14} className="text-purple-400" />,
    "Software Eng": <Terminal size={14} className="text-zinc-400" />,
    DBMS: <Database size={14} className="text-indigo-400" />,

    // --- AI & ML ---
    PyTorch: <SiPytorch className="text-[#EE4C2C]" />,
    Pandas: <SiPandas className="text-[#150458]" />,
    "Matplot Lib": <SiPlotly className="text-[#3F4F75]" />,

    // --- Areas of Interest ---
    "Full-Stack": <Layout size={14} className="text-emerald-400" />,
    Cloud: <Cloud size={14} className="text-sky-400" />,
    "AI Agents": <Bot size={14} className="text-blue-400" />,
    "Open Source": (
      <SiOpensourceinitiative size={14} className="text-[#3DA639]" />
    ),
  };

  return icons[name] || <Code2 size={14} className="text-zinc-500" />;
};

const categoryIcons: Record<string, React.ElementType> = {
  Languages: Code2,
  Frontend: Layout,
  "Backend & APIs": Server,
  "Cloud & DevOps": Cloud,
  Databases: Database,
  "CS Fundamentals": LaptopMinimalCheck,
  "AI & ML": Bot,
  "Areas of Interest": UserStar,
};

export default function TechStack() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-transparent">
      {/* Header - No blur on parent */}
      <SectionHeader
        title="Tech Stack"
        accent=""
        description="Technologies & Ecosystems"
      />
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr">
        {TECH_STACK.map((item) => {
          const Icon = categoryIcons[item.category] || Code2;

          return (
            <div
              key={item.category}
              className="
                group relative flex flex-col h-full rounded-2xl p-6 transition-all duration-500

                bg-linear-to-br from-black/25 via-black/15 to-black/10
                backdrop-blur-2xl 
                backdrop-saturate-[1.4]
                border border-white/10 
                border-t-white/25
                shadow-[0_20px_50px_rgba(0,0,0,0.3)]
                
                hover:bg-white/[0.05]
                hover:scale-[1.02]
                hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]
              ">
              {/* Subtle top for glass feel */}
              <div className="absolute inset-x-0 top-0 h-px opacity-20 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-9 h-9 rounded-md bg-zinc-900/40 border border-white/5 text-accent group-hover:text-emerald-300 transition-colors">
                  <Icon size={18} strokeWidth={2.5} />
                </div>
                <h3 className="text-[12.5px] font-bold text-forground uppercase tracking-widest">
                  {item.category}
                </h3>
              </div>

              <div className="relative z-10 flex flex-wrap gap-1.5 content-start h-full">
                {item.skills.map((skill) => (
                  <div
                    key={skill}
                    className="
                      flex items-center gap-2 px-2.5 py-1.5 rounded-md
                      bg-background/25 border border-white/7 text-[12px] font-medium 
                      text-foreground/75 transition-all duration-300
                      hover:bg-emerald-500/20 hover:border-emerald-500/30
                    ">
                    <span className="transition-all text-sm ">
                      {getSkillIcon(skill)}
                    </span>
                    <span className="whitespace-nowrap tracking-tight">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
