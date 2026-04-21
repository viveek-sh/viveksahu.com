"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  Mail,
  Check,
  Copy,
  Send,
  Download,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const EMAIL = "mail@viveksahu.com";
const LOCATION = "Raipur, Chhattisgarh, India";

const socials = [
  {
    label: "GitHub",
    handle: "@viveek-sh",
    href: "https://github.com/viveek-sh",
    icon: <FaGithub className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    handle: "in/viveek-sh",
    href: "https://www.linkedin.com/in/viveek-sh/",
    icon: <FaLinkedin className="h-5 w-5" />,
  },
  {
    label: "Twitter",
    handle: "@viveek_sh",
    href: "https://x.com/viveek_sh",
    icon: <FaSquareXTwitter className="h-5 w-5" />,
  },
];

function GlassCard({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col ${className}`}>
      {children}
    </div>
  );
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        const el = document.createElement("textarea");
        el.value = EMAIL;
        el.style.position = "fixed";
        el.style.opacity = "0";
        document.body.appendChild(el);
        el.focus();
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silently fail
    }
  };

  const handleDownloadResume = () => {
    // Replace with your actual resume URL
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Vivek_Sahu_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-6 py-24 z-10">
      <SectionHeader
        title="Get in"
        accent="Touch"
        description="Open to freelance projects, full-time roles, and interesting collaborations."
      />

      {/* ── Bento grid ── */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(160px,auto)]">
        {/* ── Email: 2 Columns ── */}
        <GlassCard className="sm:col-span-2 lg:col-span-2 justify-between gap-6 hover:border-emerald-400/50 hover:bg-emerald-400/[0.02] transition-all duration-500">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="relative flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-500/10 border border-white/5 shrink-0">
                <Mail className="h-4 w-4 text-emerald-400" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-emerald-400/80 font-mono font-black mb-0.5">
                  Email
                </p>
                <p className="text-sm font-semibold text-white/80 truncate">
                  {EMAIL}
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex gap-3">
            <Button
              size="sm"
              onClick={handleCopy}
              className="flex-1 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 font-bold text-[10px] uppercase gap-2 transition-all active:scale-[0.98]">
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy
                </>
              )}
            </Button>
            <Button
              size="sm"
              onClick={() => (window.location.href = `mailto:${EMAIL}`)}
              className="flex-1 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] uppercase gap-2 transition-all active:scale-[0.98] shadow-lg shadow-emerald-900/20">
              <Send className="h-3.5 w-3.5" />
              Send Mail
            </Button>
          </div>
        </GlassCard>

        {/* ── Status & Resume: 1 Column ── */}
        <GlassCard className="sm:col-span-1 lg:col-span-1 hover:border-emerald-400/50 hover:bg-emerald-400/[0.02] transition-all duration-500 justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <p className="text-[10px] uppercase tracking-widest text-emerald-400/80 font-mono font-black truncate">
                Current Status
              </p>
            </div>
            <p className="text-sm font-semibold text-white/80 leading-tight">
              Open to Opportunities
            </p>
          </div>

          <Button
            size="sm"
            onClick={handleDownloadResume}
            className="w-full h-10 mt-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-[10px] uppercase gap-2 transition-all active:scale-[0.98]">
            <Download className="h-3.5 w-3.5 text-emerald-400" />
            Resume
          </Button>
        </GlassCard>

        {/* ── Location: 1 Column ── */}
        <GlassCard className="sm:col-span-1 lg:col-span-1 hover:border-emerald-400/50 hover:bg-emerald-400/[0.02] transition-all duration-500 justify-between">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-500/10 border border-white/5">
            <MapPin className="h-4 w-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-emerald-400/80 font-mono font-black mb-1">
              Location
            </p>
            <p className="text-sm font-semibold text-white/80">{LOCATION}</p>
          </div>
        </GlassCard>

        {/* ── Socials: 4 Columns ── */}
        <div className="sm:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-5 hover:border-emerald-400/50 hover:bg-emerald-400/[0.02] transition-all duration-500">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/0 blur-2xl group-hover:bg-emerald-500/10 transition-all duration-500 pointer-events-none" />
              <div className="flex items-center gap-4 relative">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-500/10 border border-white/5 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  {s.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-white/80 group-hover:text-emerald-400 transition-colors">
                    {s.label}
                  </p>
                  <p className="text-[11px] text-white/40 font-mono">
                    {s.handle}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-white/20 group-hover:text-emerald-400 transition-colors shrink-0 relative" />
            </a>
          ))}
        </div>
      </div>

      <p className="text-[11px] text-white/30 font-mono mt-6">
        Usually responds within 24 hours · IST (UTC+5:30)
      </p>
    </section>
  );
}
