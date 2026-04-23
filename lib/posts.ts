import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIRECTORY = path.join(process.cwd(), "content/posts");
import { BlogPost } from "@/components/BlogLayout";

/**
 * Fetches a single post by its slug (filename without .mdx)
 * Used for the individual blog post pages.
 */

export async function getPostBySlug(slug: string) {
  try {
    const fullPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Extract the frontmatter (data) and the actual markdown content
    const { data, content } = matter(fileContents);

    return {
      frontmatter: data,
      content: content,
    };
  } catch (error) {
    console.error(`Error reading post for slug: ${slug}`, error);
    return null; // Return null if the file doesn't exist
  }
}

/*
  Fetches all posts, sorts them by date (newest first).
  If limit is provided and > 0, returns only that many posts.
  If no limit (or limit <= 0) is passed, returns ALL posts.
 */
export async function getRecentPosts(limit: number = 0): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(POSTS_DIRECTORY)) {
      console.warn("Posts directory not found:", POSTS_DIRECTORY);
      return [];
    }

    const fileNames = fs
      .readdirSync(POSTS_DIRECTORY)
      .filter((file) => file.endsWith(".mdx"));

    const allPosts = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(POSTS_DIRECTORY, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled",
        excerpt: data.excerpt || data.description || "",
        // Force the date to be a string!
        date: data.date ? data.date.toString() : "2003-01-01",
        image: data.image || "",
        tags: data.tags || [],
      } as BlogPost;
    });

    const sortedPosts = allPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    console.log(` Loaded ${sortedPosts.length} posts`); // Helpful for debugging

    return limit && limit > 0 ? sortedPosts.slice(0, limit) : sortedPosts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
