"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Terminal,
  Cpu,
  Cloud,
  Server,
  Code,
  Dumbbell,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";
import { FaLinux } from "react-icons/fa";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="w-full max-w-7xl mx-auto px-6 py-24 pt-30"
      ref={sectionRef}>
      <SectionHeader
        title="About"
        accent="Me"
        description="Software Engineer • Cloud Enthusiast • System Builder"
      />

      <div
        className={`flex flex-col gap-6 mt-10 transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}>
        {/* Intro Card */}
        <Card className="relative overflow-hidden bg-background/10 border border-white/10 backdrop-blur-md group w-full">
          <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />
          <CardContent className="p-8 relative z-10 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Terminal className="text-emerald-400" />
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Hi, I’m Vivek Sahu
                </h3>
              </div>

              {/* Tagline */}
              <p className="text-sm font-medium text-emerald-400/90 tracking-wide">
                Full-Stack Developer • Cloud & Infrastructure • Systems Focused
              </p>

              {/* Main description */}
              <p className="text-[15px] text-white/70 leading-relaxed max-w-3xl">
                I build full-stack applications and work with cloud and
                infrastructure, focusing on performance, reliability, and
                real-world deployment.
              </p>

              {/* Supporting paragraph */}
              <p className="text-[14px] text-white/60 leading-relaxed max-w-3xl">
                I’m particularly interested in networking and self-hosted
                systems, often experimenting with real setups to understand how
                things work beneath the surface. I focus on building practical,
                end-to-end systems — from application logic to deployment and
                infrastructure.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Middle Row: Experience & Education */}
        {/* Middle Row: Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Experience Card */}
          <Card className="relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md">
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <BriefcaseBusiness className="text-white/40 w-4 h-4" />
                <h3 className="text-[10px] font-black tracking-[0.2em] text-emerald-400/80 uppercase">
                  Experience
                </h3>
              </div>

              <div className="space-y-8 pl-3 border-l border-white/10 ml-2">
                {/* Job 1 */}
                <div className="relative pl-6">
                  <div className="absolute w-2 h-2 bg-emerald-500 rounded-full -left-[16.5px] top-1.5 shadow-[0_0_8px_rgba(16,185,129,0.4)] ring-4 ring-[#0a0a0a]" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-base font-bold text-white">
                      FTTH Engineer
                    </h4>

                    <span className="text-[10px] font-mono text-white/60 uppercase tracking-wider">
                      Sep 2024 — May 2025
                    </span>
                  </div>
                  <p className="text-xs text-white/50 mb-3">BSNL TIP Partner</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Networking", "Fiber Optics", "Security"].map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-[9px] px-2 py-1 bg-white/5 text-white/70 border-white/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Job 2 */}
                <div className="relative pl-6">
                  <div className="absolute w-2 h-2 bg-white/20 rounded-full -left-[16.5px] top-1.5 ring-4 ring-[#0a0a0a]" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-base font-bold text-white/80">
                      Web Intern
                    </h4>
                    <span className="text-[10px] font-mono text-white/60 uppercase tracking-wider">
                      Feb 2024 — Jul 2024
                    </span>
                  </div>
                  <p className="text-xs text-white/40 mb-3">Bakshi Media</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Web Dev", "WordPress", "SEO"].map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-[9px] px-2 py-1 bg-white/5 text-white/70 border-white/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education Card */}
          <Card className="relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md">
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <GraduationCap className="text-white/40 w-4 h-4" />
                <h3 className="text-[10px] font-black tracking-[0.2em] text-emerald-400/80 uppercase">
                  Education
                </h3>
              </div>

              <div className="space-y-8 pl-3 border-l border-white/10 ml-2">
                {/* Degree 1 */}
                <div className="relative pl-6">
                  <div className="absolute w-2 h-2 bg-emerald-500/50 rounded-full -left-[16.5px] top-1.5 ring-4 ring-[#0a0a0a]" />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-white">
                        B.Tech, Computer Science
                      </h4>
                      <span className="text-[10px] font-mono text-emerald-400/90 uppercase">
                        2023 — 2027
                      </span>
                    </div>
                    <p className="text-xs text-white/60">
                      CSVTU • Engineering Degree
                    </p>
                    <p className="text-[11px] text-white/60 mt-1 leading-relaxed max-w-xs">
                      Focused on full-stack systems and cloud architecture.
                    </p>
                  </div>
                </div>

                {/* School */}
                <div className="relative pl-6">
                  <div className="absolute w-2 h-2 bg-white/20 rounded-full -left-[16.5px] top-1.5 ring-4 ring-[#0a0a0a]" />
                  <div className="flex flex-col gap-1">
                    <h4 className="text-base font-bold text-white/80">
                      AISSCE (12th Grade)
                    </h4>
                    <p className="text-xs text-white/60">
                      Monnet DAV Public School
                    </p>
                    <p className="text-[11px] font-mono text-white/60 italic">
                      PCM with Computer Science
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Beyond Screen */}
        <div className="mt-8 pt-8">
          <div className="mb-8 space-y-2">
            <h2 className="text-xl font-bold tracking-tight text-white">
              Beyond the Screen
            </h2>
            <p className="text-white/50 text-[14.5px]">
              Exploring systems, hardware, and performance beyond just writing
              code.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Homelabing",
                icon: Server,
                text: "Self-hosted services, multi-WAN setups, and infrastructure experiments.",
              },
              {
                label: "Networking",
                icon: Cpu,
                text: "Routers, OLTs, and failover systems in real-world setups.",
              },
              {
                label: "Linux",
                icon: FaLinux,
                text: "Daily-driving Linux, optimizing workflows and system performance.",
              },
              {
                label: "Hardware",
                icon: Cpu,
                text: "Tinkering with builds, firmware tweaks, and performance tuning.",
              },
              {
                label: "Projects",
                icon: Code,
                text: "Small tools and experiments focused on systems and automation.",
              },
              {
                label: "Fitness",
                icon: Dumbbell,
                text: "Strength training to build discipline and maintain focus.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-background/20 border backdrop-blur-2xl border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="w-5 h-5 text-emerald-400 mb-3" />

                <h4 className="text-foreground font-bold text-xs mb-1">
                  {item.label}
                </h4>

                <p className="text-foreground/50 text-[11px] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* SETUP SECTION */}
        <div className="mt-8 pt-8">
          <div className="mb-6 space-y-1">
            <h2 className="text-xl font-bold tracking-tight text-white">
              Setup & Infrastructure
            </h2>
            <p className="text-white/40 text-xs">
              My development environment and infrastructure setup.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Workstation - Compact 2-span */}
            <Card className="lg:col-span-2 bg-white/5 border-white/10 backdrop-blur-md overflow-hidden group">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    <h3 className="text-[11px] font-black tracking-widest text-white/70 uppercase">
                      Workstation
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Processor", val: "R7 7700X", sub: "5.4GHz" },
                    { label: "Graphics", val: "RTX 3090", sub: "24GB VRAM" },
                    { label: "Memory", val: "32GB DDR5", sub: "6000MT/s" },
                    {
                      label: "System",
                      val: "Fedora WS 43",
                      sub: "Daily Driver",
                    },
                  ].map((item) => (
                    <div key={item.label} className="space-y-0.5">
                      <p className="text-[9px] font-bold text-white/30 uppercase tracking-tighter">
                        {item.label}
                      </p>
                      <p className="text-[13px] font-bold text-white/90 leading-tight">
                        {item.val}
                      </p>
                      <p className="text-[10px] text-white/40 font-mono">
                        {item.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Infrastructure - Compact 1-span */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-md">
              <CardContent className="p-5 h-full flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-4">
                  <Cloud className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-[11px] font-black tracking-widest text-white/70 uppercase">
                    Infrastructure
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Oracle Cloud" },
                    { name: "Docker" },
                    { name: "AWS" },
                  ].map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">
                      <span className="text-[11px] text-white/60 font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
