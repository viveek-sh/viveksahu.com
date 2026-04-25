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
  LaptopMinimalCheck,
  UserStar,
  Bot,
  Brain,
  Unplug,
  MonitorCog,
  Cog,
  Network,
  UserKey,
  Bug,
} from "lucide-react";
import { FaAws, FaJava, FaCloudflare } from "react-icons/fa";
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
  SiNginx,
  SiLinux,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiPandas,
  SiPlotly,
  SiShadcnui,
  SiOpensourceinitiative,
  SiClaude,
  SiWebrtc,
  SiJsonwebtokens,
  SiZod,
  SiApachekafka,
  SiPrometheus,
  SiGrafana,
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
    skills: [
      "Node.js",
      "Express",
      "WebSockets",
      "REST",
      "gRPC",
      "JWT",
      "Auth.js",
      "WebRTC",
      "Testing",
      "Zod",
      "Kafka",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Kubernets",
      "Clouflare",
      "Nginx",
      "Linux",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Redis"],
  },
  {
    category: "Core Concepts",
    skills: ["DSA", "OOPs", "Networks", "OS", "System Design"],
  },
  {
    category: "Areas of Interest",
    skills: [
      "Cloud",
      "Linux",
      "Networking & Infrastructure",
      "AI Agents",
      "Open Source",
    ],
  },
  {
    category: "AI & ML",
    skills: ["Claude Code", "Local AI", "Pandas", "Matplot Lib"],
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
    WebSockets: <Unplug size={14} className="text-emerald-400" />,
    REST: <Server size={14} className="text-green-700" />,
    gRPC: <Cog size={14} className="text-[#0ea5e9]" />,
    JWT: <SiJsonwebtokens className="text-[#db2777]" />,
    "Auth.js": <UserKey size={14} className="text-[#22c55e]" />,
    WebRTC: <SiWebrtc className="text-[#f97316]" />,
    Testing: <Bug size={14} className="text-[#ef4444]" />,
    Zod: <SiZod className="text-[#ef4444]" />,
    Kafka: <SiApachekafka className="text-zinc-100]" />,

    // --- Cloud & DevOps ---
    AWS: <FaAws className="text-[#FF9900]" />,
    Docker: <SiDocker className="text-[#2496ED]" />,
    Kubernets: <SiKubernetes className="text-[#326CE5]" />,
    Cloudflare: <FaCloudflare className="text-[#faad3f]" />,
    Nginx: <SiNginx className="text-[#009639]" />,
    Linux: <SiLinux className="text-white" />,
    Prometheus: <SiPrometheus className="text-[#E6522C]" />,
    Grafana: <SiGrafana className="text-[#F9C322]" />,

    // --- Databases ---
    PostgreSQL: <SiPostgresql className="text-[#4169E1]" />,
    MongoDB: <SiMongodb className="text-[#47A248]" />,
    MySQL: <SiMysql className="text-[#F29111]" />,
    Prisma: <SiPrisma className="text-white" />,
    Redis: <SiRedis className="text-[#DC382D]" />,

    // --- CS Fundamentals ---
    DSA: <Binary size={14} className="text-emerald-500" />,
    OOPs: <Code2 size={14} className="text-blue-400" />,
    Networks: <Network size={14} className="text-sky-400" />,
    OS: <Cpu size={14} className="text-purple-400" />,
    "System Design": <MonitorCog size={14} className="text-[#326CE5]" />,

    // --- Areas of Interest ---
    Cloud: <Cloud size={14} className="text-sky-400" />,
    "Networking & Infrastructure": (
      <Network size={14} className="text-lime-500" />
    ),
    "AI Agents": <Bot size={14} className="text-blue-400" />,
    "Open Source": (
      <SiOpensourceinitiative size={14} className="text-[#3DA639]" />
    ),

    // --- AI & ML ---
    "Claude Code": <SiClaude className="text-[#DE7356]" />,
    "Local AI": <Brain size={14} className="text-[#a855f7]" />,
    Pandas: <SiPandas className="text-[#150458]" />,
    "Matplot Lib": <SiPlotly className="text-[#3F4F75]" />,
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
  "Areas of Interest": UserStar,
  "AI & ML": Bot,
};

export default function TechStack() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-transparent">
      {/* Header - No blur on parent */}
      <SectionHeader
        title="Tech Stack &"
        accent="Tools"
        description="Technologies I use to build, deploy, and manage applications."
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
