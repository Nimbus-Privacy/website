'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui'
import { Container, Section } from '@/components/layout'

interface FeatureCardProps {
  title: string
  isActive: boolean
  onHover: () => void
  onClick: () => void
  image: string
}

function FeatureCard({ title, isActive, onHover, onClick, image }: FeatureCardProps) {
  return (
    <div>
      <div
        className={`p-6 rounded-lg cursor-pointer transition-all duration-300 backdrop-blur-sm border ${
          isActive
            ? 'bg-primary-500/15 border-primary-500 shadow-lg shadow-primary-500/20'
            : 'bg-black/20 border-transparent hover:bg-black/30'
        }`}
        onMouseEnter={onHover}
        onClick={onClick}
      >
        <p className="text-lg text-foreground leading-relaxed">
          {title}
        </p>
      </div>
      
      {isActive && (
        <div className="lg:hidden mt-6">
          <div className="relative w-full max-w-lg mx-auto aspect-[4/3]">
            <Image
              src={image}
              alt={title}
              width={600}
              height={450}
              className="w-full h-full object-contain transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      )}
    </div>
  )
}

const cards = [
  {
    id: 1,
    title: 'Centralize e gerencie todas as solicitações de dados pessoais em um único lugar.',
    image: '/images/sessions/card-1.png'
  },
  {
    id: 2,
    title: 'Garanta segurança com a autenticação da identidade do titular por meio de token validado.',
    image: '/images/sessions/card-2.png'
  },
  {
    id: 3,
    title: 'Acompanhe todas as solicitações com registros, relatórios completos e dashboards de desempenho.',
    image: '/images/sessions/card-3.png'
  },
  {
    id: 4,
    title: 'Comunique-se com o titular de dados de forma segura, eficiente e imediata através de e-mails integrados.',
    image: '/images/sessions/card-4.png'
  }
]

export default function PrivacyManagementSection() {
  const [activeCard, setActiveCard] = useState(1)

  return (
    <Section spacing="xl" background="card" className="bg-[#082040]">
      <Container size="xl" padding="md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          <div className="text-left">
            <h2 className="text-secondary-600 text-sm font-bold tracking-[5.2px] uppercase mb-6">
              PRIVACIDADE É PRIORIDADE
            </h2>
            <h3 className="text-4xl sm:text-5xl font-bold text-foreground">
              Gestão dos direitos dos titulares
            </h3>
          </div>

          <div className="text-left">
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Atender às solicitações dos titulares de dados não precisa ser um processo demorado e custoso.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Com a <span className="text-secondary-600 font-semibold">plataforma NPrivacy</span>, sua empresa automatiza esse atendimento, garantindo transparência, segurança e conformidade com a LGPD.
            </p>
            <Link href="/contato">
              <Button variant="outline-primary" size="lg">
                Testar plataforma
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="hidden lg:flex justify-start">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              {cards.map((card) => (
                <Image
                  key={card.id}
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={450}
                  className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-in-out ${
                    activeCard === card.id 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {cards.map((card) => (
              <FeatureCard
                key={card.id}
                title={card.title}
                isActive={activeCard === card.id}
                onHover={() => setActiveCard(card.id)}
                onClick={() => setActiveCard(card.id)}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}