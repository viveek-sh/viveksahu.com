"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { Project } from "./ProjectGridSection";

interface ProjectArchiveProps {
  projects: Project[];
}

export default function ProjectArchive({ projects }: ProjectArchiveProps) {
  const [activeTag, setActiveTag] = useState("All");
  const [isAnimating, setIsAnimating] = useState(false);

  // Smooth filter transition logic
  const handleFilterChange = (tag: string) => {
    if (tag === activeTag) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTag(tag);
      setIsAnimating(false);
    }, 300); // Wait for fade out before swapping data
  };

  const tags = useMemo(() => {
    const counts: Record<string, number> = {};
    projects.forEach((p) => {
      p.techStack?.forEach((tech) => {
        counts[tech] = (counts[tech] || 0) + 1;
      });
    });
    return [
      "All",
      ...Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(([tech]) => tech),
    ];
  }, [projects]);

  const filteredProjects = projects.filter((p) => {
    return activeTag === "All" || p.techStack.includes(activeTag);
  });

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] bg-emerald-500/5 blur-[150px] rounded-full opacity-40 pointer-events-none" />

      <div className="relative z-10">
        <SectionHeader
          title="Project"
          accent="Archive"
          description="A curated selection of technical explorations, from systems programming to cloud architecture."
        />

        {/* High-End Filter Pills */}
        <div className="mt-20 flex flex-wrap items-center gap-3">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleFilterChange(tag)}
              disabled={isAnimating}
              className={`px-5 py-2.5 rounded-full text-[12px] font-medium tracking-wide transition-all duration-300 ease-out ${
                activeTag === tag
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] scale-105"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
              }`}>
              {tag}
            </button>
          ))}
        </div>

        {/* The Grid - Fades when filtering */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 mt-16 transition-opacity duration-300 ease-in-out ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}>
          {filteredProjects.map((project, index) => (
            <ProjectItem key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLElement>(null);
  const isLive = project.liveLink !== "#";

  // Scroll Reveal Hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={itemRef}
      className={`group flex flex-col gap-6 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}>
      {/* Large, Rounded Image Section */}
      <div className="relative block aspect-[16/9] w-full overflow-hidden rounded-2xl bg-white/5">
        {/* The Image Link (routes to details) */}
        <NextLink
          href={`/projects/${project.slug}`}
          className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover group-hover:scale-[1.03] group-hover:brightness-110 transition-all duration-[800ms] ease-out"
          />
          {/* Inner shadow div for depth and blend */}
          <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] rounded-2xl pointer-events-none" />
        </NextLink>

        {/* Floating Live Pill (routes to live demo site) */}
        {isLive && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-5 right-5 z-10 flex items-center gap-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2.5 text-[13px] font-semibold text-white shadow-2xl transition-all duration-300 hover:bg-black/80 hover:scale-105">
            <ArrowUpRight className="size-4" /> Live Demo
          </a>
        )}
      </div>

      {/* Text Flow */}
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          {/* Title & Refined Tech Stack Micro-Tags */}
          <div className="flex flex-col gap-2.5">
            <NextLink
              href={`/projects/${project.slug}`}
              className="group/title flex items-center gap-2">
              <h3 className="text-2xl font-semibold text-white/90 tracking-tight transition-colors group-hover/title:text-emerald-400">
                {project.title}
              </h3>
            </NextLink>

            {/* Elegant Micro-Tags */}
            <div className="flex flex-wrap items-center gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded border border-white/5 bg-white/[0.02] text-[10px] font-mono uppercase tracking-widest text-white/40 group-hover:border-white/10 group-hover:text-white/60 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-5 shrink-0 pt-1">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13px] font-semibold text-white/50 hover:text-white transition-colors">
              <FaGithub className="size-4" /> Source
            </a>

            <NextLink
              href={`/projects/${project.slug}`}
              className="group/details flex items-center gap-1.5 text-[13px] font-semibold text-white/50 hover:text-white transition-colors">
              Details
              <ArrowUpRight className="size-4 text-emerald-400 opacity-0 -translate-x-1.5 translate-y-1.5 transition-all duration-300 ease-out group-hover/details:opacity-100 group-hover/details:translate-x-0 group-hover/details:translate-y-0" />
            </NextLink>
          </div>
        </div>

        {/* Description */}
        <p className="text-[15px] leading-relaxed text-white/50 font-light max-w-[95%] mt-2">
          {project.description}
        </p>
      </div>
    </article>
  );
}
