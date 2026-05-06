import { AmbientBackground } from "@/components/shared/ambient-background";
import { SiteHeader } from "@/components/layout/site-header";
import { navItems } from "@/data/portfolio";
import { AboutSection } from "@/sections/about-section";
import { AchievementsSection } from "@/sections/achievements-section";
import { ContactSection } from "@/sections/contact-section";
import { ExperienceSection } from "@/sections/experience-section";
import { HeroSection } from "@/sections/hero-section";
import { HobbiesSection } from "@/sections/hobbies-section";
import { ProjectsSection } from "@/sections/projects-section";
import { PublicationsSection } from "@/sections/publications-section";

export default function HomePage() {
  return (
    <>
      <AmbientBackground />
      <SiteHeader navItems={navItems} />
      <main className="relative overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <PublicationsSection />
        <HobbiesSection />
        <ContactSection />
      </main>
    </>
  );
}
