"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Key, Code, Link as LinkIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 min-h-screen">
      {/* Navigation */}
      <nav className="mb-10">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-white/40 hover:text-emerald-400 transition-colors duration-200">
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Projects
        </Link>
      </nav>

      {/* Simplified Header */}
      <header className="mb-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              {currentProject.title}
            </h1>
          </div>
          <p className="text-white/60 text-md leading-relaxed max-w-3xl">
            {currentProject.description}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <main className="lg:col-span-8 min-w-0">
          {/* Clean Image */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm mb-12 shadow-2xl">
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <article
            className="
              prose prose-zinc dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
              prose-h2:text-xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-white/70 prose-p:leading-relaxed prose-p:text-[15px]
              prose-a:text-emerald-400/90 prose-a:underline prose-a:underline-offset-4 prose-a:decoration-emerald-500/30 hover:prose-a:text-emerald-400/90
              prose-code:text-white/80 prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-white/[0.02] prose-pre:border prose-pre:border-white/5 prose-pre:rounded-lg
              prose-blockquote:border-l-white/20 prose-blockquote:bg-white/[0.02] prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:text-white/50
              prose-img:rounded-xl prose-img:border prose-img:border-white/10
              prose-hr:border-white/10
            ">
            {children}
          </article>
        </main>

        {/* Minimal Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-10 space-y-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-md shadow-xl overflow-hidden">
              <CardContent className="p-6 space-y-8">
                {/* Tech Stack */}
                <div className="space-y-4">
                  <h3 className="text-[10px] font-black tracking-widest text-emerald-400 uppercase">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-[10px] px-2.5 py-1 bg-white/5 text-white/70 border-white/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Demo Access */}
                {currentProject.credentials && (
                  <div className="space-y-4">
                    <h3 className="text-[10px] font-black tracking-widest text-emerald-400 uppercase">
                      Demo Access
                    </h3>
                    <div className="rounded-lg border border-white/10 bg-black/40 overflow-hidden font-mono text-[11px]">
                      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
                        <span className="text-white/30 uppercase text-[9px]">
                          User
                        </span>
                        <span className="text-emerald-400 font-bold">
                          {currentProject.credentials.user}
                        </span>
                      </div>
                      <div className="flex items-center justify-between px-4 py-2.5">
                        <span className="text-white/30 uppercase text-[9px]">
                          Pass
                        </span>
                        <span className="text-emerald-400 font-bold">
                          {currentProject.credentials.pass}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTAs */}
                <div className="flex flex-col gap-3">
                  {currentProject.liveLink && (
                    <Button
                      nativeButton={false}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] uppercase tracking-wider h-11 rounded-lg"
                      render={(props) => (
                        <a
                          {...props}
                          href={currentProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      )}>
                      <LinkIcon className="size-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {currentProject.githubLink && (
                    <Button
                      nativeButton={false}
                      variant="outline"
                      className="w-full border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-[11px] uppercase tracking-wider h-11 rounded-lg"
                      render={(props) => (
                        <a
                          {...props}
                          href={currentProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      )}>
                      <FaGithub className="size-4 mr-2" />
                      Source Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Simple Related Section */}
            {moreProjects.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-[10px] font-black tracking-widest text-white/30 uppercase px-1">
                  More Projects
                </h3>
                <div className="grid gap-3">
                  {moreProjects.slice(0, 2).map((project) => (
                    <Link
                      key={project.slug}
                      href={"/projects/" + project.slug}
                      className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                      <div className="relative w-16 h-10 shrink-0 rounded-md overflow-hidden bg-black/20">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <h4 className="text-[13px] font-bold text-white/60 group-hover:text-emerald-400 transition-colors truncate">
                        {project.title}
                      </h4>
                    </Link>
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
