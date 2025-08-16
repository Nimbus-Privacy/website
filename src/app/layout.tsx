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
      </body>
    </html>
  );
}
