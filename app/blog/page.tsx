import BlogArchivePage from "@/components/BlogArchivePage";
import { getRecentPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getRecentPosts();
  return (
    <>
      <main className="min-h-screen">
        <BlogArchivePage blogs={posts} />
        {/* <BlogGrid posts={BLOG_DATA} /> */}
      </main>
    </>
  );
}
