'use client'

import { useState } from 'react'
import { Container, Section } from '@/components/layout'
import { DoubtSection } from '@/components/sections'

interface FAQItem {
  id: number
  question: string
  answer?: string
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'O que é a LGPD e para que serve?',
    answer: 'A Lei Geral de Proteção de Dados Pessoais (LGPD) é a legislação brasileira que regula o tratamento de dados pessoais por empresas, organizações e até mesmo por pessoas físicas. A lei visa proteger os direitos fundamentais de liberdade e privacidade, criando um padrão de boas práticas e segurança jurídica para pessoas e empresas, além de indicar direitos, obrigações e sanções em caso de descumprimento.'
  },
  {
    id: 2,
    question: 'Quem precisa estar em conformidade com a LGPD? O segmento de atuação ou porte influenciam?',
    answer: 'Hoje, a LGPD se aplica a qualquer pessoa ou empresa, pública ou privada, de qualquer porte ou setor, que trate dados pessoais no Brasil. Isso inclui desde grandes corporações até pequenas empresas, startups e profissionais autônomos. Estar em conformidade não é apenas uma exigência legal, também reforça a reputação, aumenta a confiança do mercado e ajuda a evitar multas e sanções.'
  },
  {
    id: 3,
    question: 'O que é um DPO e por que preciso nomear um?',
    answer: 'O DPO (Data Protection Officer), ou Encarregado de Proteção de Dados, é o profissional responsável por atuar como canal de comunicação entre sua empresa, os titulares de dados e a Autoridade Nacional de Proteção de Dados (ANPD). A necessidade pode variar conforme a estrutura e volume de dados tratados, mas contar com esse profissional (internamente ou como serviço terceirizado) é uma prática recomendada para manter a empresa em conformidade.'
  },
  {
    id: 4,
    question: 'Como a Nimbus Privacy ajuda minha empresa a reduzir riscos e custos com privacidade e proteção de dados pessoais?',
    answer: 'Combinamos tecnologia e consultoria jurídica especializada para ajudar sua empresa a cumprir a LGPD de forma prática e eficiente, com menos riscos e mais controle, através dos serviços de: Assessoria e consultoria jurídica em privacidade e proteção de dados pessoais; DPO as a service (Encarregado de Dados terceirizado); Plataforma de gestão de direitos dos titulares; Plataforma e barra de gestão de cookies e consentimentos. Nossa atuação cobre todas as frentes da conformidade, reduzindo passivos, otimizando processos e fortalecendo a segurança jurídica do seu negócio.'
  },
  {
    id: 5,
    question: 'É possível adequar minha empresa à LGPD sem interromper as operações?',
    answer: 'Sim. Nossa metodologia respeita o ritmo da sua empresa. Todas as etapas são planejadas para acontecer em paralelo com as suas rotinas operacionais, de forma prática e com o mínimo de impacto operacional.'
  },
  {
    id: 6,
    question: 'Por que escolher a Nimbus Privacy em vez de fazer tudo internamente?',
    answer: 'A adequação à LGPD exige conhecimento jurídico, técnico e de gestão de processos. Nossa equipe combina experiência jurídica, técnica e tecnologia proprietária, oferecendo uma solução completa: plataforma, consultoria e suporte contínuo. Isso evita sobrecarga interna, garante maior segurança no atendimento à lei e libera a equipe para focar nas operações da empresa.'
  },
  {
    id: 7,
    question: 'É obrigatório ter um canal para atender os titulares de dados?',
    answer: 'Sim. A LGPD exige que as empresas disponibilizem um canal claro e eficiente para que os titulares exerçam seus direitos. Mas não basta ter qualquer canal, pois e-mails genéricos ou processos manuais podem atrasar respostas e expor sua empresa a riscos. Nossa plataforma resolve isso de forma prática: centraliza os pedidos, garante registros auditáveis e mantém tudo em conformidade. Com isso, você evita falhas, reduz custos e oferece um atendimento mais ágil e confiável.'
  },
  {
    id: 8,
    question: 'Por que devo optar pela barra de cookies da Nimbus Privacy?',
    answer: 'Porque avisos genéricos não bastam. A LGPD exige que os sites informem com clareza quais dados estão sendo coletados e permitam que o visitante escolha o que autoriza, com registro e gestão desse consentimento. A barra de cookies NPrivacy cumpre esse papel: fácil de instalar, personalizável e integrada à nossa plataforma, ela automatiza todo o processo. Isso garante conformidade, mais transparência para o usuário e elimina o retrabalho com soluções temporárias.'
  }
]

function FAQCard({ item, isOpen, onToggle }: { 
  item: FAQItem
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

export default function FAQsPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <>
      <Section spacing="lg" background="default">
        <Container size="lg">
          <div className="text-center max-w-4xl mx-auto pt-12 pb-8">
            <h2 className="text-secondary-600 text-sm font-bold tracking-[5.2px] uppercase mb-6">
              PERGUNTAS FREQUENTES
            </h2>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
              Tire suas dúvidas sobre <span className="text-secondary-600">privacidade e proteção de dados</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
              Respostas claras e diretas para as principais questões sobre LGPD, conformidade e como a Nimbus Privacy pode ajudar sua empresa.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="sm" background="default">
        <Container size="xl" padding="md">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <FAQCard
                key={item.id}
                item={item}
                isOpen={openItems.includes(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </Container>
      </Section>

      <DoubtSection />
    </>
  )
}