import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getRecentPosts } from "@/lib/posts";
import BlogMDXLayout from "@/components/BlogPageLayout";
import { getMDXComponents } from "@/mdx-components";
import Image from "next/image";
import fs from "fs";
import path from "path";
import remarkGfm from "remark-gfm"; // <-- 1. Import added here

// @ts-ignore
const customComponents = getMDXComponents({});

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "content/posts");
  if (!fs.existsSync(postsDir)) return [];

  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.frontmatter.title} | Vivek Sahu`,
    description: post.frontmatter.excerpt,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      images: post.frontmatter.image ? [post.frontmatter.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const recentPosts = await getRecentPosts(4);

  if (!post) notFound();

  const { title, date, author, tags, image, excerpt } = post.frontmatter;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <BlogMDXLayout recentPosts={recentPosts} currentPost={{ title, slug }}>
      <header className="not-prose mb-10">
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tags.map((tag: string) => (
              <span
                key={tag}
                className="text-[12px] font-medium tracking-tight text-white/80 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg backdrop-blur-sm transition-colors hover:bg-accent/20 hover:text-white hover:border-accent/50 cursor-default">
                #{tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight mb-4">
          {title}
        </h1>

        {excerpt && (
          <p className="text-base text-muted-foreground leading-relaxed mb-5">
            {excerpt}
          </p>
        )}

        <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
          <span>{author || "Vivek Sahu"}</span>
          <span className="text-border">·</span>
          <time dateTime={date}>{formattedDate}</time>
        </div>

        <div className="mt-8 border-t border-border/50" />
      </header>

      {image && (
        <div className="not-prose mb-10">
          <Image
            src={image}
            alt={title}
            width={800}
            height={450}
            className="w-full rounded-xl border border-border/40 object-cover aspect-[16/9]"
          />
        </div>
      )}

      {/* 2. Options passed here so next-mdx-remote knows how to parse tables */}
      <MDXRemote
        source={post.content}
        components={customComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </BlogMDXLayout>
  );
}
