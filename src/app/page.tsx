import { ColaboratorsSection } from './sections/colaborators-section'
import { CommunitySection } from './sections/commutity-section'
import { HeroSection } from './sections/hero-section'
import { ProjectsSection } from './sections/projects-section'
import { Sponsorsection } from './sections/sponsor-section'
import { TestimonialsSection } from './sections/testimonials-section'

export default function DiscordLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0A0B1E] to-black">
      <HeroSection />
      <CommunitySection />
      <ColaboratorsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <Sponsorsection />
    </div>
  )
}
