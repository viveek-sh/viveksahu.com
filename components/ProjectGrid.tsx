"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/Icons";

// Project Interface
export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  credentials?: {
    user: string;
    pass: string;
  };
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}>
      <Card className="group relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md hover:border-emerald-400/50 hover:bg-emerald-400/[0.01] transition-all duration-500">
        {/* Emerald Flare */}
        <div className="absolute -right-8 -top-8 w-40 h-40 bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section - 16:9 Aspect */}
          <div className="w-full lg:w-[48%] p-5 sm:pt-0 md:p-7">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/5 shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          {/* Content Section - Vertically Centered with CTAs inside */}
          <CardContent className="flex-1 px-6 pb-8 pt-2 lg:px-8 lg:pt-8 lg:pb-8 lg:pl-0 relative z-10 flex flex-col justify-center gap-y-7">
            <div className="space-y-3">
              <div className="flex items-center">
                <Icons.Terminal />
                <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-[14.5px] text-white/50 leading-relaxed line-clamp-2 lg:line-clamp-3 lg:max-w-[95%]">
                {project.description}
              </p>

              {/* Compact One-Line Credentials */}
              {project.credentials && (
                <div className="flex items-center gap-3 py-1 text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-emerald-400/80 font-bold uppercase tracking-wider">
                    <Icons.Lock />
                    <span>Access:</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/40">
                    <span>
                      U:{" "}
                      <span className="text-white/70">
                        {project.credentials.user}
                      </span>
                    </span>
                    <span className="text-white/10">|</span>
                    <span>
                      P:{" "}
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
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech: string) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-[10px] px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-50 hover:bg-emerald-400 hover:text-emerald-950 transition-all cursor-default hover:-translate-y-[2px]">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTAs moved inside CardContent */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md pt-2">
              {project.liveLink === "#" ? (
                <Button
                  disabled
                  className="h-10 w-full rounded-xl bg-emerald-800/40 text-white/70 border border-white/5 font-bold text-[10px] md:text-[11px] gap-2 cursor-not-allowed"
                  render={(props) => <button {...props} />}>
                  <Icons.Lock />
                  <span className="truncate uppercase">Not Deployed</span>
                </Button>
              ) : (
                <Button
                  className="h-10 w-full rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 font-bold text-[10px] md:text-[11px] gap-2 transition-all active:scale-[0.98] shadow-lg shadow-emerald-900/20"
                  render={(props) => (
                    <a
                      {...props}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  )}>
                  <Icons.External />
                  <span className="truncate uppercase">Live Demo</span>
                </Button>
              )}
              <Button
                variant="outline"
                className="h-10 w-full rounded-xl border-white/10 bg-transparent hover:bg-white/5 text-white/80 font-bold text-[10px] md:text-[11px] gap-2 transition-all active:scale-[0.98]"
                render={(props) => (
                  <a
                    {...props}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                )}>
                <Icons.Github />
                <span className="truncate uppercase">Source</span>
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <SectionHeader
        title="Featured"
        accent="Projects"
        description="Scalable full-stack systems and cloud-native architecture."
      />
      <div className="flex flex-col gap-10 mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
