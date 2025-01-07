'use client'
import { motion } from 'framer-motion'

import TypingAnimation from '@/components/ui/typing-animation'

import { Button } from './ui/button'

export function SecaoUm() {
  return (
    <div className="ml-auto mr-auto w-full max-w-[1240px] px-2 py-4 md:py-20 lg:px-0">
      <motion.span
        initial={{ translateY: -50, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{
          translateY: 0,
          opacity: 1,
          transition: { duration: 0.6 },
        }}
        className="mb-5 block text-lg uppercase tracking-widest text-[#888888]"
      >
        Criamos interfaces que levam sua marca a um outro nível.
      </motion.span>
      <TypingAnimation
        duration={40}
        as="h1"
        className="mb-4 min-h-[144px] text-5xl font-bold text-white sm:text-7xl"
      >
        Apresente sua marca ao mundo com um site único
      </TypingAnimation>
      <motion.span
        initial={{ translateX: -50, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{
          translateX: 0,
          opacity: 1,
          transition: { duration: 1.2, delay: 0.6 },
        }}
        className="block text-base text-[#888888]"
      >
        Dê o primeiro passo para transformar sua empresa. Um site pode aumentar
        sua visibilidade, atrair mais clientes e garantir crescimento e
        estabilidade.
      </motion.span>
      <footer className="mt-16 flex justify-between">
        <Button
          size={'lg'}
          className="bg-[#843DF7] font-semibold hover:bg-[#843DF7]"
        >
          Fale conosco
        </Button>

        {/* <div className="flex gap-10">
          <div className="flex flex-col items-end justify-between">
            <Image src={Estrelas} alt="" width={108} height={20} />
            <span className="text-sm font-medium text-[#888888]">
              Mais de 100+ cases de sucesso
            </span>
          </div>
          <div className="relative flex">
            <div className="relative -ml-6 size-[40px] rounded-full border-2 border-[#0D0D0D] bg-[#888]" />
            <div className="relative -ml-6 size-[40px] rounded-full border-2 border-[#0D0D0D] bg-[#888]" />
            <div className="relative -ml-6 size-[40px] rounded-full border-2 border-[#0D0D0D] bg-[#888]" />
            <div className="relative -ml-6 size-[40px] rounded-full border-2 border-[#0D0D0D] bg-[#888]" />
          </div>
        </div> */}
      </footer>
    </div>
  )
}
