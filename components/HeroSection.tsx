import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Mail,
  MapPin,
} from "lucide-react";

const proofPoints = [
  "React / Next.js",
  "Node.js / APIs",
  "Cloud / Linux",
  "Systems thinking",
];

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_18%,rgba(16,185,129,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_42%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-foreground/70 shadow-[0_14px_44px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span>Open to full-time engineering roles</span>
          <span className="hidden h-1 w-1 rounded-full bg-foreground/30 sm:block" />
          <span className="hidden items-center gap-1 sm:inline-flex">
            <MapPin className="h-3.5 w-3.5 text-emerald-300" />
            India
          </span>
        </div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300/90">
          Vivek Sahu
        </p>

        <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          I turn messy product ideas into reliable web systems.
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-foreground/64 sm:text-lg">
          Full-stack engineer working across React, Next.js, Node.js, cloud,
          and infrastructure. I care about clean interfaces, dependable
          backends, and systems that are easy to operate.
        </p>

        <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/projects"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-400 px-6 text-sm font-bold text-emerald-950 shadow-[0_18px_45px_rgba(16,185,129,0.24),inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-2px_0_rgba(0,0,0,0.12)] transition-all hover:-translate-y-0.5 hover:bg-emerald-300 active:translate-y-px">
            See my work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-white/12 bg-white/[0.045] px-6 text-sm font-semibold text-foreground/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-white/[0.07] hover:text-emerald-100 active:translate-y-px">
            <Download className="mr-2 h-4 w-4" />
            Resume
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-foreground/54">
          {proofPoints.map((point) => (
            <span
              key={point}
              className="rounded-full border border-white/8 bg-white/[0.025] px-3 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
              {point}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          <a
            href="mailto:mail@viveksahu.com"
            aria-label="Email Vivek Sahu"
            className="text-foreground/52 transition-colors hover:text-emerald-300">
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/viveek-sh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-foreground/52 transition-colors hover:text-emerald-300">
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/viveek-sh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-foreground/52 transition-colors hover:text-emerald-300">
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/45 sm:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">
          Projects
        </span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  );
}
