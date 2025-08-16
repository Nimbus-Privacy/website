'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/layout'

interface ServiceCardProps {
  title: string
  description: string
}

function ServiceCard({ title, description, index }: ServiceCardProps & { index: number }) {
  return (
    <motion.div 
      className="p-8 rounded-lg cursor-pointer transition-all duration-300 backdrop-blur-sm border bg-black/20 border-transparent hover:bg-primary-500/15 hover:border-primary-500 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mb-6">
        <div className="inline-flex items-center space-x-2 text-secondary-600 text-xs font-medium mb-3">
          <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
          <span>SOLUÇÃO</span>
        </div>
        <h4 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary-400 transition-colors">
          {title}
        </h4>
      </div>
      
      <div className="relative pl-6">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500/30 to-transparent rounded-full"></div>
        <p className="text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

const services = [
  {
    id: 1,
    title: 'Automação no atendimento aos direitos dos titulares',
    description: 'Atenda solicitações de acesso, exclusão e correção de dados de forma rápida e eficiente, garantindo total conformidade.'
  },
  {
    id: 2,
    title: 'Gestão de cookies e consentimento',
    description: 'Detecte e gerencie cookies automaticamente, implemente banners personalizados e mantenha registros seguros de consentimento.'
  },
  {
    id: 3,
    title: 'Análise de contratos e políticas de privacidade',
    description: 'Revisamos e ajustamos documentos para garantir que sua empresa esteja blindada contra riscos jurídicos.'
  },
  {
    id: 4,
    title: 'Treinamentos, workshops e guia de boas práticas',
    description: 'Capacitamos sua equipe para aplicar as melhores práticas em privacidade e proteção de dados.'
  }
]

export default function TechnologyConsultingSection() {
  return (
    <Section spacing="xl" background="default" className="bg-[#051428]">
      <Container size="xl" padding="md">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-secondary-600 text-sm font-bold tracking-[5.2px] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            TECNOLOGIA + CONSULTORIA
          </motion.h2>
          <motion.h3 
            className="text-4xl sm:text-5xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Privacidade simplificada <span className="text-secondary-600">na prática</span>
          </motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}