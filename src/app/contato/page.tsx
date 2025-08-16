'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container, Section } from '@/components/layout'
import { Button } from '@/components/ui'

interface FormData {
  nome: string
  email: string
  empresa: string
  contato: string
  motivos: string[]
  mensagem: string
}

interface FormErrors {
  email?: string
  contato?: string
  motivos?: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const motivoOptions = [
  { value: 'gestao-cookies', label: 'Gestão de cookies' },
  { value: 'direitos-titulares', label: 'Direitos dos titulares' },
  { value: 'dpo-service', label: 'DPO as a service' },
  { value: 'assessoria-juridica', label: 'Assessoria e consultoria jurídica' },
  { value: 'parcerias', label: 'Parcerias' },
  { value: 'outro', label: 'Outro assunto' }
]

export default function ContatoPage() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    empresa: '',
    contato: '',
    motivos: [],
    mensagem: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [statusMessage, setStatusMessage] = useState<string>('')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const formatPhone = (value: string): string => {
    const numbers = value.replace(/\D/g, '')
    
    const limitedNumbers = numbers.slice(0, 11)
    
    if (limitedNumbers.length <= 2) {
      return limitedNumbers
    } else if (limitedNumbers.length <= 7) {
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2)}`
    } else if (limitedNumbers.length <= 10) {
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 6)}-${limitedNumbers.slice(6)}`
    } else {
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 7)}-${limitedNumbers.slice(7)}`
    }
  }

  const validatePhone = (phone: string): boolean => {
    const cleanPhone = phone.replace(/\D/g, '')
    return cleanPhone.length >= 10 && cleanPhone.length <= 11
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    const processedValue = name === 'contato' ? formatPhone(value) : value
    
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }))

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      motivos: prev.motivos.includes(value) 
        ? prev.motivos.filter(m => m !== value)
        : [...prev.motivos, value]
    }))

    if (errors.motivos) {
      setErrors(prev => ({
        ...prev,
        motivos: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const newErrors: FormErrors = {}

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Por favor, insira um e-mail válido'
    }

    if (!validatePhone(formData.contato)) {
      newErrors.contato = 'Por favor, insira um número válido (10-11 dígitos)'
    }

    if (formData.motivos.length === 0) {
      newErrors.motivos = 'Por favor, selecione pelo menos um motivo de contato'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setStatus('submitting')
    setStatusMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar formulário')
      }

      setStatus('success')
      setStatusMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.')
      
      setFormData({
        nome: '',
        email: '',
        empresa: '',
        contato: '',
        motivos: [],
        mensagem: ''
      })
      
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      setStatus('error')
      setStatusMessage(
        error instanceof Error 
          ? error.message 
          : 'Erro ao enviar mensagem. Por favor, tente novamente.'
      )
    }
  }

  return (
    <>
      <Section spacing="lg" background="default">
        <Container size="lg">
          <div className="text-center max-w-4xl mx-auto pt-12 pb-8">
            <h2 className="text-secondary-600 text-sm font-bold tracking-[5.2px] uppercase mb-6">
              COMECE AGORA
            </h2>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
              Sua empresa sempre no controle
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto">
              Preencha os dados abaixo e um especialista da Nimbus Privacy irá entrar em contato para entender seu momento, apresentar os planos ideais e mostrar como podemos ajudar a sua empresa na prática.
            </p>
            <p className="text-lg text-secondary-600 font-medium">
              É rápido. É direto. E é com gente de verdade.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="sm" background="default" className="bg-[#082040]">
        <Container size="md">
          <div className="max-w-2xl mx-auto py-16">
            {status === 'success' && (
              <div className="mb-8 p-4 bg-green-500/10 border-2 border-green-500 rounded-lg">
                <p className="text-green-400 text-center font-medium">{statusMessage}</p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-8 p-4 bg-red-500/10 border-2 border-red-500 rounded-lg">
                <p className="text-red-400 text-center font-medium">{statusMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-white mb-2">
                  Nome*
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="João Silva"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-secondary-600 bg-background text-foreground placeholder:text-neutral-600 focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  E-mail*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com.br"
                  required
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-background text-foreground placeholder:text-neutral-600 focus:outline-none focus:border-primary-500 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-secondary-600'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="empresa" className="block text-sm font-semibold text-white mb-2">
                  Nome da empresa*
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleInputChange}
                  placeholder="Sua empresa ABC"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-secondary-600 bg-background text-foreground placeholder:text-neutral-600 focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contato" className="block text-sm font-semibold text-white mb-2">
                  Número de contato*
                </label>
                <input
                  type="tel"
                  id="contato"
                  name="contato"
                  value={formData.contato}
                  onChange={handleInputChange}
                  placeholder="(11) 99999-9999"
                  required
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-background text-foreground placeholder:text-neutral-600 focus:outline-none focus:border-primary-500 transition-colors ${
                    errors.contato ? 'border-red-500' : 'border-secondary-600'
                  }`}
                />
                {errors.contato && (
                  <p className="mt-1 text-sm text-red-400">{errors.contato}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-4">
                  Motivo do contato* 
                  <span className="text-xs font-normal text-white/60 ml-2">(selecione um ou mais)</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {motivoOptions.map((option) => (
                    <label 
                      key={option.value}
                      className={`
                        relative flex items-center p-4 rounded-lg border-2 cursor-pointer
                        transition-all duration-200 group
                        ${formData.motivos.includes(option.value) 
                          ? 'bg-secondary-600/20 border-secondary-600 shadow-lg shadow-secondary-600/20' 
                          : 'bg-white/5 border-white/20 hover:border-secondary-600/50 hover:bg-white/10'
                        }
                      `}
                    >
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={formData.motivos.includes(option.value)}
                        onChange={() => handleCheckboxChange(option.value)}
                        className="sr-only"
                      />
                      <div className={`
                        flex items-center justify-center w-5 h-5 rounded border-2 mr-3 transition-all
                        ${formData.motivos.includes(option.value)
                          ? 'bg-secondary-600 border-secondary-600'
                          : 'bg-transparent border-white/40 group-hover:border-secondary-600'
                        }
                      `}>
                        {formData.motivos.includes(option.value) && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className={`
                        text-sm font-medium transition-colors
                        ${formData.motivos.includes(option.value) 
                          ? 'text-white' 
                          : 'text-white/80 group-hover:text-white'
                        }
                      `}>
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.motivos && (
                  <p className="mt-3 text-sm text-red-400 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.motivos}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-white mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  placeholder="Se desejar, deixe uma mensagem ou observação"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-secondary-600 bg-background text-foreground placeholder:text-neutral-600 focus:outline-none focus:border-primary-500 transition-colors resize-vertical"
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy-policy"
                  required
                  className="mt-1 h-4 w-4 text-secondary-600 bg-background border-2 border-secondary-600 rounded focus:outline-none focus:border-primary-500 transition-colors"
                />
                <label htmlFor="privacy-policy" className="text-sm text-white/80">
                  Ao preencher o campo, você confirma que está de acordo com a nossa{' '}
                  <Link 
                    href="/politica-privacidade" 
                    className="text-secondary-600 hover:text-secondary-700 underline transition-colors"
                  >
                    Política de Privacidade
                  </Link>
                  .
                </label>
              </div>

              <div className="pt-4 pb-8">
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Enviando...' : 'Enviar'}
                </Button>
              </div>
            </form>
          </div>
        </Container>
      </Section>

      <div className="bg-[#051428] h-16"></div>
    </>
  )
}