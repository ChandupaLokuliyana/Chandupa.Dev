// app/page.tsx
import HeroSection from '@/components/ui/HeroSection'
import ProjectsSection from '@/components/ui/ProjectSection'
import AboutMeSection from '@/components/ui/AboutMeSection'
import LeadershipSection from '@/components/ui/LeaderShipSection'
import SkillsSection from '@/components/ui/SkillSection'
import ContactSection from '@/components/ui/ContactSection'

// This is the main entry point for the Next.js application.
export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutMeSection />
      <LeadershipSection />
      <SkillsSection />
      <ContactSection />
      {/* Other sections will go below */}
    </>
  )
}
