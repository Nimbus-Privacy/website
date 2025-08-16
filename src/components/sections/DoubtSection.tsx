import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui'
import { Container, Section } from '@/components/layout'

export default function DoubtSection() {
  return (
    <Section spacing="xl" background="default" className="overflow-visible">
      <Container size="xl" padding="md">
        <div className="relative">
          <div className="bg-[#4b37be] rounded-lg overflow-hidden lg:overflow-visible">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
              <div className="text-center lg:text-left p-12 flex flex-col justify-center min-h-[300px] lg:min-h-[350px]">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Ainda está com dúvidas?
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-lg">
                  Estamos aqui para isso. Fale com nossos especialistas diretamente pelo chat e tire suas dúvidas com quem entende do assunto.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Link href="/contato">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#4b37be]">
                      Fale conosco
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] lg:hidden">
                <Image
                  src="/images/sessions/ilustração3.png"
                  alt="Fale com nossos especialistas"
                  fill
                  className="object-contain object-right-bottom pr-4 pb-4"
                />
              </div>
              <div className="hidden lg:block lg:min-h-[400px]"></div>
            </div>
          </div>

          <div className="absolute right-0 lg:right-10 bottom-0 lg:bottom-[-80px] w-[300px] h-[400px] lg:w-[400px] lg:h-[450px] hidden lg:block">
            <Image
              src="/images/sessions/ilustração3.png"
              alt="Fale com nossos especialistas"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}