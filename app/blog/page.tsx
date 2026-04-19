import BlogHeroSection from "@/components/BlogHero";
import { getRecentPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getRecentPosts();
  return (
    <>
      <main className="min-h-screen">
        <BlogHeroSection blogs={posts} />
        {/* <BlogGrid posts={BLOG_DATA} /> */}
      </main>
    </>
  );
}
