export interface BaseProps {
  className?: string
  children?: React.ReactNode
}

export interface ButtonProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'white' | 'outline' | 'outline-primary' | 'outline-secondary' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
}

export interface InputProps extends BaseProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  placeholder?: string
  value?: string
  defaultValue?: string
  disabled?: boolean
  required?: boolean
  error?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
}

export interface CardProps extends BaseProps {
  variant?: 'default' | 'outlined' | 'filled'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export interface ModalProps extends BaseProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
}

export interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

export interface SectionProps {
  children: React.ReactNode
  className?: string
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  background?: 'default' | 'muted' | 'card'
  as?: 'section' | 'div' | 'article' | 'aside'
  id?: string
}

export interface GridProps {
  children: React.ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4 | 6 | 12
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  responsive?: boolean
}

export interface HeaderProps {
  children?: React.ReactNode
  className?: string
  sticky?: boolean
}

export interface FooterProps {
  children?: React.ReactNode
  className?: string
  variant?: 'default' | 'minimal'
}

export interface LayoutProps {
  children: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export interface NavigationItem {
  name: string
  href: string
  type: 'link' | 'scroll' | 'external' | 'modal'
  target?: '_blank' | '_self'
  onClick?: string
}

export interface NavigationMenuProps {
  items: NavigationItem[]
  className?: string
  variant?: 'horizontal' | 'vertical' | 'mobile'
  onItemClick?: (item: NavigationItem) => void
}

export type SpacingSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'
export type NavigationPosition = 'header' | 'footer' | 'sidebar'