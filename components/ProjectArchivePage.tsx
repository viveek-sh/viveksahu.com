"use client";

import { useState, useMemo } from "react";
import NextLink from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { Project } from "./ProjectGridSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, Lock, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

interface ProjectArchiveProps {
  projects: Project[];
}

export default function ProjectArchive({ projects }: ProjectArchiveProps) {
  const [activeTag, setActiveTag] = useState("All");

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
        .slice(0, 5)
        .map(([tech]) => tech),
    ];
  }, [projects]);

  const filteredProjects = projects.filter((p) => {
    return activeTag === "All" || p.techStack.includes(activeTag);
  });

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 pt-30">
      <SectionHeader
        title="Project"
        accent="Archive"
        description="A collection of projects spanning full-stack development, systems, and cloud infrastructure."
      />

      {/* Filter Pills */}
      <div className="mt-12 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border ${
              activeTag === tag
                ? "bg-emerald-500 text-emerald-950 border-emerald-500"
                : "bg-white/5 text-white/40 border-white/10 hover:border-white/20 hover:bg-white/10"
            }`}>
            {tag}
          </button>
        ))}
      </div>

      {/* Grid of Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {filteredProjects.map((project, index) => (
          <ArchiveCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ArchiveCard({ project, index }: { project: Project; index: number }) {
  return (
    <Card
      className="group relative flex flex-col h-full overflow-hidden
          bg-gradient-to-br from-black/30 via-black/15 to-transparent
          backdrop-blur-2xl
          backdrop-saturate-150
          border border-white/10 
          border-t-white/25 
          rounded-xl
          shadow-[0_20px_50px_rgba(0,0,0,0.3)]
          hover:bg-white/6
          hover:scale-[1.01]
          transition-all duration-200">
      {/* Image clickable, navigates to detail page */}
      <NextLink href={`/projects/${project.slug}`} className="block p-4 -mt-4">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) calc(50vw - 48px), calc(33vw - 48px)"
            className="object-cover"
          />
        </div>
      </NextLink>

      {/* Title */}
      <div className="flex items-center gap-2 px-6 pb-1">
        <Terminal className="text-emerald-400 shrink-0" />
        <h3 className="text-2xl font-bold tracking-tight text-white">
          {project.title}
        </h3>
      </div>

      {/* Rest of card content */}
      <CardContent className="flex flex-col flex-1 px-6 pb-8 relative z-10 gap-y-7 pt-3">
        <div className="space-y-3">
          <p className="text-[14.5px] text-white/50 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Credentials */}
          {project.credentials && (
            <div className="flex items-center gap-3 py-1 text-[11px] font-mono">
              <div className="flex items-center gap-1.5 text-emerald-400/80 font-bold uppercase tracking-wider">
                <Lock className="size-3" />
                <span>Demo Access:</span>
              </div>
              <div className="flex items-center gap-3 text-white/40">
                <span>
                  U :{" "}
                  <span className="text-white/70">
                    {project.credentials.user}
                  </span>
                </span>
                <span className="text-white/10">|</span>
                <span>
                  P :{" "}
                  <span className="text-white/70">
                    {project.credentials.pass}
                  </span>
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="space-y-3">
          <h4 className="text-[10px] font-black tracking-[0.2em] text-emerald-400/80 uppercase">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-[11px] px-2.5 py-2 rounded-sm bg-emerald-600/10 text-emerald-50 border-emerald-500/20 transition-all cursor-default">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="grid grid-cols-3 gap-3 pt-2 mt-auto">
          {project.liveLink === "#" ? (
            <button
              disabled
              className="h-10 w-full rounded-xl bg-emerald-800/40 text-white/70 border border-white/5 font-bold text-[10px] gap-2 cursor-not-allowed uppercase flex items-center justify-center">
              In Progress
            </button>
          ) : (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-full rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 font-bold text-[10px] gap-2 transition-all active:scale-[0.98] shadow-lg shadow-emerald-900/20 uppercase flex items-center justify-center">
              <Link className="w-3.5 h-3.5 mr-1" /> Live Demo
            </a>
          )}

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-full rounded-xl border border-white/10 bg-transparent hover:bg-white/5 text-white/80 font-bold text-[10px] gap-2 transition-all active:scale-[0.98] uppercase flex items-center justify-center">
            <FaGithub className="w-3.5 h-3.5 mr-1" /> Source
          </a>

          <NextLink
            href={`/projects/${project.slug}`}
            className="h-10 w-full rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-400 font-bold text-[10px] gap-2 transition-all active:scale-[0.98] uppercase flex items-center justify-center">
            View Details
          </NextLink>
        </div>
      </CardContent>
    </Card>
  );
}
