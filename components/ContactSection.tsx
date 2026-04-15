"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SectionHeader from "./SectionHeader";
import { Icons } from "@/components/Icons";

const SOCIALS = [
  {
    name: "GitHub",
    handle: "@viveksahu",
    href: "https://github.com/viveksahu",
    icon: Icons.Github,
  },
  {
    name: "LinkedIn",
    handle: "/in/viveksahu",
    href: "https://linkedin.com/in/viveksahu",
    icon: Icons.Linkedin,
  },
  {
    name: "Instagram",
    handle: "@viveksahu",
    href: "https://instagram.com/viveksahu",
    icon: Icons.Instagram,
  },
];

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative inline-flex items-center">
      <Button
        size="sm"
        variant="outline"
        onClick={handleCopy}
        className={cn(
          "h-7 rounded-lg px-3 text-[10px] transition-all border-white/10 bg-white/5 hover:bg-white/10 text-white/70",
          copied && "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
        )}>
        {copied ? "Copied!" : "Copy"}
      </Button>

      <span
        className={cn(
          "pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 text-[10px] font-medium shadow-md transition-all",
          copied
            ? "opacity-100 translate-y-0 bg-black text-white"
            : "opacity-0 translate-y-1",
        )}>
        Copied to clipboard
      </span>
    </div>
  );
}

export default function ContactSection() {
  const glass =
    "bg-white/5 backdrop-blur-md border-white/10 transition-all duration-300";

  return (
    <section className="py-20 relative z-10" id="contact">
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeader
          title="Let's build"
          accent="something great"
          description="Open for opportunities and collaborations. Responses usually within 24h."
        />
        <div className="grid lg:grid-cols-12 gap-2 sm:gap-4 items-stretch">
          <div className="lg:col-span-7 flex flex-col gap-2 sm:gap-3">
            {/* Email Card */}
            <Card className={cn("rounded-xl", glass)}>
              <CardContent className="p-2.5 sm:p-4 flex items-center justify-between gap-2 sm:gap-3">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Icons.Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] text-white/30 font-medium uppercase tracking-widest">
                      Primary Email
                    </p>
                    <p className="text-xs sm:text-base font-medium text-white truncate tracking-tight">
                      mail@viveksahu.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-1.5 sm:gap-2 shrink-0">
                  <CopyButton value="mail@viveksahu.com" />
                  <Button
                    size="sm"
                    className="h-7 rounded-lg bg-white text-black hover:bg-white/90 font-bold text-[10px] px-3"
                    render={(props) => (
                      <Link {...props} href="mailto:mail@viveksahu.com" />
                    )}>
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <Card className={cn("rounded-xl", glass)}>
                <CardContent className="p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    {/* 3. Replace Phone with Icons.Phone */}
                    <Icons.Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/70" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] text-white/30 font-medium uppercase tracking-widest">
                      Call
                    </p>
                    <p className="text-[11px] sm:text-xs font-medium text-white truncate">
                      +91 99264 15077
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className={cn("rounded-xl", glass)}>
                <CardContent className="p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Icons.MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/70" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] text-white/30 font-medium uppercase tracking-widest">
                      Location
                    </p>
                    <p className="text-[11px] sm:text-xs font-medium text-white truncate">
                      Raipur, India
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card
              className={cn(
                "rounded-xl border-emerald-500/10 bg-emerald-500/5",
                glass,
              )}>
              <CardContent className="p-2.5 sm:p-4 flex items-center gap-3">
                <div className="relative shrink-0">
                  <span className="absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-bold text-emerald-400">
                    Available for Opportunities
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-white/40 leading-tight mt-0.5">
                    Open to full-time roles, internships, and open-source
                    collaborations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Socials Column */}
          <div className="lg:col-span-5 grid grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-3">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <Card
                  key={social.name}
                  className={cn(
                    "rounded-xl group hover:bg-white/10 hover:border-white/20",
                    glass,
                  )}
                  render={(props) => (
                    <a
                      {...props}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                    />
                  )}>
                  <CardContent className="p-2.5 sm:p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        {/* 5. Icon component now correctly references the Icons object */}
                        <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/60 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-[11px] sm:text-xs font-bold text-white/80">
                          {social.name}
                        </p>
                        <p className="hidden sm:block text-[10px] text-white/20">
                          {social.handle}
                        </p>
                      </div>
                    </div>
                    <Icons.ArrowUpRight className="w-3 h-3 text-white/20 group-hover:text-white/80 transition-all" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
