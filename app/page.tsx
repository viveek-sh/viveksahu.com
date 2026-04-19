import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectGrid from "@/components/ProjectGridSection";
import ContactSection from "@/components/ContactSection";
import BlogGridSection from "@/components/BlogGridSection";
import { BlogPost } from "@/components/BlogLayout";
import AboutSection from "@/components/AboutSection";
import { getRecentPosts } from "@/lib/posts";

// import data from skills
import { TechStack, Projects } from "@/lib/data";

export default async function PortfolioPage() {
  const recentPosts: BlogPost[] = await getRecentPosts(3);
  console.log(">>> SSR RENDERING: Home Page");
  return (
    <main className="relative min-h-screen text-foreground">
      {/* 2. Your Page Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection stack={TechStack} />
        <ProjectGrid projects={Projects} />
        <BlogGridSection posts={recentPosts} />
        {/* You can easily add more components here later: */}
        {/* <ProjectsSection /> */}
        <ContactSection />
      </div>
    </main>
  );
}
