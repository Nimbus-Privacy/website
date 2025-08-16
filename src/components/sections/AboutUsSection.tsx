import Link from 'next/link'
import { Container, Section } from '@/components/layout'

export default function AboutUsSection() {
  return (
    <Section spacing="xl" background="card" className="bg-[#082040]" id="sobre-nos">
      <Container size="xl" padding="md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="text-left">
            <h2 className="text-secondary-600 text-sm font-bold tracking-[5.2px] uppercase mb-6">
              SOBRE NÓS
            </h2>
            <h3 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight max-w-lg">
              Nossa história, <span className="text-secondary-600">seu futuro</span> em privacidade
            </h3>
            
            <div className="flex items-center space-x-4">
              <Link 
                href="https://www.instagram.com/nimbusprivacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-600 focus:ring-offset-2 focus:ring-offset-background rounded group"
                aria-label="Instagram"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 transition-colors"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="currentColor"
                    className="group-hover:fill-secondary-600 transition-colors"
                  />
                </svg>
              </Link>
              <Link 
                href="https://www.linkedin.com/company/nimbusprivacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-600 focus:ring-offset-2 focus:ring-offset-background rounded group"
                aria-label="LinkedIn"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 transition-colors"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    fill="currentColor"
                    className="group-hover:fill-secondary-600 transition-colors"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-left space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              A Nimbus Privacy nasceu da união entre advogados especializados em proteção de dados e uma equipe de tecnologia com visão de futuro.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Desde 2019, construímos juntos uma solução que vai além do cumprimento da lei: criamos um caminho real para que empresas ganhem controle, agilidade e confiança na gestão dos dados pessoais.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Acreditamos que <span className="text-secondary-600 font-semibold">privacidade não precisa ser burocrática</span> – ela pode ser simples, eficiente e estratégica.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}