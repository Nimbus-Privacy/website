import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { GridProps } from '@/types'

const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ children, className, cols = 1, gap = 'md', responsive = true }, ref) => {
    const colsStyles = {
      1: 'grid-cols-1',
      2: responsive ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2',
      3: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3',
      4: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-4',
      6: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6' : 'grid-cols-6',
      12: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-12' : 'grid-cols-12'
    }

    const gapStyles = {
      none: 'gap-0',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8'
    }

    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          colsStyles[cols],
          gapStyles[gap],
          className
        )}
      >
        {children}
      </div>
    )
  }
)

Grid.displayName = 'Grid'

export default Grid