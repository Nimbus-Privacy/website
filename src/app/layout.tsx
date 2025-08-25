import type { Metadata } from "next";
import "./globals.css";
import { Layout, Header, Footer } from '@/components/layout'
import { WhatsAppFloat } from '@/components/ui'

export const metadata: Metadata = {
  title: "Nimbus Privacy - Consultoria em LGPD e Proteção de Dados",
  description: "Especialistas em conformidade LGPD, privacidade e governança de dados. Tecnologia e consultoria jurídica para proteger dados pessoais da sua empresa.",
  keywords: "LGPD, proteção de dados, privacidade, compliance, governança de dados, consultoria LGPD, adequação LGPD, segurança da informação",
  authors: [{ name: "Nimbus Privacy" }],
  creator: "Nimbus Privacy",
  publisher: "Nimbus Privacy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nimbusprivacy.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Nimbus Privacy - Consultoria em LGPD e Proteção de Dados",
    description: "Especialistas em conformidade LGPD, privacidade e governança de dados. Tecnologia e consultoria jurídica para proteger dados pessoais da sua empresa.",
    url: 'https://nimbusprivacy.com.br',
    siteName: 'Nimbus Privacy',
    images: [
      {
        url: '/images/logos/logo-header.svg',
        width: 1200,
        height: 630,
        alt: 'Nimbus Privacy - Proteção de Dados',
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nimbus Privacy - Consultoria em LGPD e Proteção de Dados",
    description: "Especialistas em conformidade LGPD, privacidade e governança de dados.",
    images: ['/images/logos/logo-header.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
    other: {
      me: ['contato@nimbusprivacy.com.br'],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nimbus Privacy',
    alternateName: 'Nimbus Privacy Consultoria',
    url: 'https://nimbusprivacy.com.br',
    logo: 'https://nimbusprivacy.com.br/images/logos/logo-header.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-48-3036-3038',
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rod. José Carlos Daux, 500, Torre II, Sala 702',
      addressLocality: 'Florianópolis',
      addressRegion: 'SC',
      postalCode: '88030-000',
      addressCountry: 'BR',
    },
    sameAs: [
      'https://www.instagram.com/nimbusprivacy',
      'https://www.linkedin.com/company/nimbusprivacy',
    ],
    description: 'Especialistas em conformidade LGPD, privacidade e governança de dados. Tecnologia e consultoria jurídica para proteger dados pessoais da sua empresa.',
  }

  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preload"
          href="/fonts/FunnelSans-VariableFont_wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/STATIC/FunnelSans-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="text/javascript"
          src="//api.dadoslegais.com/api/sdk/js?id=61"
          async
        ></script>
      </head>
      <body className="antialiased">
        <Layout
          header={<Header sticky />}
          footer={<Footer />}
        >
          {children}
        </Layout>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
