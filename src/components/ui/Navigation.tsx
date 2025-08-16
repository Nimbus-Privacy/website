'use client'

import { forwardRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NavigationMenuProps, NavigationItem } from '@/types'

const Navigation = forwardRef<HTMLElement, NavigationMenuProps>(
  ({ items, className, variant = 'horizontal', onItemClick }, ref) => {
    const router = useRouter()
    const pathname = usePathname()
    const [mounted, setMounted] = useState(false)
    const [currentHash, setCurrentHash] = useState('')
    
    useEffect(() => {
      setMounted(true)
      
      if (typeof window !== 'undefined') {
        setCurrentHash(window.location.hash)
      }
      
      const handleHashChange = () => {
        if (typeof window !== 'undefined') {
          setCurrentHash(window.location.hash)
        }
      }
      
      window.addEventListener('hashchange', handleHashChange)
      
      return () => {
        window.removeEventListener('hashchange', handleHashChange)
      }
    }, [])
    
    const handleItemClick = (item: NavigationItem, e: React.MouseEvent) => {
      if (item.type === 'scroll') {
        e.preventDefault()
        
        if (pathname === '/') {
          window.history.pushState(null, '', item.href)
          setCurrentHash(item.href)
          
          const element = document.querySelector(item.href)
          if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            })
          }
        } else {
          router.push(`/${item.href}`)
        }
      }
      onItemClick?.(item)
    }

    const baseStyles = 'flex gap-1'
    const variantStyles = {
      horizontal: 'flex-row items-center space-x-6',
      vertical: 'flex-col items-start space-y-4',
      mobile: 'flex-col items-start space-y-4 w-full'
    }

    const linkStyles = {
      horizontal: 'text-base font-medium transition-colors px-3 py-2 rounded-md',
      vertical: 'text-base font-medium transition-colors',
      mobile: 'text-base font-medium hover:text-secondary-600 hover:bg-secondary-600/10 transition-all w-full px-3 py-3 rounded-lg active:bg-secondary-600/20'
    }
    
    const isActive = (item: NavigationItem) => {
      if (!mounted) {
        return false
      }
      
      if (item.type === 'link') {
        return pathname === item.href
      }
      
      if (item.type === 'scroll' && pathname === '/') {
        return currentHash === item.href
      }
      
      return false
    }

    return (
      <nav
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          className
        )}
      >
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target={item.target}
            onClick={(e) => handleItemClick(item, e)}
            className={cn(
              linkStyles[variant],
              variant === 'horizontal' && 'text-muted-foreground hover:text-secondary-600',
              variant === 'vertical' && 'text-muted-foreground hover:text-secondary-600',
              variant === 'mobile' && 'text-white',
              mounted && isActive(item) && variant === 'horizontal' && 'text-secondary-600 hover:text-secondary-600',
              mounted && isActive(item) && variant === 'vertical' && 'text-secondary-600',
              mounted && isActive(item) && variant === 'mobile' && 'text-secondary-600'
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    )
  }
)

Navigation.displayName = 'Navigation'

export default Navigation