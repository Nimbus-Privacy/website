import dynamic from 'next/dynamic'
import { HeroSection, ComplianceSection } from '@/components/sections'

const PrivacyManagementSection = dynamic(() => import('@/components/sections/PrivacyManagementSection'), {
  loading: () => <div className="h-96" />
})

const TechnologyConsultingSection = dynamic(() => import('@/components/sections/TechnologyConsultingSection'), {
  loading: () => <div className="h-96" />
})

const AboutUsSection = dynamic(() => import('@/components/sections/AboutUsSection'), {
  loading: () => <div className="h-96" />
})

const PartnersSection = dynamic(() => import('@/components/sections/PartnersSection'), {
  loading: () => <div className="h-96" />
})

const WhyNimbusSection = dynamic(() => import('@/components/sections/WhyNimbusSection'), {
  loading: () => <div className="h-96" />
})

const CTASection = dynamic(() => import('@/components/sections/CTASection'), {
  loading: () => <div className="h-96" />
})

export default function Home() {
  return (
    <>
      <HeroSection />
      <ComplianceSection />
      <PrivacyManagementSection />
      <TechnologyConsultingSection />
      <AboutUsSection />
      <PartnersSection />
      <WhyNimbusSection />
      <CTASection />
    </>
  )
}
