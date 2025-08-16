import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { SectionProps } from '@/types'

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, className, spacing = 'md', background = 'default', as = 'section', id }, ref) => {
    const Component = as

    const spacingStyles = {
      none: '',
      sm: 'py-8',
      md: 'py-12',
      lg: 'py-16',
      xl: 'py-24'
    }

    const backgroundStyles = {
      default: 'bg-background',
      muted: 'bg-muted',
      card: 'bg-card'
    }

    return (
      <Component
        ref={ref}
        id={id}
        className={cn(
          'w-full',
          spacingStyles[spacing],
          backgroundStyles[background],
          className
        )}
      >
        {children}
      </Component>
    )
  }
)

Section.displayName = 'Section'

export default Section