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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://viveksahu.dev";
  const currentUrl = currentPost ? `${baseUrl}/blog/${currentPost.slug}` : "";

  return (
    // Back to 7xl, maintaining compact vertical padding
    <div className="max-w-7xl mx-auto px-6 py-10 lg:py-16 min-h-screen">
      <nav className="mb-8">
        <Link
          href="/blog"
          className="mt-20 group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Blogs
        </Link>
      </nav>

      {/* Increased gap slightly for larger screens to let the sidebar breathe */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 xl:gap-20">
        <main className="min-w-0 flex flex-col items-start">
          <article
            className="
              prose prose-zinc dark:prose-invert 
              
              /* ---> SCANNABILITY & READING WIDTH <--- */
              w-full max-w-[85ch] /* Prevents text from stretching too wide on 7xl screens */
              prose-p:text-muted-foreground prose-p:leading-[1.75] prose-p:mb-6
              prose-strong:text-foreground prose-strong:font-semibold
              
              /* Clear section dividers on H2s for quick scanning */
              prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground
              prose-h2:mt-12 prose-h2:mb-5 prose-h2:border-b prose-h2:border-border/40 prose-h2:pb-2
              prose-h3:mt-8 prose-h3:mb-3
              
              /* Tighter lists for easier reading */
              prose-ul:pl-5 prose-ul:mb-6 prose-li:my-1 prose-li:text-muted-foreground

              /* Links */
              prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-a:decoration-border/50 hover:prose-a:decoration-foreground prose-a:transition-colors
              
              /* ---> GLASSMORPHISM CODE BLOCKS <--- */
              prose-code:text-[13px] prose-code:bg-muted/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-zinc-100/50 dark:prose-pre:bg-zinc-900/50 prose-pre:backdrop-blur-md prose-pre:border prose-pre:border-border/50 prose-pre:rounded-xl prose-pre:shadow-sm
              [&_pre_code]:bg-transparent [&_pre_code]:p-0
              
              /* ---> ROUNDED BENTO TABLES <--- */
              prose-table:w-full prose-table:my-8 prose-table:text-sm
              prose-table:border-separate prose-table:border-spacing-0 prose-table:border prose-table:border-border/60 prose-table:rounded-xl prose-table:shadow-sm prose-table:overflow-hidden
              prose-th:bg-muted/30 prose-th:p-3.5 prose-th:text-left prose-th:font-medium prose-th:text-foreground prose-th:border-b prose-th:border-border/60
              prose-td:p-3.5 prose-td:text-muted-foreground prose-td:border-b prose-td:border-border/40
              [&_tr:last-child_td]:border-b-0
              prose-tr:transition-colors hover:prose-tr:bg-muted/10

              /* Blockquotes & Images */
              prose-blockquote:border-l-4 prose-blockquote:border-border/60 prose-blockquote:bg-muted/20 prose-blockquote:px-5 prose-blockquote:py-2 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-muted-foreground
              prose-img:rounded-xl prose-img:border prose-img:border-border/40 prose-img:shadow-sm
              prose-hr:border-border/40 prose-hr:my-10

              /* Mobile Responsive Tables */
              [&_table]:block [&_table]:overflow-x-auto sm:[&_table]:table
            ">
            {children}
          </article>

          <div className="w-full max-w-[85ch] mt-10 pt-6 border-t border-border/40">
            <ShareSection url={currentUrl} />
          </div>
        </main>

        <aside className="block lg:sticky lg:top-10">
          <div className="sticky top-10">
            {recentPosts.length > 0 && (
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Recent posts
                </p>
                <div className="flex flex-col gap-1">
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
    <Link
      href={`/blog/${post.slug}`}
      className="group flex items-center gap-3 p-2 -mx-2 rounded-xl hover:bg-muted/40 transition-all duration-200">
      <div className="relative w-14 h-10 shrink-0 rounded-lg overflow-hidden bg-muted border border-border/50 shadow-sm">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="56px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="text-[13px] font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-150 leading-tight truncate">
          {post.title}
        </h4>
        <time className="text-[11px] text-muted-foreground mt-0.5 block">
          {post.date}
        </time>
      </div>
    </Link>
  );
}

function ShareSection({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    if (url) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!url) return null;

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-foreground/80">
        Share article
      </span>

      <div className="flex items-center gap-1.5">
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-muted/40 border border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 shadow-sm">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.213 5.567 5.951-5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-muted/40 border border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 shadow-sm">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>

        <button
          onClick={copyLink}
          aria-label="Copy link"
          className={cn(
            "inline-flex items-center justify-center w-8 h-8 rounded-lg border shadow-sm transition-all duration-200",
            copied
              ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
              : "bg-muted/40 border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted",
          )}>
          {copied ? (
            <Check className="w-3.5 h-3.5" />
          ) : (
            <LinkIcon className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
    </div>
  );
}
