import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowRight, Download, Mail } from "lucide-react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Linux",
  "Docker",
  "AWS",
  "Networking",
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-24 sm:px-8">
      {/* Subtle left-side text protection — keeps bg image visible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.28) 40%, transparent 65%)",
        }}
      />

      {/* Centered max-w-7xl container, content left-aligned inside it */}
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex max-w-2xl flex-col items-start">
          {/* 1 — Availability badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-2 text-xs font-medium tracking-wide text-emerald-400 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Available for full-time engineering roles
          </div>

          {/* 2 — Headline */}
          <h1
            className="text-4xl font-bold leading-[1.1] tracking-[-1.2px] text-white sm:text-5xl lg:text-[54px]"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.45)" }}>
            Building Reliable Systems
            <br />
            from Frontend to Infrastructure
          </h1>

          {/* Name / role — subordinate to headline */}
          <p className="mt-4 text-sm tracking-wide text-white/45">
            Vivek Sahu — Software Engineer
          </p>

          {/* 3 — Description */}
          <p
            className="mt-5 max-w-md text-[15px] leading-[1.8] text-white/55"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
            Full-stack engineer with experience in{" "}
            <span className="font-medium text-white/82">
              web development, cloud infrastructure, Linux, networking
            </span>{" "}
            and system design.
          </p>

          {/* 4 — CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-400 px-6 text-[13px] font-bold text-emerald-950 transition-all hover:-translate-y-0.5 hover:bg-emerald-300 active:translate-y-px">
              View projects
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/[0.14] bg-black/25 px-6 text-[13px] font-medium text-white/70 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/[0.22] hover:text-white/90 active:translate-y-px">
              <Download className="h-3.5 w-3.5" />
              Download resume
            </a>
          </div>

          {/* 5 — Skills */}
          <div className="mt-9 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/[0.11] bg-black/20 px-3 py-1 text-[11px] tracking-wide text-white/45 backdrop-blur-sm">
                {s}
              </span>
            ))}
          </div>

          {/* 6 — Social links */}
          <div className="mt-9 flex items-center gap-5 text-white/35">
            <a
              href="mailto:mail@viveksahu.com"
              aria-label="Email"
              className="transition-colors hover:text-emerald-400">
              <Mail className="h-[17px] w-[17px]" />
            </a>
            <a
              href="https://github.com/viveek-sh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-emerald-400">
              <FaGithub className="h-[17px] w-[17px]" />
            </a>
            <a
              href="https://linkedin.com/in/viveek-sh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-emerald-400">
              <FaLinkedin className="h-[17px] w-[17px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
