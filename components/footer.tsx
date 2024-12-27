import Image from 'next/image'

import Logotipo from '@/public/chart-square.svg'

export function Footer() {
  return (
    <footer className="mb-3 flex flex-col items-center gap-5 pt-20">
      <h2 className="text-5xl font-semibold text-white">
        #VocêESuaEmpresaMelhor
      </h2>
      <span className="max-w-[800px] text-center text-lg text-[#888888]">
        Simplifique sua gestão, otimize seu tempo e veja sua empresa alcançar o
        próximo nível. Junte-se a quem já transformou desafios em conquistas!
      </span>

      <div className="mt-5 flex w-full max-w-[1200px] items-center justify-between">
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
