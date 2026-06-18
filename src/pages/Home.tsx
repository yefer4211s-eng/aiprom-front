import HeroSection from '@/components/sections/HeroSection'
import CompanyOverviewSection from '@/components/sections/CompanyOverviewSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CompanyOverviewSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
