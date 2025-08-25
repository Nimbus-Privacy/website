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
                    <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <Link 
                      href="https://wa.me/554830363038"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-secondary-600 transition-colors"
                    >
                      +55 48 3036-3038
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