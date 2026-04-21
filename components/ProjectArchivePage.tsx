"use client";

import { useState, useMemo } from "react";
import SectionHeader from "@/components/SectionHeader";
import { Project } from "./ProjectGridSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, Lock, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectArchiveProps {
  projects: Project[];
}

export default function ProjectArchive({ projects }: ProjectArchiveProps) {
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => {
    const allTech = projects.flatMap((p) => p.techStack);
    return ["All", ...Array.from(new Set(allTech))];
  }, [projects]);

  const filteredProjects = projects.filter((p) => {
    return activeTag === "All" || p.techStack.includes(activeTag);
  });

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 pt-30">
      <SectionHeader
        title="The"
        accent="Archive"
        description="A complete catalog of my engineering experiments, architectural deep-dives, and production systems."
      />

      {/* Filter Pills */}
      <div className="mt-12 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border ${
              activeTag === tag
                ? "bg-emerald-500 text-emerald-950 border-emerald-500 "
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
    <Card className="group relative flex flex-col h-full overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md hover:border-emerald-400/50 hover:bg-emerald-400/[0.01] transition-all duration-500 rounded-[16px]">
      {/* image section  */}
      <div className="p-4 -mt-4">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/5 shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>

      {/* Same as landing featured mobile layout */}
      <CardContent className="flex flex-col flex-1 px-6 pb-8 relative z-10 gap-y-7">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Terminal className="text-emerald-400" />
            <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-[14.5px] text-white/50 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Credentials */}
          {project.credentials && (
            <div className="flex items-center gap-3 py-1 text-[11px] font-mono">
              <div className="flex items-center gap-1.5 text-emerald-400/80 font-bold uppercase tracking-wider">
                <Lock className="size-3" />
                <span>Access:</span>
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

        {/* Tech Stack Area */}
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

        {/* CTAs using Base UI render pattern */}
        <div className="grid grid-cols-2 gap-3 pt-2 mt-auto">
          {project.liveLink === "#" ? (
            <Button
              disabled
              className="h-10 w-full rounded-xl bg-emerald-800/40 text-white/70 border border-white/5 font-bold text-[10px] gap-2 cursor-not-allowed uppercase"
              render={(props) => <button {...props} />}>
              <Lock className="w-3.5 h-3.5" /> Not Deployed
            </Button>
          ) : (
            <Button
              className="h-10 w-full rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 font-bold text-[10px] gap-2 transition-all active:scale-[0.98] shadow-lg shadow-emerald-900/20 uppercase"
              render={(props) => (
                <a
                  {...props}
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              )}>
              <Link className="w-3.5 h-3.5" /> Live Demo
            </Button>
          )}

          <Button
            variant="outline"
            className="h-10 w-full rounded-xl border-white/10 bg-transparent hover:bg-white/5 text-white/80 font-bold text-[10px] gap-2 transition-all active:scale-[0.98] uppercase"
            render={(props) => (
              <a
                {...props}
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              />
            )}>
            <FaGithub className="w-3.5 h-3.5" /> Source
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
