import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  nome: string
  email: string
  empresa: string
  contato: string
  motivos: string[]
  mensagem?: string
}

const motivoLabels: Record<string, string> = {
  'gestao-cookies': 'Gestão de cookies',
  'direitos-titulares': 'Direitos dos titulares',
  'dpo-service': 'DPO as a service',
  'assessoria-juridica': 'Assessoria e consultoria jurídica',
  'parcerias': 'Parcerias',
  'outro': 'Outro assunto'
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    if (!process.env.EMAIL_FROM || !process.env.EMAIL_TO) {
      console.error('Email configuration is incomplete')
      return NextResponse.json(
        { error: 'Email configuration is incomplete' },
        { status: 500 }
      )
    }

    const body: ContactFormData = await request.json()

    if (!body.nome || !body.email || !body.empresa || !body.contato || !body.motivos || body.motivos.length === 0) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'E-mail inválido' },
        { status: 400 }
      )
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Novo Contato - Nimbus Privacy</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: #f7f7f7;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              background: white;
              padding: 15px;
              margin-bottom: 15px;
              border-radius: 5px;
              border-left: 4px solid #667eea;
            }
            .field-label {
              font-weight: bold;
              color: #555;
              margin-bottom: 5px;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .field-value {
              color: #333;
              font-size: 16px;
            }
            .message {
              background: #fff;
              padding: 20px;
              border-radius: 5px;
              border-left: 4px solid #764ba2;
              margin-top: 20px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e0e0e0;
              color: #888;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0;">Novo Contato Recebido</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Formulário de Contato - Nimbus Privacy</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="field-label">Nome</div>
              <div class="field-value">${body.nome}</div>
            </div>
            
            <div class="field">
              <div class="field-label">E-mail</div>
              <div class="field-value">
                <a href="mailto:${body.email}" style="color: #667eea; text-decoration: none;">
                  ${body.email}
                </a>
              </div>
            </div>
            
            <div class="field">
              <div class="field-label">Empresa</div>
              <div class="field-value">${body.empresa}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Telefone</div>
              <div class="field-value">
                <a href="tel:${body.contato.replace(/\D/g, '')}" style="color: #667eea; text-decoration: none;">
                  ${body.contato}
                </a>
              </div>
            </div>
            
            <div class="field">
              <div class="field-label">Motivos do Contato</div>
              <div class="field-value">
                ${body.motivos.map(motivo => 
                  `• ${motivoLabels[motivo] || motivo}`
                ).join('<br>')}
              </div>
            </div>
            
            ${body.mensagem ? `
              <div class="message">
                <div class="field-label">Mensagem</div>
                <div class="field-value" style="white-space: pre-wrap;">${body.mensagem}</div>
              </div>
            ` : ''}
          </div>
          
          <div class="footer">
            <p>Este e-mail foi enviado através do formulário de contato do site Nimbus Privacy</p>
            <p>${new Date().toLocaleString('pt-BR', { 
              timeZone: 'America/Sao_Paulo',
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
        </body>
      </html>
    `

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: `Novo Contato - ${body.empresa}`,
      html: emailHtml,
      replyTo: body.email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Erro ao enviar e-mail. Por favor, tente novamente.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensagem enviada com sucesso!',
        id: data?.id 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Por favor, tente novamente.' },
      { status: 500 }
    )
  }
}