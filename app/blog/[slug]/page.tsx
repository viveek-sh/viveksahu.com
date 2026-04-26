import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getRecentPosts } from "@/lib/posts";
import BlogMDXLayout from "@/components/BlogLayout";
import { getMDXComponents } from "@/mdx-components";
import Image from "next/image";

// @ts-ignore
const customComponents = getMDXComponents({});

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
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
      {/* Header */}
      <header className="not-prose mb-10">
        {/* Tags */}
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tags.map((tag: string) => (
              <span
                key={tag}
                className="text-[11px] font-mono text-white/70 bg-background/10 border border-accent/30 px-2 py-0.5 rounded">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight mb-4">
          {title}
        </h1>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-base text-muted-foreground leading-relaxed mb-5">
            {excerpt}
          </p>
        )}

        {/* Meta */}
        <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
          <span>{author || "Vivek Sahu"}</span>
          <span className="text-border">·</span>
          <time dateTime={date}>{formattedDate}</time>
        </div>

        <div className="mt-8 border-t border-border/50" />
      </header>

      {/* Featured image */}
      {image && (
        <div className="not-prose mb-10">
          <Image
            src={image}
            alt={title}
            width={800} // Example width
            height={450} // Example height (maintains 16:9)
            className="w-full rounded-xl border border-border/40 object-cover aspect-[16/9]"
          />
        </div>
      )}

      {/* Content */}
      <MDXRemote source={post.content} components={customComponents} />
    </BlogMDXLayout>
  );
}
