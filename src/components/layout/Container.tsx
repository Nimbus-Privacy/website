import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { ContainerProps } from '@/types'

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, size = 'lg', padding = 'md' }, ref) => {
    const sizeStyles = {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full'
    }

    const paddingStyles = {
      none: '',
      sm: 'px-4 py-2',
      md: 'px-6 py-4',
      lg: 'px-8 py-6',
      xl: 'px-12 py-8'
    }

    return (
      <div
        ref={ref}
        className={cn(
          'mx-auto w-full',
          sizeStyles[size],
          paddingStyles[padding],
          className
        )}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'

export default Container