import Image from 'next/image'

import Logotipo from '@/public/chart-square.svg'
import WhatsappIcon from '@/public/whatsapp-icon.svg'

export function Footer() {
  return (
    <footer className="mb-3 flex flex-col items-center gap-5 pt-20">
      <h2 className="text-2xl font-semibold text-white sm:text-5xl">
        #VocêESuaEmpresaMelhor
      </h2>
      <span className="max-w-[800px] text-center text-base text-[#888888] sm:text-lg">
        Simplifique sua gestão, otimize seu tempo e veja sua empresa alcançar o
        próximo nível. Junte-se a quem já transformou desafios em conquistas!
      </span>

      <div className="mt-5 flex w-full max-w-[1200px] flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <Image
            src={Logotipo}
            alt="logotipo flysites"
            width={40}
            height={40}
          />
          <span className="text-2xl font-bold tracking-tight text-white">
            Flysites
          </span>
        </div>
        <span className="text-sm text-[#888]">
          @2025 FlySites. Todos os direitos reservados.
        </span>
      </div>
      <a className="fixed bottom-6 right-6 rounded-full bg-emerald-400 p-2">
        <Image
          src={WhatsappIcon}
          className="h-8 w-8"
          alt="logotipo flysites"
          width={60}
          height={60}
          quality={100}
        />
      </a>
    </footer>
  )
}
