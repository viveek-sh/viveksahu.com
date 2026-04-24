"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Key } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export interface Project {
  title: string;
  description: string;
  image: string;
  slug: string;
  date: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  credentials?: {
    user: string;
    pass: string;
  };
}

interface ProjectLayoutProps {
  children: React.ReactNode;
  currentProject: Project;
  moreProjects?: Project[];
}

export default function ProjectMDXLayout({
  children,
  currentProject,
  moreProjects = [],
}: ProjectLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 min-h-screen selection:bg-primary/20">
      {/* Back nav */}
      <nav className="mb-12">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200">
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          All Projects
        </Link>
      </nav>

      {/* Two-column layout: left = image + content, right = sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
        {/* ── Left: Image + Header + MDX ── */}
        <div className="lg:col-span-7 xl:col-span-8 min-w-0">
          {/* Hero Image */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-border/40 mb-8 bg-muted/10 shadow-xl shadow-black/5">
            <Image
              src={currentProject.image}
              alt={`${currentProject.title} preview`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] rounded-2xl pointer-events-none" />
          </div>

          {/* Page Header */}
          <header className="mb-10">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.08] text-foreground mb-5">
              {currentProject.title}
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              {currentProject.description}
            </p>
          </header>

          {/* Divider */}
          <div className="h-px bg-border/40 mb-10" />

          {/* MDX Content */}
          <article
            className="
              prose prose-zinc dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-[1.8] prose-p:text-[15px]
              prose-a:text-primary prose-a:no-underline prose-a:font-medium hover:prose-a:opacity-80
              prose-strong:text-foreground prose-strong:font-semibold
              prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-[13px] prose-code:font-medium
              prose-pre:bg-muted/40 prose-pre:backdrop-blur-sm prose-pre:border prose-pre:border-border/50 prose-pre:rounded-xl
              prose-blockquote:border-l-primary/40 prose-blockquote:text-muted-foreground prose-blockquote:not-italic
              prose-img:rounded-xl prose-img:border prose-img:border-border/40
              prose-hr:border-border/40
              prose-ul:text-muted-foreground prose-ol:text-muted-foreground
              prose-li:marker:text-primary/50
            ">
            {children}
          </article>
        </div>

        {/* ── Right: Sidebar ── */}
        <aside className="lg:col-span-5 xl:col-span-4">
          <div className="sticky top-10 space-y-4">
            {/* Project Brief Card */}
            <div className="rounded-2xl border border-border/50 bg-background/40 backdrop-blur-md overflow-hidden">
              <div className="px-5 py-3.5 border-b border-border/40">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary/70">
                  Project Brief
                </span>
              </div>

              <div className="divide-y divide-border/30">
                {/* Tech Stack */}
                <div className="px-5 py-4">
                  <p className="text-xs font-medium text-muted-foreground mb-3">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {currentProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-muted/50 border border-border/50 text-foreground/70 hover:text-foreground hover:border-border transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credentials */}
                {currentProject.credentials && (
                  <div className="px-5 py-4">
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Key className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">
                        Demo Credentials
                      </span>
                    </div>
                    <div className="rounded-lg border border-border/40 bg-muted/30 overflow-hidden font-mono text-[12px]">
                      <div className="flex items-center justify-between px-3 py-2.5 border-b border-border/30">
                        <span className="text-muted-foreground/60">user</span>
                        <span className="text-foreground/80">
                          {currentProject.credentials.user}
                        </span>
                      </div>
                      <div className="flex items-center justify-between px-3 py-2.5">
                        <span className="text-muted-foreground/60">pass</span>
                        <span className="text-foreground/80">
                          {currentProject.credentials.pass}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              {(currentProject.liveLink || currentProject.githubLink) && (
                <div className="px-5 pb-5 pt-4 flex flex-col gap-2.5 border-t border-border/30">
                  {currentProject.liveLink && (
                    <a
                      href={currentProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-150">
                      <ExternalLink className="w-4 h-4" />
                      Visit Live Site
                    </a>
                  )}
                  {currentProject.githubLink && (
                    <a
                      href={currentProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl border border-border/60 bg-background/30 backdrop-blur-sm text-foreground/70 text-sm font-medium hover:bg-muted/50 hover:text-foreground active:scale-[0.98] transition-all duration-150">
                      <FaGithub className="w-4 h-4" />
                      View Source
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* More Projects Card */}
            {moreProjects.length > 0 && (
              <div className="rounded-2xl border border-border/50 bg-background/40 backdrop-blur-md overflow-hidden">
                <div className="px-5 py-3.5 border-b border-border/40">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary/70">
                    More Projects
                  </span>
                </div>

                <div className="p-3 space-y-1">
                  {moreProjects.slice(0, 3).map((project) => (
                    <SidebarProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ==================== Helper Components ==================== */

function SidebarProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-muted/40 transition-colors duration-200">
      <div className="relative w-[72px] h-[46px] shrink-0 rounded-lg overflow-hidden border border-border/40 bg-muted/20">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-[13px] font-medium text-foreground/80 group-hover:text-foreground transition-colors leading-snug truncate">
          {project.title}
        </h4>
        <p className="text-[11px] text-muted-foreground mt-0.5">
          {project.date}
        </p>
      </div>

      <ArrowLeft className="w-3.5 h-3.5 text-muted-foreground/30 rotate-180 group-hover:text-primary/60 group-hover:translate-x-0.5 transition-all duration-200 shrink-0 mr-0.5" />
    </Link>
  );
}
