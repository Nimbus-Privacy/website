'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui'
import { Container, Section } from '@/components/layout'

export default function WhyNimbusSection() {
  return (
    <Section spacing="xl" background="default">
      <Container size="xl" padding="md">
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-16 items-start mb-20">
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                className="text-secondary-600 text-sm font-bold tracking-[5.2px] uppercase mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                POR QUE A NIMBUS PRIVACY?
              </motion.h2>
              <motion.h3 
                className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                Mais que uma ferramenta, <span className="text-secondary-600">parceria estratégica</span>
              </motion.h3>
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Acreditamos que empresas que escolhem estar no controle não querem apenas cumprir normas — querem proteger sua reputação e fortalecer a confiança de quem se relaciona com elas.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  É por isso que desenvolvemos e entregamos soluções reais, para transformar a gestão de dados pessoais em algo acessível, seguro e eficiente.
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex justify-center items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative">
                <Image
                  src="/images/sessions/why-1.png"
                  alt="Profissionais especializados em LGPD e proteção de dados"
                  width={500}
                  height={350}
                  className="w-full h-auto max-w-md"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-16 items-start">
            <motion.div 
              className="flex justify-center items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative">
                <Image
                  src="/images/sessions/why-2.png"
                  alt="Parceria estratégica em consultoria de privacidade e compliance"
                  width={500}
                  height={350}
                  className="w-full h-auto max-w-md"
                />
              </div>
            </motion.div>

            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div 
                className="space-y-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Assim, unimos <span className="text-secondary-600 font-semibold">tecnologia avançada com visão jurídica especializada</span>, facilitando o que antes era visto como burocrático e oferecendo soluções que se adaptam à realidade de cada empresa.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Na Nimbus Privacy, a privacidade e a governança de dados pessoais deixam de ser um obstáculo — e se tornam <span className="text-secondary-600 font-semibold">parte da sua estratégia</span>.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link href="/contato">
                  <Button variant="outline-secondary" size="lg">
                    Comece agora
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="lg:hidden space-y-12">
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-secondary-600 text-sm font-bold tracking-[5.2px] uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              POR QUE A NIMBUS PRIVACY?
            </motion.h2>
            <motion.h3 
              className="text-4xl font-bold text-foreground mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Mais que uma ferramenta, <span className="text-secondary-600">parceria estratégica</span>
            </motion.h3>
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Acreditamos que empresas que escolhem estar no controle não querem apenas cumprir normas — querem proteger sua reputação e fortalecer a confiança de quem se relaciona com elas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                É por isso que desenvolvemos e entregamos soluções reais, para transformar a gestão de dados pessoais em algo acessível, seguro e eficiente.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <Image
                src="/images/sessions/why-1.png"
                alt="Profissionais especializados em LGPD e proteção de dados"
                width={500}
                height={350}
                className="w-full h-auto max-w-sm"
              />
            </div>
          </motion.div>

          <motion.div 
            className="text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="space-y-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Assim, unimos <span className="text-secondary-600 font-semibold">tecnologia avançada com visão jurídica especializada</span>, facilitando o que antes era visto como burocrático e oferecendo soluções que se adaptam à realidade de cada empresa.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Na Nimbus Privacy, a privacidade e a governança de dados pessoais deixam de ser um obstáculo — e se tornam <span className="text-secondary-600 font-semibold">parte da sua estratégia</span>.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link href="/contato">
                <Button variant="outline-secondary" size="lg">
                  Comece agora
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <Image
                src="/images/sessions/why-2.png"
                alt="Parceria estratégica em consultoria de privacidade e compliance"
                width={500}
                height={350}
                className="w-full h-auto max-w-sm"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}