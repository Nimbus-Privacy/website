'use client'

import { useEffect } from 'react'
import { HeroSection, ComplianceSection, PrivacyManagementSection, TechnologyConsultingSection, AboutUsSection, PartnersSection, WhyNimbusSection, CTASection } from '@/components/sections'

export default function Home() {

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            })
          }
        }, 100)
      }
    }

    handleHashScroll()

    window.addEventListener('hashchange', handleHashScroll)
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll)
    }
  }, [])

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
