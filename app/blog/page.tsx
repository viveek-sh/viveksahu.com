"use client";

import BlogHero, { BlogPost } from "@/components/BlogHero";
import BlogGrid from "@/components/BlogGrid";

// ✅ Clean & Complete Image URLs
const featuredPost: BlogPost = {
  title: "Scaling Next.js to 100k+ Users: Architecture Lessons Learned",
  excerpt:
    "How we redesigned our caching, database, and deployment strategy to handle massive traffic while maintaining blazing-fast performance.",
  date: "April 10, 2026",
  image: "/blog/blog-1.jpg",
  slug: "scaling-nextjs-architecture",
  tags: ["nextjs", "architecture", "performance", "devops"],
};

const recentPosts: BlogPost[] = [
  {
    title: "Building a High-Performance Matching Engine in TypeScript",
    excerpt:
      "Deep dive into memory management, data structures, and optimization techniques for sub-millisecond order execution.",
    date: "April 8, 2026",
    image: "/blog/blog-1.jpg",
    slug: "high-performance-matching-engine",
    tags: ["typescript", "systems", "performance"],
  },
  {
    title: "The Shift Toward AI-Native Architectures",
    excerpt:
      "Why traditional backend patterns are evolving to accommodate real-time LLM inference and RAG pipelines.",
    date: "March 28, 2026",
    image: "/blog/blog-2.jpg",
    slug: "ai-native-architectures",
    tags: ["ai", "architecture", "llm"],
  },
  {
    title: "Advanced Caching Strategies with Redis & Next.js",
    excerpt:
      "Exploring distributed caching, edge revalidation, and cache invalidation patterns for high-traffic applications.",
    date: "March 22, 2026",
    image: "/blog/blog-3.jpg",
    slug: "advanced-caching-nextjs",
    tags: ["nextjs", "redis", "caching"],
  },
  {
    title: "Observability in Production: What Actually Matters",
    excerpt:
      "Beyond logs and metrics — building real observability pipelines that help you sleep better at night.",
    date: "March 15, 2026",
    image: "/blog/blog-1.jpg",
    slug: "observability-production",
    tags: ["devops", "monitoring"],
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Blog Hero Section */}
      <BlogHero featuredPost={featuredPost} recentPosts={recentPosts} />

      {/* All Posts Grid */}
      <div id="all-posts">
        <BlogGrid posts={recentPosts} />
      </div>
    </div>
  );
}
