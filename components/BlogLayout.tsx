"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, Link as LinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  tags: string[];
}

interface BlogLayoutProps {
  children: React.ReactNode;
  recentPosts: BlogPost[];
  currentPost?: {
    title: string;
    slug: string;
  };
}

export default function BlogMDXLayout({
  children,
  recentPosts = [],
  currentPost,
}: BlogLayoutProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://viveksahu.com";

  const currentUrl = currentPost ? `${baseUrl}/blog/${currentPost.slug}` : "";

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 min-h-screen">
      {/* Back nav */}
      <nav className="mb-12">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-150">
          <ArrowLeft className="w-4 h-4 transition-transform duration-150 group-hover:-translate-x-0.5" />
          Blogs
        </Link>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">
        {/* Main */}
        <main className="min-w-0">
          <article
            className="
              prose prose-zinc dark:prose-invert max-w-none
              prose-headings:font-semibold prose-headings:tracking-tight
              prose-p:text-muted-foreground prose-p:leading-[1.8]
              prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-a:decoration-border hover:prose-a:decoration-foreground prose-a:transition-all
              prose-strong:text-foreground
              prose-code:text-[13px] prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-lg
              prose-blockquote:border-l-2 prose-blockquote:border-border prose-blockquote:not-italic prose-blockquote:text-muted-foreground
              prose-img:rounded-xl prose-img:border prose-img:border-border/50
              prose-hr:border-border/50
              [&_pre_code]:bg-transparent [&_pre_code]:p-0
            ">
            {children}
          </article>

          <div className="mt-12 pt-8 border-t border-border/50">
            <ShareSection url={currentUrl} />
          </div>
          {/* {recentPosts.length > 0 && (
            <div className="lg:hidden mt-12 pt-8 border-t border-border/50">
              <p className="text-sm font-medium uppercase tracking-widest text-foreground/70 mb-5">
                Recent posts
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {recentPosts.slice(0, 4).map((post) => (
                  <SidebarPostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          )} */}
        </main>

        {/* Sidebar */}
        <aside className="block lg:sticky lg:top-10">
          <div className="sticky top-10">
            {recentPosts.length > 0 && (
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-foreground/70 mb-5">
                  Recent posts
                </p>
                <div className="space-y-5">
                  {recentPosts.slice(0, 4).map((post) => (
                    <SidebarPostCard key={post.slug} post={post} />
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

function SidebarPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex items-start gap-3">
      <div className="relative w-20 h-14 shrink-0 rounded-md overflow-hidden bg-muted border border-white/15">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="128px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0">
        <h4 className="text-sm text-foreground/70 group-hover:text-foreground transition-colors duration-150 leading-snug line-clamp-2 mb-1">
          {post.title}
        </h4>
        <time className="text-xs text-foreground/45">{post.date}</time>
      </div>
    </Link>
  );
}

function ShareSection({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    if (url) navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-1.5">
      <span className="text-sm text-muted-foreground mr-2">Share</span>

      {/* X */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="inline-flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150">
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.213 5.567 5.951-5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="inline-flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150">
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>

      {/* Copy */}
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className={cn(
          "inline-flex items-center justify-center w-8 h-8 rounded-md transition-all duration-150",
          copied
            ? "text-emerald-500 bg-emerald-500/10"
            : "text-muted-foreground hover:text-foreground hover:bg-muted",
        )}>
        {copied ? (
          <Check className="w-3.5 h-3.5" />
        ) : (
          <LinkIcon className="w-3.5 h-3.5" />
        )}
      </button>
    </div>
  );
}
