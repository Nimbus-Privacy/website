'use client'

import { useState } from 'react'
import { Container, Section } from '@/components/layout'

interface SolutionItem {
  id: number
  question: string
  answer?: string
}

const solutions: SolutionItem[] = [
  {
    id: 1,
    question: 'Sua equipe ainda perde tempo com tarefas manuais na gestão de dados?',
    answer: 'Nossa plataforma automatiza processos operacionais e facilita a rotina, com uma interface simples, acessível e segura.'
  },
  {
    id: 2,
    question: 'É difícil acompanhar todas as exigências da LGPD, GDPR e outras normas?',
    answer: 'Nosso time jurídico acompanha as atualizações da legislação e transforma a complexidade das normas em orientações práticas e aplicáveis à sua realidade. Com a consultoria e tecnologia da Nimbus Privacy, sua empresa se mantém atualizada e protegida.'
  },
  {
    id: 3,
    question: 'Sua empresa precisa de suporte jurídico confiável e acessível?',
    answer: 'Oferecemos consultoria jurídica especializada em proteção de dados, com linguagem clara, foco em resultados e planos flexíveis. Você conta com apoio contínuo para prevenir riscos e tomar decisões mais seguras.'
  },
  {
    id: 4,
    question: 'Você sente que a privacidade ainda não é um diferencial estratégico no seu negócio?',
    answer: 'A privacidade é muito mais do que obrigação legal — é uma vantagem competitiva. Fortalecemos a reputação da sua marca com práticas que demonstram respeito ao cliente, transparência e segurança no uso dos dados.'
  },
  {
    id: 5,
    question: 'Sua empresa possui um Encarregado de Dados qualificado e atuante?',
    answer: 'Com o serviço de DPO as a Service da Nimbus Privacy, sua empresa atende à exigência da LGPD com profissionais experientes e prontos para representar sua organização frente à ANPD e aos titulares de dados.'
  },
  {
    id: 6,
    question: 'Você ainda utiliza avisos como "Ao continuar, você concorda com o uso de cookies..."?',
    answer: 'Nossa plataforma oferece soluções modernas de gestão de cookies, com coleta de consentimento alinhada à legislação e registro de logs de auditoria. Mais transparência, mais confiança e menos risco.'
  },
  {
    id: 7,
    question: 'Sua solução atual complica mais do que resolve?',
    answer: 'Na Nimbus Privacy, simplificar é parte da nossa missão. Nossa plataforma é intuitiva, personalizável e feita para reduzir o esforço da sua equipe. Levamos a conformidade com seriedade — mas sem burocracia.'
  },
  {
    id: 8,
    question: 'Por que minha empresa precisa estar em conformidade com a LGPD?',
    answer: 'A LGPD é obrigatória para qualquer organização que trate dados pessoais no Brasil. A não conformidade pode resultar em sanções como multas, advertências, bloqueio de dados e prejuízos reputacionais. Estar em dia com a lei também melhora a confiança de clientes, parceiros e investidores.'
  }
]

function SolutionCard({ item, isOpen, onToggle }: { 
  item: SolutionItem
  isOpen: boolean
  onToggle: () => void 
}) {
  return (
    <div className={`border rounded-lg bg-card transition-all duration-300 ${isOpen ? 'border-secondary-600' : 'border-border'}`}>
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-card/80 transition-colors rounded-lg"
      >
        <h4 className="text-lg font-semibold text-card-foreground pr-4">
          {item.question}
        </h4>
        <div className={`transition-all duration-300 ${isOpen ? 'rotate-90' : ''}`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={isOpen ? 'text-secondary-600' : 'text-primary-500'}
          >
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      
      {isOpen && item.answer && (
        <div className="px-6 pb-6">
          <div className="pt-4 border-t border-border/30 mt-2">
            <p className="text-base text-muted-foreground leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function FrequentSolutionsSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <Section spacing="xl" background="default">
      <Container size="xl" padding="md">
        <div className="text-center mb-16">
          <h2 className="text-secondary-600 text-sm font-bold tracking-[5.2px] uppercase mb-6">
            SOLUÇÕES FREQUENTES
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-foreground">
            Como podemos ajudar a <span className="text-secondary-600">sua empresa</span>
          </h3>
        </div>

        <div className="space-y-4">
          {solutions.map((item) => (
            <SolutionCard
              key={item.id}
              item={item}
              isOpen={openItems.includes(item.id)}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}