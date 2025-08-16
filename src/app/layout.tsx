import type { Metadata } from "next";
import "./globals.css";
import { Layout, Header, Footer } from '@/components/layout'

export const metadata: Metadata = {
  title: "Nimbus Privacy",
  description: "Sua privacidade é nossa prioridade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
      </head>
      <body className="antialiased">
        <Layout
          header={<Header sticky />}
          footer={<Footer />}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
