import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectGrid from "@/components/ProjectGridSection";
import ContactSection from "@/components/ContactSection";
import BlogGridSection from "@/components/BlogGridSection";
import { BlogPost } from "@/components/BlogLayout";
import AboutSection from "@/components/AboutSection";
import { getRecentPosts } from "@/lib/posts";
import { getMoreProjects } from "@/lib/projects";

export default async function PortfolioPage() {
  const recentPosts: BlogPost[] = await getRecentPosts(3);

  const rawProjects = await getMoreProjects(4);

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
  return (
    <main className="relative min-h-screen text-foreground">
      {/* 2. Your Page Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectGrid projects={formattedProjects} />
        <BlogGridSection posts={recentPosts} />
        {/* You can easily add more components here later: */}
        {/* <ProjectsSection /> */}
        <ContactSection />
      </div>
    </main>
  );
}
