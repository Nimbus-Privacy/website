import Link from 'next/link'
import { Button, AnimatedBackground } from '@/components/ui'
import { Container, Section } from '@/components/layout'

export default function HeroSection() {
  return (
    <Section spacing="none" background="default" className="min-h-screen flex items-center relative overflow-hidden">
      <AnimatedBackground />
      <Container size="xl" padding="md" className="relative z-10">
        <div className="text-left max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Sua empresa sempre no controle dos dados pessoais
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl">
            O melhor da tecnologia e consultoria jurídica especializada
            para simplificar a privacidade e a governança de dados.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4 sm:gap-x-6">
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Saiba mais
            </Button>
            <Link href="/contato" className="w-full sm:w-auto">
              <Button variant="outline-primary" size="lg" className="w-full sm:w-auto">
                Fale conosco
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}