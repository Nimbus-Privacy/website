'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NavigationItem } from '@/types'
import Button from './Button'

interface MobileNavigationProps {
  items: NavigationItem[]
  className?: string
}

export default function MobileNavigation({ items, className }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const handleNavigation = (item: NavigationItem, e: React.MouseEvent) => {
    if (item.type === 'scroll') {
      e.preventDefault()
      closeMenu()
      
      if (pathname === '/') {
        setTimeout(() => {
          const element = document.querySelector(item.href)
          if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            })
          }
        }, 300)
      } else {
        router.push(`/${item.href}`)
      }
    } else {
      closeMenu()
    }
  }

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '0px'
    } else {
      document.body.style.overflow = originalStyle
      document.body.style.paddingRight = ''
    }

    return () => {
      document.body.style.overflow = originalStyle
      document.body.style.paddingRight = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && isOpen) {
        closeMenu()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  return (
    <>
      <button
        onClick={toggleMenu}
        className={cn(
          'xl:hidden fixed z-[60] p-3',
          'flex flex-col justify-center items-center',
          'bg-background/80 backdrop-blur-sm hover:bg-background/90 rounded-xl',
          'focus:outline-none transition-all duration-200',
          'shadow-xl border border-secondary-600/20',
          className
        )}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 60,
          width: '48px',
          height: '48px'
        }}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <span
            className={cn(
              'block h-0.5 w-full bg-white transition-all duration-300 ease-out transform-gpu',
              isOpen ? 'rotate-45 translate-y-2' : ''
            )}
          />
          <span
            className={cn(
              'block h-0.5 w-full bg-white transition-all duration-300 ease-out',
              isOpen ? 'opacity-0' : ''
            )}
          />
          <span
            className={cn(
              'block h-0.5 w-full bg-white transition-all duration-300 ease-out transform-gpu',
              isOpen ? '-rotate-45 -translate-y-2' : ''
            )}
          />
        </div>
      </button>

      <div 
        className={cn(
          'fixed inset-0 bg-black/50 z-40 xl:hidden transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        className={cn(
          'fixed top-0 right-0 z-50 xl:hidden',
          'w-full max-w-[85vw] sm:max-w-sm bg-background shadow-2xl',
          'transform transition-transform duration-300 ease-out',
          'h-screen max-h-screen overflow-hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        style={{ 
          height: '100dvh',
          maxHeight: '100dvh',
          width: '100vw',
          maxWidth: 'min(85vw, 384px)'
        }}
      >
        <div className="flex flex-col h-full min-h-0">
          <div className="flex-shrink-0 flex items-center justify-start px-6 py-5 border-b border-border/20">
            <Link href="/" onClick={closeMenu} className="block">
              <Image
                src="/images/logos/logo-header.svg"
                alt="Nimbus Privacy"
                width={130}
                height={30}
                className="h-7"
                style={{ width: 'auto' }}
                priority
              />
            </Link>
          </div>

          <div className="flex-1 overflow-y-auto py-4 min-h-0">
            <nav className="px-6">
              <div className="space-y-1">
                {items.map((item) => (
                  item.type === 'scroll' ? (
                    <button
                      key={item.name}
                      onClick={(e) => handleNavigation(item, e)}
                      className="block w-full text-left px-0 py-2.5 text-base font-medium text-white hover:text-secondary-600 transition-all duration-200"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      target={item.target}
                      onClick={closeMenu}
                      className="block px-0 py-2.5 text-base font-medium text-white hover:text-secondary-600 transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
            </nav>
          </div>

          <div className="flex-shrink-0 px-6 pb-5 pt-4 border-t border-border/20">
            <div>
              <Link href="/contato" onClick={closeMenu}>
                <Button 
                  variant="outline-secondary" 
                  size="lg" 
                  className="w-full justify-center py-3 text-sm font-semibold"
                >
                  Comece agora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}