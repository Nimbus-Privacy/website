import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { ButtonProps } from '@/types'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className,
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    children,
    ...props 
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      primary: 'bg-primary-500 text-white border-2 border-primary-500 hover:bg-primary-600 hover:border-primary-600',
      secondary: 'bg-secondary-600 text-white border-2 border-secondary-600 hover:bg-secondary-700 hover:border-secondary-700',
      white: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-500',
      outline: 'border-2 border-border bg-transparent text-white hover:bg-muted',
      'outline-primary': 'border-2 border-primary-500 bg-transparent text-white hover:bg-primary-500 hover:text-white',
      'outline-secondary': 'border-2 border-secondary-600 bg-transparent text-white hover:bg-secondary-600 hover:text-white',
      ghost: 'bg-transparent text-white hover:bg-muted',
      destructive: 'bg-destructive text-white border-2 border-destructive hover:bg-error-700 hover:border-error-700'
    }
    
    const sizes = {
      sm: 'px-6 py-1 text-sm',
      md: 'px-10 py-1.5 text-sm',
      lg: 'px-12 py-2 text-base'
    }
    
    const borderRadius = 'rounded-[14px]'
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          borderRadius,
          loading && 'cursor-wait',
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button