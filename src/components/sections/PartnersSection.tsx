'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Container, Section } from '@/components/layout'

const partnerLogos = [
  'AVALON EVOLUTIVE SCHOOL.png',
  'BLU365.png',
  'BOULEVARD SHOPPING BAURU.png',
  'BOULEVARD SHOPPING FEIRA DE SANTANA.png',
  'CAPODARTE.png',
  'CVC.png',
  'DI SANTINNI .png',
  'EASY HEALTH.png',
  'ESSENTIA PHARMA.png',
  'ESSENTIAL NUTRITION.png',
  'JOTA.png',
  'NOORSKIN.png',
  'OD DRIVE.png',
  'PAX AEROPORTOS.png',
  'PIER.png',
  'RECREIO SHOPPING.png',
  'SUNSTAR.png',
  'TECNISA.png',
  'TENCASA.png',
  'VENOSAN.png',
  'ZURICH AIRPORT BRASIL.png'
]

export default function PartnersSection() {
  const [isPaused, setIsPaused] = useState(false)

  const duplicatedLogos = [...partnerLogos, ...partnerLogos]

  return (
    <Section spacing="xl" background="card" className="bg-[#082040] overflow-hidden">
      <Container size="xl" padding="md">
        <div className="text-center mb-12">
          <h2 className="text-secondary-600 text-sm font-bold tracking-[5.2px] uppercase mb-6">
            QUEM CONFIA EM NÓS
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
            Confiança que se constrói com <span className="text-secondary-600">tecnologia</span> e <span className="text-secondary-600">estratégia</span>
          </h3>
        </div>
      </Container>

      <div 
        className="relative mt-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex overflow-hidden">
          <div 
            className={cn(
              "flex animate-scroll",
              isPaused && "[animation-play-state:paused]"
            )}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex-shrink-0 px-8"
              >
                <div className="w-48 h-24 relative flex items-center justify-center">
                  <Image
                    src={`/images/partners/${logo}`}
                    alt={logo.replace('.png', '')}
                    fill
                    className="object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                    sizes="(max-width: 768px) 150px, 192px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </Section>
  )
}