# Nimbus Privacy - Website

Site institucional da Nimbus Privacy, especializada em conformidade com LGPD e proteção de dados.

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+ instalado
- NPM ou Yarn

### Instalação

1. **Clone o repositório**
```bash
git clone [url-do-repositorio]
cd nimbus-privacy
```

2. **Instale as dependências**
```bash
cd nimbus-privacy
npm install
```

3. **Configure as variáveis de ambiente**

Copie o arquivo `.env.example` para `.env.local`:
```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas credenciais:
```env
RESEND_API_KEY=sua_chave_api_resend
EMAIL_FROM=seu_email_remetente@dominio.com
EMAIL_TO=email_destino@dominio.com
```

> **Nota:** Para obter uma chave API do Resend, acesse [resend.com](https://resend.com)

4. **Rode o servidor de desenvolvimento**
```bash
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

## 📦 Deploy na Vercel

### Opção 1: Deploy Automático (Recomendado)

1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub
2. Clique em "Add New Project"
3. Importe o repositório do GitHub
4. Configure as variáveis de ambiente:
    - `RESEND_API_KEY`
    - `EMAIL_FROM`
    - `EMAIL_TO`
5. Clique em "Deploy"

### Opção 2: Deploy via CLI

1. **Instale a Vercel CLI**
```bash
npm i -g vercel
```

2. **Faça login na Vercel**
```bash
vercel login
```

3. **Deploy o projeto**
```bash
cd nimbus-privacy
vercel
```

4. **Configure as variáveis de ambiente no dashboard da Vercel**
    - Acesse: [vercel.com/dashboard](https://vercel.com/dashboard)
    - Selecione seu projeto
    - Vá em Settings → Environment Variables
    - Adicione as variáveis:
        - `RESEND_API_KEY`
        - `EMAIL_FROM`
        - `EMAIL_TO`

## 🔧 Comandos Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Verifica erros de código
```

## 📝 Estrutura do Projeto

```
nimbus-privacy/
├── src/
│   ├── app/           # Páginas e rotas (App Router)
│   ├── components/    # Componentes React
│   │   ├── layout/    # Componentes de layout
│   │   ├── sections/  # Seções das páginas
│   │   └── ui/        # Componentes de UI
│   ├── lib/          # Utilitários e configurações
│   └── types/        # Definições TypeScript
├── public/           # Arquivos estáticos
│   └── images/       # Imagens do site
└── .env.local        # Variáveis de ambiente (não versionado)
```

## 🛠 Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização
- **Framer Motion** - Animações
- **Resend** - Envio de emails

## 📧 Configuração do Formulário de Contato

O formulário de contato usa o [Resend](https://resend.com) para envio de emails. Para configurar:

1. Crie uma conta em [resend.com](https://resend.com)
2. Verifique seu domínio ou use o domínio de teste
3. Gere uma API Key
4. Configure as variáveis de ambiente conforme descrito acima

## 🔗 Links Importantes

- **Formulário Privacy Pass**: O botão "Realize agora" direciona para o Typeform configurado
- **Integração DLController**: Script de gestão de cookies (comentado no layout, ative quando necessário)

