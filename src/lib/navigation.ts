import { NavigationItem } from '@/types'

export const mainNavigation: NavigationItem[] = [
  {
    name: 'Soluções',
    href: '#solucoes',
    type: 'scroll'
  },
  {
    name: 'Sobre nós',
    href: '#sobre-nos',
    type: 'scroll'
  },
  {
    name: 'Planos',
    href: '/planos',
    type: 'link'
  },
  {
    name: 'FAQs',
    href: '/faqs',
    type: 'link'
  },
  {
    name: 'Contato',
    href: '/contato',
    type: 'link'
  }
]

export const footerNavigation = {
  company: [
    {
      name: 'Soluções',
      href: '/#solucoes',
      type: 'link' as const
    },
    {
      name: 'Sobre nós',
      href: '/#sobre-nos', 
      type: 'link' as const
    },
    {
      name: 'FAQs',
      href: '/faqs',
      type: 'link' as const
    },
    {
      name: 'Contato',
      href: '/contato',
      type: 'link' as const
    }
  ],
  resources: [
    {
      name: 'Consultoria',
      href: '/consultoria',
      type: 'link' as const
    },
    {
      name: 'Teste a plataforma',
      href: '/contato',
      type: 'link' as const
    },
    {
      name: 'Política de privacidade',
      href: '/politica-privacidade',
      type: 'link' as const
    },
    {
      name: 'Seus dados',
      href: 'javascript:void(0)',
      type: 'modal' as const,
      onClick: 'DLController.openModal()'
    }
  ]
}