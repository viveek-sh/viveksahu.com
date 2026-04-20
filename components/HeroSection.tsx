import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-500/20 blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Glass Container */}
        <div
          className="rounded-xl
          bg-gradient-to-br from-black/40 via-black/25 to-black/10
          backdrop-blur-md
          border border-white/15
          p-8 lg:p-16
          shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left */}
            <div className="flex-1 flex flex-col items-start space-y-6 w-full lg:max-w-2xl">
              {/* Status + Location */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-medium text-emerald-400">
                    Open to Opportunities
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-foreground/80">
                  <Icons.MapPin className="w-3.5 h-3.5" />
                  India
                </div>
              </div>
              {/* Heading */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Vivek Sahu
                </h1>
                <h2 className="text-lg sm:text-xl text-foreground/75 leading-relaxed">
                  Full Stack Developer focused on building scalable applications
                  and working across systems, cloud, and real-world
                  infrastructure.
                </h2>
              </div>
              {/* Skills */}
              <ul className="space-y-2.5 text-sm sm:text-base text-foreground/80">
                <li className="flex items-center gap-2.5">
                  <Icons.Code className="w-4 h-4 text-emerald-400 shrink-0" />
                  React, Next.js, Node.js
                </li>
                <li className="flex items-center gap-2.5">
                  <Icons.Cloud className="w-4 h-4 text-emerald-400 shrink-0" />
                  Cloud, Linux, Docker
                </li>
                <li className="flex items-center gap-2.5">
                  <Icons.Server className="w-4 h-4 text-emerald-400 shrink-0" />
                  Systems, Networking, Infra
                </li>
              </ul>
              <p className="text-sm text-foreground/60">
                Building across frontend, backend, and infrastructure.
              </p>
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2">
                <Link href="/projects" className="flex-1 sm:flex-none">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-700 text-white">
                    Explore Work
                    <Icons.ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto backdrop-blur-md bg-white/10 border-white/20 text-white">
                    <Icons.Download className="mr-2 w-4 h-4" />
                    Resume
                  </Button>
                </a>
              </div>
              {/* Socials */}
              <div className="flex items-center gap-4 pt-1">
                <a
                  href="https://github.com/viveek-sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-emerald-400 transition-colors">
                  <Icons.Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/viveek-sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-emerald-400 transition-colors">
                  <Icons.Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Terminal */}
            <div className="w-full lg:flex-1 relative max-w-lg lg:max-w-none mt-8 lg:mt-0">
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-[2rem] blur-xl opacity-40" />

              {/* Dark Glass Terminal */}
              <div
                className="relative w-full rounded-2xl
                bg-black/40
                backdrop-blur-xl
                border border-white/10
                shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center px-4 py-3 border-b border-white/10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="mx-auto text-xs font-mono text-muted-foreground">
                    vivek@portfolio:~
                  </div>
                </div>

                {/* Terminal */}
                <div className="p-6 font-mono text-sm sm:text-base space-y-4 text-foreground/80">
                  <div>
                    <span className="text-emerald-400">$ </span>whoami
                    <div className="text-muted-foreground/90 mt-1 pl-3">
                      vivek_sahu
                    </div>
                  </div>

                  <div>
                    <span className="text-emerald-400">$ </span>stack
                    <div className="text-muted-foreground/90 mt-1 pl-3">
                      full_stack + cloud + systems
                    </div>
                  </div>

                  <div>
                    <span className="text-emerald-400">$ </span>status
                    <div className="mt-1 pl-3 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                      </span>
                      <span className="text-emerald-400">open_to_work</span>
                    </div>
                  </div>

                  {/* Cursor */}
                  <div className="flex items-center gap-2 opacity-60">
                    <span className="text-emerald-400">$</span>
                    <span className="w-2 h-[1.1em] bg-white/60 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-white/60">
        <span className="text-xs tracking-widest font-mono">SCROLL</span>
        <Icons.ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
