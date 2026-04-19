"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
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
import { BlogPost } from "@/components/BlogLayout";

interface BlogHeroProps {
  blogs: BlogPost[];
}

// Dynamic post counts per page
const PAGE_1_POSTS = 7; // 1 Featured + 6 Grid
const PAGE_N_POSTS = 6; // 6 Grid only

export default function BlogHeroSection({ blogs = [] }: BlogHeroProps) {
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

  if (!blogs || blogs.length === 0) return null;

  const isFirstPage = currentPage === 1;
  const featuredPost = isFirstPage ? currentBlogs[0] : null;
  const gridPosts = isFirstPage ? currentBlogs.slice(1) : currentBlogs;

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative w-full pt-24 pb-12 lg:pt-32 lg:pb-16 transition-all duration-1000 ease-out min-h-screen flex flex-col",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}>
      {/* Changed max-w-6xl to max-w-7xl here */}
      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col">
        {/* Topic / Tag Filters */}
        {uniqueTags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <span className="text-muted-foreground text-xs font-medium uppercase tracking-widest mr-2">
              Filter by:
            </span>
            <Button
              variant={selectedTag === "All Posts" ? "default" : "outline"}
              onClick={() => {
                setSelectedTag("All Posts");
                setCurrentPage(1);
              }}
              className={cn(
                "rounded-full text-xs font-medium transition-all hover:scale-105 backdrop-blur-sm",
                selectedTag === "All Posts"
                  ? "bg-emerald-500 text-primary-foreground hover:bg-emerald-600"
                  : "bg-background/40 hover:text-emerald-500 hover:border-emerald-500/50",
              )}>
              All Posts
            </Button>
            {uniqueTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                onClick={() => {
                  setSelectedTag(tag);
                  setCurrentPage(1);
                }}
                className={cn(
                  "rounded-full text-xs font-medium transition-all hover:scale-105 capitalize backdrop-blur-sm",
                  selectedTag === tag
                    ? "bg-emerald-500 text-primary-foreground hover:bg-emerald-600"
                    : "bg-background/40 hover:text-emerald-500 hover:border-emerald-500/50",
                )}>
                {tag}
              </Button>
            ))}
          </div>
        )}

        {/* Post Layout */}
        <div className="flex-1">
          {filteredBlogs.length === 0 ? (
            <div className="text-center text-muted-foreground py-20">
              No posts found for this tag.
            </div>
          ) : (
            <>
              {/* Latest Featured Post (Only on Page 1) */}
              {featuredPost && (
                <div className="mb-6 lg:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <MainFeaturedPost post={featuredPost} />
                </div>
              )}

              {/* Grid Posts */}
              {gridPosts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
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
          <div className="mt-16">
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
                      currentPage === 1 && "pointer-events-none opacity-50",
                      "hover:text-emerald-500 backdrop-blur-sm bg-background/20",
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
                          "backdrop-blur-sm bg-background/20",
                          currentPage === item &&
                            "border-emerald-500 text-emerald-500 hover:text-emerald-600",
                          currentPage !== item && "hover:text-emerald-500",
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
                        "pointer-events-none opacity-50",
                      "hover:text-emerald-500 backdrop-blur-sm bg-background/20",
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

/* ==================== Main Featured Post ==================== */
function MainFeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block w-full h-full">
      <Card className="relative w-full h-[400px] lg:h-[550px] overflow-hidden rounded-[1.5rem] border-border/50 bg-card/40 backdrop-blur-lg transition-all duration-500 hover:border-emerald-500/40 hover:shadow-lg hover:bg-card/60">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent" />

        <CardContent className="absolute bottom-0 left-0 right-0 p-8 lg:p-14 z-10 flex flex-col justify-end">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-emerald-500 font-mono text-[11px] tracking-widest uppercase">
              {post.date}
            </span>
            <div className="h-1 w-1 rounded-full bg-border" />
            <span className="text-muted-foreground text-[11px] font-bold uppercase tracking-wider">
              {post.tags?.[0] ? `#${post.tags[0]}` : "#GENERAL"}
            </span>
          </div>

          <h1 className="text-3xl lg:text-6xl font-bold leading-[1.1] text-foreground mb-5 group-hover:text-emerald-500 transition-colors">
            {post.title}
          </h1>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed line-clamp-2 max-w-3xl font-light">
            {post.excerpt}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

/* ==================== Recent Post Card (Grid) ==================== */
function RecentPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block h-full flex flex-col">
      <Card className="relative h-full flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card/30 backdrop-blur-md hover:border-emerald-500/40 hover:bg-card/50 transition-all duration-500 p-0">
        {/* Clean Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <CardContent className="flex-1 flex flex-col p-6">
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
            {post.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-emerald-500 text-[10px] font-bold uppercase tracking-wider">
                #{tag}
              </span>
            ))}
          </div>

          <h3 className="text-[21px] leading-tight font-bold text-foreground group-hover:text-emerald-500 transition-colors line-clamp-2 mb-4">
            {post.title}
          </h3>

          <p className="text-[15px] text-muted-foreground line-clamp-3 leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div className="mt-auto">
            <span className="text-[11px] font-mono text-muted-foreground tracking-wider">
              {post.date}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
