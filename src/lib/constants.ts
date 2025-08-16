export const APP_CONFIG = {
  name: 'Nimbus Privacy',
  description: 'Your privacy-focused platform',
  version: '1.0.0',
  author: 'Nimbus Privacy Team',
  repository: 'https://github.com/nimbus-privacy/nimbus-privacy',
} as const

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  PRIVACY: '/privacy',
  TERMS: '/terms',
} as const

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const