import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIRECTORY = path.join(process.cwd(), "content/projects");

export async function getProjectBySlug(slug: string) {
  try {
    const fullPath = path.join(PROJECTS_DIRECTORY, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      // Strictly mapped to your new Project interface
      frontmatter: {
        title: data.title,
        description: data.description,
        image: data.image,
        date: data.date ? data.date.toString() : "",
        techStack: data.techStack || [],
        liveLink: data.liveLink,
        githubLink: data.githubLink,
        credentials: data.credentials,
      },
      content: content,
    };
  } catch (error) {
    console.error(`Error reading project for slug: ${slug}`, error);
    return null;
  }
}

export async function getMoreProjects(limit: number = 0, excludeSlug?: string) {
  try {
    if (!fs.existsSync(PROJECTS_DIRECTORY)) {
      console.warn("Projects directory not found:", PROJECTS_DIRECTORY);
      return [];
    }

    const fileNames = fs
      .readdirSync(PROJECTS_DIRECTORY)
      .filter((file) => file.endsWith(".mdx"));

    let allProjects = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(PROJECTS_DIRECTORY, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        frontmatter: {
          // Strictly mapped to your new Project interface
          title: data.title,
          description: data.description,
          image: data.image,
          date: data.date ? data.date.toString() : "",
          techStack: data.techStack || [],
          liveLink: data.liveLink,
          githubLink: data.githubLink,
          credentials: data.credentials,
        },
      };
    });

    if (excludeSlug) {
      allProjects = allProjects.filter(
        (project) => project.slug !== excludeSlug,
      );
    }

    const sortedProjects = allProjects.sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );

    return limit && limit > 0 ? sortedProjects.slice(0, limit) : sortedProjects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
