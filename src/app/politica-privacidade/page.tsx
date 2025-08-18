'use client'

import { useState } from 'react'
import { Container, Section } from '@/components/layout'
import { CTASection } from '@/components/sections'

interface TableData {
  finalidade?: string
  baseLegal?: string
  dados?: string
  base?: string
  tipo?: string
  acao?: string
}

interface PolicyItem {
  id: number
  title: string
  content?: string
  tableData?: TableData[]
}

const policyItems: PolicyItem[] = [
  {
    id: 1,
    title: '1. Quem somos',
    content: 'A Nimbus Privacy é uma empresa do Grupo Nimbus que une tecnologia e expertise jurídica para oferecer soluções completas em privacidade e proteção de dados. Especializada na adequação à LGPD, automatização do atendimento aos titulares, gestão de consentimento e cookies, e consultoria jurídica contínua, a empresa atua como parceira estratégica de organizações que buscam segurança, conformidade e eficiência no tratamento de dados pessoais.'
  },
  {
    id: 2,
    title: '2. Propósito deste documento',
    content: 'Esta Política de Privacidade reforça nosso compromisso com a proteção dos dados pessoais e com a transparência na forma como os tratamos. Aqui, explicamos de forma clara:\n• Quais dados são coletados;\n• Como são utilizados, armazenados ou compartilhados;\n• Quais são os direitos dos titulares e como podem exercê-los.'
  },
  {
    id: 3,
    title: '3. Termos e definições',
    content: 'Para facilitar a compreensão:\n• Nimbus Privacy: controladora dos dados pessoais tratados por meio deste site.\n• Usuário: pessoa natural que utiliza nossos serviços ou acessa o site.\n• Dados pessoais: qualquer informação relacionada à pessoal natural que a identifique, ou que, usada em combinação com outras informações tratadas, identifiquem um indivíduo\n• Tratamento de dados: considera-se tratamento de dado pessoal a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração de dados de pessoas físicas.\n• LGPD: Lei nº 13.709/18 – Lei Geral de Proteção de Dados.\n• Titular: pessoa natural a quem os dados se referem.\n• Consentimento: autorização livre, informada e inequívoca do titular para o tratamento de seus dados.\n• Controlador: pessoa natural ou jurídica, de direito público ou privado, a quem compete as decisões referentes ao tratamento de dados pessoais.\n• Operador: pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do controlador.\n• Cookies: arquivos que armazenam informações de navegação para personalizar a experiência do usuário.'
  },
  {
    id: 4,
    title: '4. A quem esta política se aplica',
    content: 'Esta Política de Privacidade se aplica a todos aqueles que utilizem o site, bem como àqueles que de alguma forma tenham seus dados pessoais tratados pela empresa. Ela não se aplica a sites de terceiros, ainda que o usuário os acesse por links contidos no site ou por comunicações enviadas pela Nimbus Privacy.\n\nA utilização do site pelo Usuário ou dos serviços prestados pela Nimbus Privacy implica na aceitação desta Política de Privacidade.'
  },
  {
    id: 5,
    title: '5. Quais dados pessoais são coletados',
    content: 'A Nimbus Privacy trata dados pessoais de Titulares que são coletados e/ou processados: (a) durante o acesso e/ou navegação do site ou do aplicativo; e (b) antes, durante ou após a prestação dos serviços pela Nimbus Privacy.\n\nA Nimbus Privacy coleta e armazena as seguintes informações dos Usuários, conforme o caso:\n\n• Informações que você nos fornece para contato e envio de orçamentos: nome, empresa, telefone, e-mail e mensagem.\n\n• Informações coletadas automaticamente pela Nimbus Privacy pelos registros de acesso, navegação e uso: coletamos e armazenamos determinadas informações sempre que o usuário interage conosco. Dados como endereço IP, informações sobre o dispositivo utilizado para a navegação; produtos e categorias pesquisados ou visualizados; contagem de visualizações; e páginas visitadas poderão ser coletados.\n\n• Informações que você nos fornece para exercício dos direitos dos titulares: nome, CPF, e-mail e telefone.'
  },
  {
    id: 6,
    title: '6. Finalidade do tratamento de dados pessoais',
    content: 'Os dados pessoais dos Titulares, conforme o caso, são tratados pela Nimbus Privacy para as seguintes finalidades:\n\n• Disponibilizar aos Titulares um ambiente eletrônico por meio do qual os Usuários podem obter mais informações sobre os serviços;\n\n• Prestar o serviço oferecido, dando-lhe a finalidade adequada;\n\n• Responder às solicitações de SAC, atender pedidos e solicitações e dar suporte técnico;\n\n• Contatar os Titulares para enviar informações sobre: (a) o regular atendimento dos serviços oferecidos, otimizando a interação entre as partes; (b) alterações relevantes nas funcionalidades do site ou do aplicativo; e (c) outros assuntos que a Nimbus Privacy julgue que possam interessar os Usuários;\n\n• Cumprir obrigações legais, como relacionadas às requisições de autoridades públicas ou governamentais, bem como exercer regular direito em processo em que a Nimbus Privacy figura como parte;\n\n• Otimizar a experiência dos usuários, fazer análises e pesquisas de mercado, o que pode incluir o desenvolvimento de campanhas de marketing;\n\n• Proteger os direitos, a privacidade, a segurança, a propriedade, as operações, aplicar termos e condições, permitir o alcance de recursos disponíveis ou limitar os danos causados à Nimbus Privacy; e\n\n• Levantar dados estatísticos acerca da base de Usuários do site ou aplicativo e o volume de tráfego em nossos servidores.'
  },
  {
    id: 7,
    title: '7. Compartilhamento com terceiros',
    content: 'Os dados pessoais poderão ser compartilhados quando:\n\n• Para prestação adequada dos serviços com empresas parceiras, como para provimento de infraestrutura tecnológica e operacional, canal de denúncias, gestão do site e/ou do aplicativo, logística interna, entre outros;\n\n• Para as empresas terceiras, visando viabilizar o regular atendimento e prestação de serviços;\n\n• Para proteção em caso de eventual conflito;\n\n• Mediante decisão judicial, requisição de autoridade competente ou cumprimento de legislação aplicável;\n\nEm nenhuma hipótese, os dados pessoais tratados pela Nimbus Privacy serão vendidos ou transmitidos a terceiros para fins promocionais.\n\nNosso site pode conter links para sites de terceiros, plug-ins ou aplicativos. Clicar nesses links ou habilitar tais conexões pode permitir que terceiros coletem ou compartilhem dados dos Usuários. A Nimbus Privacy não é responsável pela Política de Privacidade destes sites de terceiros, portanto, o Usuário deve se certificar de ler a Política de Privacidade específica de cada sítio eletrônico visitado.'
  },
  {
    id: 8,
    title: '8. Prazo de retenção',
    content: 'Os dados pessoais tratados pela Nimbus Privacy serão armazenados de acordo com as normas aplicáveis da legislação pátria, conforme o disposto no artigo 15 da Lei n. 13.709/2018. O término do tratamento ocorrerá nas seguintes hipóteses:\n\n• Finalidade do tratamento foi alcançada ou os dados deixaram de ser necessários ao alcance da finalidade almejada;\n\n• Fim do período de tratamento previsto;\n\n• Comunicação do Titular para solicitar o término do tratamento e a exclusão de seus dados pessoais, excetuando os casos em que a lei oferecer outro tratamento; ou\n\n• Determinação legal.\n\nApós o término de tratamento de dados pessoais, ressalvadas as hipóteses estabelecidas pela legislação aplicável ou pela presente Política de Privacidade, os dados pessoais serão eliminados.'
  },
  {
    id: 9,
    title: '9. Transferência internacional de dados pessoais',
    content: 'A Nimbus Privacy, em eventual necessidade de transferência dos seus dados para outros países, como na contratação de serviços de provimento de dados e informações alocados internacionalmente, irá adotar medidas apropriadas para garantir a proteção adequada de seus dados pessoais em conformidade os padrões de segurança internacionais e com as legislações aplicáveis de proteção de dados, incluindo, mas não se limitando, à Lei Geral de Proteção de Dados.\n\nAo navegar em nosso site, aplicativo ou se comunicar conosco, você concorda com o tratamento de suas informações, inclusive a transferência internacional de dados, quando necessário.'
  },
  {
    id: 10,
    title: '10. Direitos dos titulares',
    content: 'O titular pode, a qualquer momento, solicitar:\n• Confirmação da existência de tratamento;\n• Acesso aos seus dados;\n• Correção de dados incompletos ou desatualizados;\n• Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;\n• Portabilidade a outro fornecedor;\n• Revogação do consentimento;\n• Informações sobre compartilhamento de dados;\n• Revisão de decisões automatizadas.\n\nEsses pedidos podem ser feitos diretamente na aba "Seus Dados" no rodapé do nosso site ou para obter mais detalhes, o titular de dados poderá entrar em contato conosco através do e-mail contato@nimbusprivacy.com.br.'
  },
  {
    id: 11,
    title: '11. Política de Cookies',
    content: 'A Nimbus Privacy utiliza cookies para facilitar o uso e melhor adaptar as Páginas aos seus interesses e necessidades, bem como para compilarmos informações sobre a utilização de nossos sites e serviços, auxiliando a melhorar suas estruturas e seus conteúdos. Os cookies também podem ser utilizados para acelerar suas atividades e experiências futuras nas Páginas.\n\nAlém disso, utilizamos mecanismos de rastreio para controle interno de audiência e de navegação a fim de gerar relatórios sobre a quantidade de novos usuários, visitantes únicos, novos clientes, usuários ativos e para embasar decisões estratégicas da empresa. Os dados que coletamos via cookies também nos ajudam a manter a segurança do nosso portal identificando uma atividade suspeita que tenha como objetivo prejudicar o nosso sistema.\n\nInformamos ainda, que nem todos os cookies trazidos neste site ou aplicativo realizam a coleta e o armazenamento de dados pessoais, visto que alguns dos cookies trazidos são utilizados para o desempenho de algum dos serviços que prestamos.\n\nA desativação dos cookies pode lhe trazer uma experiência incompleta ou com falhas na sua visita ao nosso site ou aplicativo, além de não trazer o desempenho correto das ferramentas e funções que disponibilizamos em nossas páginas.',
    tableData: [
      {
        tipo: 'Necessários',
        acao: 'Esses cookies são essenciais para que as páginas da Nimbus Privacy carreguem corretamente e permitem que você navegue em no site e faça uso de todas as funcionalidades.'
      },
      {
        tipo: 'Desempenho ou Estatísticos',
        acao: 'Esses cookies ajudam a entender como os visitantes interagem com as páginas da Nimbus Privacy, fornecendo informações sobre as áreas visitadas, o tempo de visita ao site e quaisquer problemas encontrados, como mensagens de erro.'
      },
      {
        tipo: 'Funcionais',
        acao: 'Esses cookies permitem que as páginas da Nimbus Privacy se lembrem de suas escolhas, para proporcionar uma experiência mais personalizada.'
      },
      {
        tipo: 'Marketing',
        acao: 'Esses cookies são utilizados para fornecer mais conteúdo relevante e do interesse dos Usuários, bem como medir a eficácia de uma campanha publicitária da Nimbus Privacy.'
      }
    ]
  },
  {
    id: 12,
    title: '12. Alterações nesta política',
    content: 'A Nimbus Privacy poderá modificar, alterar ou substituir a Política de Privacidade a qualquer tempo. Em caso de alteração, a Nimbus Privacy disponibilizará a nova política em seu site antes da entrada em vigor da alteração. A continuidade do uso dos nossos serviços após essas alterações será interpretada como concordância com a nova versão.'
  },
  {
    id: 13,
    title: '13. Legislação e foro',
    content: 'Esta Política de Privacidade será regida, interpretada e aplicada de acordo com as Leis da República Federativa do Brasil, independentemente das Leis de outros estados ou Países, sendo competente o foro da Comarca da Capital de Florianópolis/SC para dirimir qualquer dúvida decorrente deste documento.'
  },
  {
    id: 14,
    title: '14. Contato',
    content: 'Controlador:\nNimbus Privacy\nCNPJ: 33.565.109/0001-25\nEndereço: Rod. José Carlos Daux, 500, Torre II, Sala 702 - João Paulo, Florianópolis, Santa Catarina, CEP 88030-000\n\nEncarregado de Dados (DPO):\nArthur Corrêa\nE-mail: arthur.correa@nimbusprivacy.com.br'
  }
]

function PolicyCard({ item, isOpen, onToggle }: { 
  item: PolicyItem
  isOpen: boolean
  onToggle: () => void 
}) {
  return (
    <div className={`border rounded-lg bg-card transition-all duration-300 ${isOpen ? 'border-secondary-600' : 'border-border'}`}>
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-card/80 transition-colors rounded-lg"
      >
        <h4 className="text-lg font-semibold text-card-foreground pr-4">
          {item.title}
        </h4>
        <div className={`transition-all duration-300 ${isOpen ? 'rotate-90' : ''}`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={isOpen ? 'text-secondary-600' : 'text-primary-500'}
          >
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6">
          <div className="pt-4 border-t border-border/30 mt-2">
            {item.content && (
              <div className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                {item.content}
              </div>
            )}
            {item.tableData && item.id === 11 && (
              <div className="mt-6 overflow-x-auto rounded-lg border border-border">
                <table className="min-w-full">
                  <thead className="bg-gradient-to-r from-secondary-600 to-primary-500">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wide">
                        Tipos de Cookies
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wide">
                        O que eles fazem?
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-background">
                    {item.tableData.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-muted/30' : 'bg-background'}>
                        <td className="px-6 py-4 text-sm text-foreground font-medium border-t border-border">
                          {row.tipo}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground border-t border-border">
                          {row.acao}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {item.content && item.id === 11 && (
              <div className="mt-6 text-base text-muted-foreground leading-relaxed">
                Se o Usuário desejar, poderá desativar os cookies. É comum que isso possa ser feito no menu &quot;opções&quot; ou &quot;preferências&quot; de seu browser. Note-se que ao desativar cookies, pode ser que haja prejuízos na performance da navegação do site.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function PrivacyPolicyPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <>
      <Section spacing="lg" background="default">
        <Container size="lg">
          <div className="text-center max-w-4xl mx-auto pt-12 pb-8">
            <h2 className="text-secondary-600 text-sm font-bold tracking-[5.2px] uppercase mb-6">
              TRANSPARÊNCIA E SEGURANÇA
            </h2>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
              Política de Privacidade – <span className="text-secondary-600">Nimbus Privacy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
              Nosso compromisso com a proteção dos seus dados pessoais e a transparência em todas as nossas operações.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Última atualização: Janeiro de 2025
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="sm" background="default">
        <Container size="xl" padding="md">
          <div className="space-y-4">
            {policyItems.map((item) => (
              <PolicyCard
                key={item.id}
                item={item}
                isOpen={openItems.includes(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}