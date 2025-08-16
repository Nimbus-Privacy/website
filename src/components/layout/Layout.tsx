import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { LayoutProps } from '@/types'
import { MobileNavigation } from '@/components/ui'
import { mainNavigation } from '@/lib/navigation'

const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  ({ children, header, footer, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('min-h-screen flex flex-col', className)}
      >
        {header}
        <main className="flex-1">
          {children}
        </main>
        {footer}
        <MobileNavigation items={mainNavigation} />
      </div>
    )
  }
)

Layout.displayName = 'Layout'

export default Layout