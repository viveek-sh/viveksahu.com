"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import SectionHeader from "./SectionHeader";
import { BlogPost } from "@/components/BlogLayout";

interface BlogGridProps {
  posts?: BlogPost[];
}

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={cn(
        "transition-all duration-1000 ease-out h-full",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
      )}>
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <Card className="relative h-full flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-emerald-400/40 hover:bg-white/10 transition-all duration-500 p-0 cursor-pointer">
          {/* Blog image */}
          <div className="relative aspect-[16/9.6] w-full overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </div>

          <CardContent className="flex-1 flex flex-col p-7 pt-2">
            {/* Tags */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
              {post.tags?.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.5px]">
                  #{tag}
                </span>
              ))}
            </div>

            {/* title */}
            <h3 className="text-[21px] leading-[1.15] font-semibold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 mb-3">
              {post.title}
            </h3>

            {/* excerpt */}
            <p className="text-white/70 text-[14.5px] leading-relaxed line-clamp-3 flex-1">
              {post.excerpt}
            </p>

            {/* Bottom meta */}
            <div className="mt-auto pt-6 flex items-center justify-between">
              <span className="text-xs font-mono text-white/60 tracking-wider">
                {post.date}
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default function BlogGridSection({ posts = [] }: BlogGridProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Recent"
          accent="Insights"
          description="Technical documentation of my building process and software architecture."
        />

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-white/10 rounded-3xl">
            <p className="text-white/30 font-mono text-sm">No posts yet.</p>
          </div>
        )}

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <Button
            variant="outline"
            className="h-12 rounded-2xl border-white/10 bg-white/5 hover:bg-emerald-500/10 hover:border-emerald-400/50 px-9 text-sm uppercase tracking-widest transition-all group"
            render={(props) => <Link {...props} href="/blog" />}>
            Explore All Articles
            <div className="ml-3 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all">
              <Icons.ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
