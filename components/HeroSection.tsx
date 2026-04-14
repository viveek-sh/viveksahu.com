"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-5  w-full">
        <div className="max-w-xl md:max-w-2xl">
          {" "}
          {/* Slightly narrower on mobile */}
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm font-medium text-white mb-6 sm:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for opportunities
          </div>
          {/* Heading */}
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tighter text-white leading-[1.08] mb-4">
            Hello, I&apos;m <br />
            <span className="text-primary">Vivek Sahu</span>
          </h1>
          {/* Role */}
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90 mb-6">
            Full-Stack Web Developer &amp; Cloud Engineering Specialist
          </p>
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/75 max-w-lg mb-10">
            Crafting secure, scalable, and delightful digital experiences at{" "}
            <span className="text-white font-medium">Your Company</span>
          </p>
          {/* Contact Info - Better mobile layout */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-x-8 gap-y-3 text-white/70 text-sm sm:text-base mb-12">
            <div className="flex items-center gap-2">
              <Icons.MapPin className="w-4 h-4 text-primary" />
              Raipur, India
            </div>
            <a
              href="mailto:mail@viveksahu.com"
              className="flex items-center gap-2 hover:text-white transition-colors">
              <Icons.Mail className="w-4 h-4 text-primary" />
              mail@viveksahu.com
            </a>
            <a
              href="https://linkedin.com/in/viveksahu"
              target="_blank"
              className="flex items-center gap-2 hover:text-white transition-colors">
              {/* Replace the SVG block with this */}
              <Icons.Linkedin className="w-4 h-4 text-primary" />
              LinkedIn
            </a>
          </div>
          {/* CTA Buttons - Stacked on mobile */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="rounded-lg px-8 text-base group w-full sm:w-auto">
                Explore My Work
              </Button>
            </Link>

            <Link href="#contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg px-8 text-base border-white/30 hover:bg-white/10 text-white w-full sm:w-auto">
                Get In Touch
              </Button>
            </Link>
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
