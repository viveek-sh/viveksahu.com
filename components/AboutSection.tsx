"use client";

import Link from "next/link";
import { ArrowRight, Bot, Code2, Cloud, Terminal } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function AboutSection() {
  const specializedBadges = [
    { icon: <Code2 size={12} />, title: "Full-Stack" } /* Core Skill */,
    { icon: <Cloud size={12} />, title: "Cloud Native" } /* Core Skill */,
    { icon: <Bot size={12} />, title: "Agentic AI" } /* The "Hot" Skill */,
    { icon: <Terminal size={12} />, title: "Linux/DevOps" } /* Core Skill */,
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        title="About"
        accent="Me"
        description="Who I am and what I build."
      />

      <div className="rounded-xl bg-white/[0.02] border border-white/10 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-emerald-500/5 blur-3xl group-hover:bg-emerald-500/10 transition-all pointer-events-none" />

        <div className="flex flex-col lg:flex-row gap-8 items-center relative z-10">
          <div className="flex-1 space-y-5">
            <p className="text-base sm:text-md text-foreground/80 leading-snug">
              Full-Stack Engineer focused on building reliable web applications,
              with a strong foundation in Linux systems and infrastructure.
              Experience working in ISP environments on network configuration
              and infrastructure complements my development approach. I work
              with Agentic AI to automate workflows and actively run self-hosted
              systems, reflecting a practical, production-first mindset.
            </p>
            <div className="flex flex-wrap gap-2">
              {specializedBadges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[10px] font-bold uppercase tracking-widest text-emerald-400/90">
                  {badge.icon} {badge.title}
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/about"
            className="group shrink-0 flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-white text-sm font-bold transition-all hover:bg-emerald-600 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            Full Profile
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
