import Image from 'next/image'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import ImageFrame from '@/public/iframe2.png'

export function SecaoQuatro() {
  return (
    <div className="ml-auto mr-auto grid w-full max-w-[1240px] grid-cols-2 items-center gap-12 py-20">
      <div className="flex max-w-[600px] flex-col">
        <span className="mb-5 font-medium uppercase tracking-widest text-[#888888]">
          Como funciona
        </span>
        <span className="mb-4 text-6xl font-semibold text-white">
          Processo criativo moldado para simplicidade
        </span>
        <span className="text-sm font-medium text-[#888888]">
          Nosso processo foi criado para mantermos a qualidade de uma entrega
          fora do comum, focando no essencial para seu negócio.
        </span>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl font-semibold text-white hover:text-white/70 hover:no-underline">
              Pesquisa
            </AccordionTrigger>
            <AccordionContent className="text-[#888888]">
              Iniciamos realizando uma pesquisa de usabilidade, criamos um
              sitemap detalhado e montamos uma timeline para acompanhamento.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl font-semibold text-white hover:text-white/70 hover:no-underline">
              Design
            </AccordionTrigger>
            <AccordionContent className="text-[#888888]">
              Nessa etapa utilizamos o design estratégico para dar vida ao seu
              projeto, buscando um design responsivo e voltado para usabilidade
              e experiência.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-2xl font-semibold text-white hover:text-white/70 hover:no-underline">
              Desenvolvimento
            </AccordionTrigger>
            <AccordionContent className="text-[#888888]">
              Focaremos 100% no desenvolvimento otimizada, utilizando
              ferramentas essenciais para isso, saber desenvolver da forma
              correta é extremamente importante.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-2xl font-semibold text-white hover:text-white/70 hover:no-underline">
              Otimização
            </AccordionTrigger>
            <AccordionContent className="text-[#888888]">
              Nosso processo de otimização conta com mais de 13 páginas, indo
              desde o backup, passando pela performance e finalizando na lei
              geral de proteção de dados.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Image
        src={ImageFrame}
        className="object-contain"
        alt=""
        width={520}
        height={680}
        quality={100}
      />
    </div>
  )
}
