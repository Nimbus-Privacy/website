import Link from 'next/link'
import Button from '@/components/ui/Button'
import { Container, Section } from '@/components/layout'

export default function CTASection() {
  return (
    <Section spacing="xl" background="default" className="bg-[#051428]">
      <Container size="xl" padding="md">
        <div className="bg-[#0064be] rounded-lg p-12 text-left">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight max-w-xl">
            Sua empresa no controle, em toda situação.
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Atenda à LGPD com automação e suporte jurídico — tudo em um só lugar.
          </p>
          <Link href="/contato">
            <Button variant="white" size="lg" className="hover:text-[#0064be]">
              Comece agora
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  )
}