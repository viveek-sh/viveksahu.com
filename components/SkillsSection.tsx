"use client";

import React, { Fragment } from "react";
import {
  Code2,
  Layout,
  Server,
  Cloud,
  Database,
  Binary,
  Cpu,
  Bot,
  Brain,
  Unplug,
  MonitorCog,
  Cog,
  Network,
  UserKey,
  Bug,
  FileCog,
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
      "Kubernetes",
      "Cloudflare",
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
    category: "AI & ML",
    skills: [
      "AI Agents",
      "Claude Code",
      "Workflow Automation",
      "Local AI",
      "Pandas",
      "Matplot Lib",
      "NumPy",
    ],
  },
  {
    category: "Areas of Interest",
    skills: [
      "AI Agents",
      "Cloud",
      "Linux",
      "Networking & Infrastructure",
      "Open Source",
    ],
  },
];

const getSkillIcon = (name: string) => {
  const icons: Record<string, React.ReactNode> = {
    TypeScript: <SiTypescript color="#3178C6" />,
    JavaScript: <SiJavascript color="#F7DF1E" />,
    Python: <SiPython color="#3776AB" />,
    Java: <FaJava color="#ED8B00" />,
    "C++": <SiCplusplus color="#00599C" />,
    SQL: <Database size={16} color="#336791" />,
    "HTML/CSS": <Layout size={16} color="#E34F26" />,

    React: <SiReact color="#61DAFB" />,
    "Next.js": <SiNextdotjs color="#ffffff" />,
    Tailwind: <SiTailwindcss color="#06B6D4" />,
    "shadcn/ui": <SiShadcnui size={16} color="#ffffff" />,
    Vite: <SiVite color="#646CFF" />,

    "Node.js": <SiNodedotjs color="#5FA04E" />,
    Express: <SiExpress color="#ffffff" />,
    WebSockets: <Unplug size={16} className="text-emerald-400" />,
    REST: <Server size={16} className="text-sky-500" />,
    gRPC: <Cog size={16} className="text-teal-400" />,
    JWT: <SiJsonwebtokens color="#db2777" />,
    "Auth.js": <UserKey size={16} className="text-violet-500" />,
    WebRTC: <SiWebrtc color="#6B9BD2" />,
    Testing: <Bug size={16} className="text-red-400" />,
    Zod: <SiZod color="#3068B7" />,
    Kafka: <SiApachekafka color="#ffffff" />,

    AWS: <FaAws color="#FF9900" />,
    Docker: <SiDocker color="#2496ED" />,
    Kubernetes: <SiKubernetes color="#326CE5" />,
    Cloudflare: <FaCloudflare color="#F38020" />,
    Nginx: <SiNginx color="#00B140" />,
    Linux: <SiLinux color="#FCC624" />,
    Prometheus: <SiPrometheus color="#E6522C" />,
    Grafana: <SiGrafana color="#F46800" />,

    PostgreSQL: <SiPostgresql color="#336791" />,
    MongoDB: <SiMongodb color="#47A248" />,
    MySQL: <SiMysql color="#4479A1" />,
    Prisma: <SiPrisma color="#ffffff" />,
    Redis: <SiRedis color="#FF4438" />,

    DSA: <Binary size={16} className="text-emerald-400" />,
    OOPs: <Code2 size={16} className="text-blue-400" />,
    Networks: <Network size={16} className="text-sky-400" />,
    OS: <Cpu size={16} className="text-purple-400" />,
    "System Design": <MonitorCog size={16} className="text-indigo-400" />,

    Cloud: <Cloud size={16} className="text-sky-400" />,
    "Networking & Infrastructure": (
      <Network size={16} className="text-lime-500" />
    ),
    "AI Agents": <Bot size={16} className="text-blue-400" />,
    "Open Source": <SiOpensourceinitiative size={16} color="#3DA639" />,

    "Claude Code": <SiClaude color="#D97757" />,
    "Workflow Automation": <FileCog size={16} />,
    "Local AI": <Brain size={16} className="text-purple-400" />,
    Pandas: <SiPandas color="#E70488" />,
    "Matplot Lib": <SiPlotly color="#3F4F75" />,
  };

  return icons[name] || <Code2 size={16} className="text-zinc-500" />;
};

export default function TechStack() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        title="Tech Stack &"
        accent="Tools"
        description="Technologies I use to design, build, and scale reliable, high-performance systems."
      />

      {/* Reduced overall spacing between categories */}
      <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
        {TECH_STACK.map((item) => (
          <div key={item.category} className="group flex flex-col">
            {/* Category Header - tighter bottom margin */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <h3 className="text-[13px] font-semibold tracking-[0.1em] uppercase text-foreground/75 group-hover:text-emerald-500 transition-colors duration-300">
                {item.category}
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
            </div>

            {/* Skills Pills Container */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {item.skills.map((skill) => (
                <div
                  key={skill}
                  className="
                    flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 
                    rounded-lg
                    bg-background/40 backdrop-blur-xl backdrop-saturate-150
                    border border-white/11 border-t-white/20
                    shadow-[0_4px_10px_rgba(0,0,0,0.2)]
                    text-[13px] sm:text-[14px] font-medium text-foreground/85
                    transition-all duration-300 ease-out
                    
                    hover:bg-foreground/10 hover:border-white/18 hover:text-white 
                    hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.4)]
                  ">
                  <span className="flex items-center justify-center opacity-80 group-hover/skill:opacity-100 scale-90 sm:scale-100 transition-opacity">
                    {getSkillIcon(skill)}
                  </span>
                  <span className="whitespace-nowrap tracking-tight">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
