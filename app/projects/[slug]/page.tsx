import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectBySlug, getMoreProjects } from "@/lib/projects";
import ProjectMDXLayout from "@/components/ProjectPageLayout";
import { getMDXComponents } from "@/mdx-components";
import fs from "fs";
import path from "path";

//@ts-ignore
const customComponents = getMDXComponents({});

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projectsDir = path.join(process.cwd(), "content/projects");
  if (!fs.existsSync(projectsDir)) return [];

  return fs
    .readdirSync(projectsDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.frontmatter.title} | Vivek Sahu`,
    description: project.frontmatter.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);
  const moreProjects = await getMoreProjects(3, slug);

  if (!project) notFound();

  const currentProjectData = {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
    date: project.frontmatter.date,
    image: project.frontmatter.image,
    slug: slug,
    liveLink: project.frontmatter.liveLink,
    githubLink: project.frontmatter.githubLink,
    credentials: project.frontmatter.credentials,
    techStack: project.frontmatter.techStack,
  };

  return (
    <ProjectMDXLayout
      currentProject={currentProjectData}
      moreProjects={moreProjects.map((p) => ({
        title: p.frontmatter.title,
        description: p.frontmatter.description,
        image: p.frontmatter.image,
        date: p.frontmatter.date,
        techStack: p.frontmatter.techStack,
        slug: p.slug,
        liveLink: p.frontmatter.liveLink,
        githubLink: p.frontmatter.githubLink,
      }))}>
      <div className="mdx-content">
        <MDXRemote source={project.content} components={customComponents} />
      </div>
    </ProjectMDXLayout>
  );
}
