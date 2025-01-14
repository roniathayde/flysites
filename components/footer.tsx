import { Instagram, Mail } from 'lucide-react'
import Image from 'next/image'

import Logotipo from '@/public/chart-square.svg'
import whatsapplogo from '@/public/whatsapp-icon.svg'

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

      <div
        id="contato"
        className="flex w-full max-w-[500px] flex-col items-center justify-center gap-5 rounded-lg bg-zinc-950 p-7"
      >
        <span className="text-3xl font-medium text-white">
          Solicite seu orçamento
        </span>
        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:flysites.contato@gmail.com"
            target="_blank"
            className="flex gap-2 text-base text-white"
          >
            <Mail />
            flysites.contato@gmail.com
          </a>
          <a
            href="https://www.instagram.com/flysites.studio/?utm_source=ig_web_button_share_sheet"
            className="flex gap-2 text-base text-white"
            target="_blank"
          >
            <Instagram />
            @flysites.studio
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511994745755&text=Ol%C3%A1,%20estava%20em%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho."
            className="flex gap-2 text-base text-white"
            target="_blank"
          >
            <Image src={whatsapplogo} alt="" className="w-5" />
            (11) 99474-5755
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511948845505&text=Ol%C3%A1,%20estava%20em%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho."
            className="flex gap-2 text-base text-white"
            target="_blank"
          >
            <Image src={whatsapplogo} alt="" className="w-5" />
            (11) 94884-5505
          </a>
        </div>
      </div>

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
    </footer>
  )
}
