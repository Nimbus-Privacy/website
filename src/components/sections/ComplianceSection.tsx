'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui'
import { Container, Section } from '@/components/layout'

export default function ComplianceSection() {
  return (
    <Section spacing="xl" background="default" id="solucoes">
      <Container size="xl" padding="md">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-secondary-600 text-sm font-bold tracking-[5.2px] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            NOSSAS SOLUÇÕES
          </motion.h2>
          <motion.h3 
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Compliance <span className="text-secondary-600">sem burocracia</span>
          </motion.h3>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Saiba como simplificamos o processo de compliance para que a sua empresa esteja sempre em conformidade com a LGPD, GDPR e outras regulamentações globais.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-left relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <h4 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 max-w-sm">
                Tudo começa no <span className="text-secondary-600">Privacy Pass</span>
              </h4>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                É o nosso <span className="text-secondary-600 font-semibold">diagnóstico gratuito</span>. Com ele, identificamos os riscos e as possíveis melhorias. Assim, você entende a situação da sua empresa antes de dar os próximos passos.
              </p>
              <Link href="https://form.typeform.com/to/RDS5taBT" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-secondary" size="lg">
                  Realize agora
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Image
              src="/images/sessions/np-4.png"
              alt="Privacy Pass"
              width={600}
              height={400}
              className="w-full h-auto max-w-lg"
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}