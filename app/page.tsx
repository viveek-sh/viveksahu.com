import DynamicBackground from "@/components/DynamicBackground";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen text-foreground">
      {/* 1. The Fixed Blurring Background */}
      <DynamicBackground />

      {/* 2. Your Page Content */}
      <div className="relative z-10">
        <HeroSection />
        <SkillsSection />

        {/* You can easily add more components here later: */}
        {/* <ProjectsSection /> */}
        {/* <ContactSection /> */}
      </div>
    </main>
  );
}
