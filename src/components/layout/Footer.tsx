'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { FooterProps } from '@/types'
import { footerNavigation } from '@/lib/navigation'
import Container from './Container'

type WindowWithDLController = Window & {
  DLController?: {
    openModal?: () => void
  }
}

const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ children, className, variant = 'default' }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(
          'w-full bg-[#082040]',
          variant === 'minimal' ? 'py-8' : 'py-16',
          className
        )}
      >
        <Container size="xl" padding="md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6 lg:gap-4">
            <div className="md:col-span-2 lg:col-span-2 space-y-6">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logos/logo-header.svg"
                  alt="Nimbus Privacy"
                  width={120}
                  height={29}
                  className="h-7 w-auto"
                />
              </Link>

              <div className="space-y-4 text-sm text-white/80">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="leading-relaxed">
                    Rod. José Carlos Daux, 500, Torre II, Sala 702<br />
                    João Paulo, Florianópolis, Santa Catarina<br />
                    CEP 88030-000
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <Link 
                      href="mailto:contato@nimbusprivacy.com.br"
                      className="hover:text-secondary-600 transition-colors"
                    >
                      contato@nimbusprivacy.com.br
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <Link 
                      href="tel:+5548319749000"
                      className="hover:text-secondary-600 transition-colors"
                    >
                      +55 48 3197-4900
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Link
                  href="https://www.instagram.com/nimbusprivacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <Image
                    src="/images/icons/ig-icon.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/nimbusprivacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/images/icons/in-icon.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </Link>
              </div>

            </div>

            <div className="md:hidden grid grid-cols-2 gap-8">
                <div className="space-y-4">
                <h4 className="text-base font-semibold text-white">
                  Principal
                </h4>
                <nav className="space-y-2">
                  {footerNavigation.company.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-sm text-white/70 hover:text-secondary-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

                <div className="space-y-4">
                <h4 className="text-base font-semibold text-white">
                  Recursos
                </h4>
                <nav className="space-y-2">
                  {footerNavigation.resources.map((item) => (
                    item.type === 'modal' ? (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          if (typeof window !== 'undefined') {
                            const tryOpenModal = (attempts = 0) => {
                              if (attempts > 10) {
                                console.log('DLController não carregou após várias tentativas');
                                return;
                              }
                              
                              const windowWithDL = window as WindowWithDLController
                              if (windowWithDL.DLController && typeof windowWithDL.DLController.openModal === 'function') {
                                try {
                                  windowWithDL.DLController.openModal();
                                } catch (error) {
                                  console.error('Erro ao abrir modal:', error);
                                }
                              } else {
                                setTimeout(() => tryOpenModal(attempts + 1), 200);
                              }
                            };
                            
                            tryOpenModal();
                          }
                        }}
                        className="block text-sm text-white/70 hover:text-secondary-600 transition-colors cursor-pointer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-sm text-white/70 hover:text-secondary-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </nav>
              </div>
            </div>

            <div className="md:hidden flex justify-center">
              <div className="text-center">
                <h4 className="text-base font-semibold text-white mb-3">
                  Selos
                </h4>
                <Image
                  src="/images/logos/badge.png"
                  alt="Certificação"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
            </div>

            <div className="hidden md:block space-y-6">
              <h4 className="text-base font-semibold text-white">
                Principal
              </h4>
              <nav className="space-y-3">
                {footerNavigation.company.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-sm text-white/70 hover:text-secondary-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="hidden md:block space-y-6">
              <h4 className="text-base font-semibold text-white">
                Recursos
              </h4>
              <nav className="space-y-3">
                {footerNavigation.resources.map((item) => (
                  item.type === 'modal' ? (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== 'undefined') {
                          // Função para tentar abrir o modal com retry
                          const tryOpenModal = (attempts = 0) => {
                            if (attempts > 10) {
                              console.log('DLController não carregou após várias tentativas');
                              return;
                            }
                            
                            const windowWithDL = window as WindowWithDLController
                            if (windowWithDL.DLController && typeof windowWithDL.DLController.openModal === 'function') {
                              try {
                                windowWithDL.DLController.openModal();
                              } catch (error) {
                                console.error('Erro ao abrir modal:', error);
                              }
                            } else {
                              setTimeout(() => tryOpenModal(attempts + 1), 200);
                            }
                          };
                          
                          tryOpenModal();
                        }
                      }}
                      className="block text-sm text-white/70 hover:text-secondary-600 transition-colors cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-sm text-white/70 hover:text-secondary-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </nav>
            </div>

            <div className="hidden md:block space-y-6">
              <h4 className="text-base font-semibold text-white">
                Selos
              </h4>
              <div>
                <Image
                  src="/images/logos/badge.png"
                  alt="Certificação"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-center text-sm text-white/60">
              2025 © Nimbus Privacy · Todos os direitos reservados
            </p>
          </div>

          {children}
        </Container>
      </footer>
    )
  }
)

Footer.displayName = 'Footer'

export default Footer