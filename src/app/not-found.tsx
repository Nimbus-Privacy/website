import Link from 'next/link'
import { Container, Section } from '@/components/layout'
import { Button } from '@/components/ui'

export default function NotFound() {
  return (
    <>
      <Section spacing="xl" background="default">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto pt-20 pb-16">
            <div className="mb-8">
              <h1 className="text-8xl sm:text-9xl font-bold text-primary-500 leading-none">
                404
              </h1>
            </div>

            <div className="space-y-6 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Página não encontrada
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ops! Parece que a página que você está procurando não existe ou foi movida.<br />
                Que tal voltar ao início e explorar nossas soluções de privacidade?
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/">
                <Button variant="primary" size="lg">
                  Voltar ao início
                </Button>
              </Link>
              
              <Link href="/contato">
                <Button variant="outline-secondary" size="lg">
                  Entre em contato
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}