"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { BlogPost } from "@/components/BlogPageLayout";

interface BlogHeroProps {
  blogs: BlogPost[];
}

const PAGE_1_POSTS = 7; // 1 Featured + 6 Grid
const PAGE_N_POSTS = 6; // 6 Grid only

export default function BlogArchivePage({ blogs = [] }: BlogHeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTag, setSelectedTag] = useState("All Posts");
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Extract and sort tags by frequency
  const uniqueTags = useMemo(() => {
    const tagCounts: Record<string, number> = {};

    blogs.forEach((blog) => {
      blog.tags?.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });

    return Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag)
      .slice(0, 6);
  }, [blogs]);

  // Filter blogs by selected tag
  const filteredBlogs = useMemo(() => {
    if (selectedTag === "All Posts") return blogs;
    return blogs.filter((blog) => blog.tags?.includes(selectedTag));
  }, [blogs, selectedTag]);

  // Calculate dynamic total pages
  const totalPages = Math.max(
    1,
    filteredBlogs.length <= PAGE_1_POSTS
      ? 1
      : 1 + Math.ceil((filteredBlogs.length - PAGE_1_POSTS) / PAGE_N_POSTS),
  );

  // Get exactly the right slice of blogs depending on the current page
  const currentBlogs = useMemo(() => {
    if (currentPage === 1) {
      return filteredBlogs.slice(0, PAGE_1_POSTS);
    }
    const start = PAGE_1_POSTS + (currentPage - 2) * PAGE_N_POSTS;
    return filteredBlogs.slice(start, start + PAGE_N_POSTS);
  }, [filteredBlogs, currentPage]);

  // Handle smooth scrolling for pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPaginationItems = () => {
    if (totalPages <= 5)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 3) return [1, 2, 3, 4, "...", totalPages];
    if (currentPage >= totalPages - 2)
      return [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const isFirstPage = currentPage === 1;
  const featuredPost =
    isFirstPage && currentBlogs.length > 0 ? currentBlogs[0] : null;
  const gridPosts = isFirstPage ? currentBlogs.slice(1) : currentBlogs;

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative w-full pt-24 pb-20 lg:pt-32 lg:pb-24 transition-all duration-1000 ease-out min-h-screen flex flex-col",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}>
      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col">
        {/* Topic / Tag Filters - Minimal Pill Design */}
        {uniqueTags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16 animate-in fade-in duration-1000 delay-150">
            <Button
              variant="ghost"
              onClick={() => {
                setSelectedTag("All Posts");
                setCurrentPage(1);
              }}
              className={cn(
                "rounded-full text-sm font-medium transition-all px-6 py-2 h-auto",
                selectedTag === "All Posts"
                  ? "bg-foreground text-background hover:bg-foreground/90 hover:text-background"
                  : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted",
              )}>
              All
            </Button>
            {uniqueTags.map((tag) => (
              <Button
                key={tag}
                variant="ghost"
                onClick={() => {
                  setSelectedTag(tag);
                  setCurrentPage(1);
                }}
                className={cn(
                  "rounded-full text-sm font-medium transition-all capitalize px-6 py-2 h-auto",
                  selectedTag === tag
                    ? "bg-foreground text-background hover:bg-foreground/90 hover:text-background"
                    : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted",
                )}>
                {tag}
              </Button>
            ))}
          </div>
        )}

        {/* Post Layout */}
        <div className="flex-1 w-full">
          {filteredBlogs.length === 0 ? (
            /* Elegant Empty State */
            <div className="w-full flex flex-col items-center justify-center min-h-[40vh] border-2 border-dashed border-border/50 rounded-3xl bg-muted/20 text-center p-8 animate-in fade-in duration-700">
              <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-3">
                No posts published yet
              </h2>
              <p className="text-muted-foreground max-w-md">
                We're currently brewing up some interesting content for this
                section. Check back soon for updates!
              </p>
            </div>
          ) : (
            <>
              {/* Latest Featured Post - Split Editorial Layout */}
              {featuredPost && (
                <div className="mb-16 lg:mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                  <MainFeaturedPost post={featuredPost} />
                </div>
              )}

              {/* Grid Posts - Clean Borderless Design */}
              {gridPosts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                  {gridPosts.map((post) => (
                    <RecentPostCard key={post.slug} post={post} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Shadcn Pagination Components */}
        {totalPages > 1 && (
          <div className="mt-24 border-t border-border/50 pt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) handlePageChange(currentPage - 1);
                    }}
                    className={cn(
                      currentPage === 1 && "pointer-events-none opacity-40",
                      "hover:bg-muted",
                    )}
                  />
                </PaginationItem>

                {getPaginationItems().map((item, idx) => (
                  <PaginationItem key={idx}>
                    {item === "..." ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        href="#"
                        isActive={currentPage === item}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(item as number);
                        }}
                        className={cn(
                          currentPage === item
                            ? "bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100 hover:text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400"
                            : "hover:bg-muted",
                        )}>
                        {item}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages)
                        handlePageChange(currentPage + 1);
                    }}
                    className={cn(
                      currentPage === totalPages &&
                        "pointer-events-none opacity-40",
                      "hover:bg-muted",
                    )}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </section>
  );
}

/* ==================== Main Featured Post (Editorial Split Layout) ==================== */
function MainFeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col lg:flex-row gap-8 lg:gap-16 items-center w-full">
      {/* Large Image Area */}
      <div className="relative w-full lg:w-[55%] aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-3xl bg-muted border border-border/20">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Subtle inner shadow for depth */}
        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
      </div>

      {/* Text Content Area */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center py-4 lg:py-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-emerald-600 dark:text-emerald-400 font-medium text-sm tracking-wide bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-full">
            {post.tags?.[0] || "General"}
          </span>
          <span className="text-muted-foreground text-sm font-medium">
            {post.date}
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-6 group-hover:text-emerald-500 transition-colors duration-300">
          {post.title}
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed line-clamp-3 mb-8 font-light">
          {post.excerpt}
        </p>

        <div className="flex items-center text-emerald-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
          Read Article
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

/* ==================== Recent Post Card (Clean Borderless Layout) ==================== */
function RecentPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col w-full h-full">
      {/* Clean Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-muted mb-6 border border-border/20">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-emerald-600 dark:text-emerald-400 font-medium text-xs tracking-wide">
            {post.tags?.[0] ? post.tags[0].toUpperCase() : "GENERAL"}
          </span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="text-muted-foreground text-xs font-medium">
            {post.date}
          </span>
        </div>

        <h3 className="text-xl font-bold text-foreground leading-snug group-hover:text-emerald-500 transition-colors line-clamp-2 mb-3">
          {post.title}
        </h3>

        <p className="text-muted-foreground line-clamp-2 leading-relaxed font-light mb-4 text-sm">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
