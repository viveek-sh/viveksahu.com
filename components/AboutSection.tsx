"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { Icons } from "@/components/Icons";

const GlanceItem = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col gap-4 p-8 lg:p-10 group hover:bg-white/[0.01] transition-colors">
    <div className="flex items-center gap-3">
      <div className="text-emerald-500/60 group-hover:text-emerald-400 transition-colors duration-500">
        {Icon}
      </div>
      <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/80">
        {title}
      </h3>
    </div>
    <p className="text-[14px] text-white/70 leading-relaxed font-medium">
      {description}
    </p>
  </div>
);

export default function AtAGlance() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div
        ref={containerRef}
        className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        {/* Minimal Header */}
        <SectionHeader
          title="At a"
          accent="Glance"
          description="A high-level overview of my professional focus and technical standards."
        />

        {/* The Grid Module */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 border border-white/5 bg-white/[0.03] backdrop-blur-md rounded-[1rem] overflow-hidden">
          <GlanceItem
            icon={<Icons.User />}
            title="Identity"
            description="Full-stack engineer based in India, focused on building reliable systems and modern web applications with a strong engineering mindset."
          />
          <GlanceItem
            icon={<Icons.Code />}
            title="What I Build"
            description="From cloud-native backends to interactive frontends, I develop scalable apps, real-time systems, and performance-driven solutions."
          />
          <GlanceItem
            icon={<Icons.Zap />}
            title="Approach"
            description="I prioritize clean architecture, type safety, and efficiency—ensuring systems are maintainable, fast, and production-ready."
          />
        </div>

        {/* Single Visible CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/about"
            className="group flex items-center gap-4 px-8 py-3 rounded-xl border border-white/20 hover:border-emerald-400/60 hover:bg-emerald-500/[0.02] transition-all duration-500">
            <span className="text-[11px] font-bold tracking-[0.2em] text-white/75 group-hover:text-white uppercase transition-colors">
              Full Professional Profile
            </span>
            <div className="text-white/20 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-500">
              <Icons.Arrow />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
