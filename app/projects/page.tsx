import ProjectArchive from "@/components/ProjectArchivePage";
import { getMoreProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  // 1. Fetch the raw data from your MDX files
  const rawProjects = await getMoreProjects();

  // 2. Flatten the data to match your 'Project' interface exactly
  const formattedProjects = rawProjects.map((p) => ({
    slug: p.slug,
    title: p.frontmatter.title,
    description: p.frontmatter.description,
    image: p.frontmatter.image,
    date: p.frontmatter.date,
    techStack: p.frontmatter.techStack,
    liveLink: p.frontmatter.liveLink,
    githubLink: p.frontmatter.githubLink,
    credentials: p.frontmatter.credentials,
  }));

  // 3. Pass the cleanly formatted array as a prop
  return (
    <div className="min-h-screen pt-24 pb-12">
      <ProjectArchive projects={formattedProjects} />
    </div>
  );
}
