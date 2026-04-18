"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";

const SOCIALS = [
  {
    name: "GitHub",
    handle: "@viveek-sh",
    href: "https://github.com/viveek-sh",
    icon: Icons.Github,
  },
  {
    name: "LinkedIn",
    handle: "/in/viveek-sh",
    href: "https://www.linkedin.com/in/viveek-sh/",
    icon: Icons.Linkedin,
  },
  {
    name: "Twitter",
    handle: "@viveek_sh",
    href: "https://x.com/viveek_sh",
    icon: Icons.Twitter,
  },
];

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={handleCopy}
      className={cn(
        "h-11 sm:h-9 rounded-xl px-6 sm:px-4 text-[11px] font-bold uppercase tracking-widest transition-all border-white/10 bg-white/5 hover:bg-white/10 text-white/50",
        copied && "border-emerald-500 bg-emerald-500/10 text-emerald-400",
      )}>
      {copied ? "✓ Copied" : "Copy"}
    </Button>
  );
}

export default function ContactSection() {
  const glass =
    "bg-white/5 backdrop-blur-xl border-white/10 transition-all duration-500";

  return (
    <section className="py-24 relative z-10" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Let's build"
          accent="something great"
          description="Open for opportunities and collaborations."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* EMAIL CARD - Left-aligned text + Centered Buttons */}
            <Card
              className={cn(
                "rounded-[16px] overflow-hidden group hover:border-emerald-500/30",
                glass,
              )}>
              <CardContent className="p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 sm:gap-4">
                {/* Info Block - Always Left Aligned */}
                <div className="flex items-center gap-5 self-start sm:self-auto">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0d1d1f] flex items-center justify-center border border-emerald-500/20 shrink-0">
                    <Icons.Mail className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-0.5">
                      Email
                    </p>
                    <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight truncate">
                      mail@viveksahu.com
                    </h3>
                  </div>
                </div>

                {/* Buttons - Centered on Mobile, Right Aligned on Desktop */}
                <div className="flex flex-row items-center justify-center sm:justify-end gap-3 w-full sm:w-auto pt-2 sm:pt-0">
                  <CopyButton value="mail@viveksahu.com" />
                  <Button
                    className="h-11 sm:h-9 px-8 rounded-xl bg-white text-black hover:bg-emerald-400 hover:text-white font-bold text-[11px] uppercase transition-all shadow-xl shadow-black/40 flex-1 sm:flex-none"
                    render={(props) => (
                      <a {...props} href="mailto:mail@viveksahu.com" />
                    )}>
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* QUICK INFO GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1">
              {/* Phone Node */}
              <Card
                className={cn("rounded-[16px] hover:border-white/20", glass)}>
                <CardContent className="p-6 flex flex-col h-full justify-between gap-6">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icons.Phone className="w-4 h-4 text-white/40" />
                  </div>
                  <div>
                    <p className="text-white/20 text-[9px] font-black uppercase tracking-widest">
                      Phone
                    </p>
                    <p className="text-sm font-bold text-white mt-1">
                      +91 99264 15077
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Location Node */}
              <Card
                className={cn("rounded-[16px] hover:border-white/20", glass)}>
                <CardContent className="p-6 flex flex-col h-full justify-between gap-6">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icons.MapPin className="w-4 h-4 text-white/40" />
                  </div>
                  <div>
                    <p className="text-white/20 text-[9px] font-black uppercase tracking-widest">
                      Location
                    </p>
                    <p className="text-sm font-bold text-white mt-1">
                      Raipur, India
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Status Node */}
              <Card
                className={cn(
                  "rounded-[16px] border-emerald-500/20 bg-emerald-500/[0.03]",
                  glass,
                )}>
                <CardContent className="p-6 flex flex-col h-full justify-between gap-6">
                  <div className="relative w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <span className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                    <span className="relative w-2 h-2 bg-emerald-400 rounded-full" />
                  </div>
                  <div>
                    <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                      Status
                    </p>
                    <p className="text-sm font-bold text-white mt-1">
                      Open to Opportunities
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* RIGHT COLUMN: SOCIALS */}
          <div className="lg:col-span-5 flex">
            <Card
              className={cn(
                "rounded-[16px] p-8 w-full flex flex-col gap-8",
                glass,
              )}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                  <Icons.User className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-black text-white uppercase tracking-widest">
                  Social Network
                </h3>
              </div>

              <div className="space-y-3 flex-1 flex flex-col justify-center">
                {SOCIALS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/[0.02] transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/30">
                          <Icon className="w-5 h-5 text-white/30 group-hover:text-emerald-400 transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white uppercase tracking-tight group-hover:text-emerald-400 transition-colors">
                            {social.name}
                          </p>
                          <p className="text-[10px] font-mono text-white/20 tracking-tighter">
                            {social.handle}
                          </p>
                        </div>
                      </div>
                      <Icons.ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
