import { CheckCheck } from 'lucide-react'
import Image from 'next/image'

import ImageFrame from '@/public/iframetest.png'

export function SecaoTres() {
  return (
    <div className="ml-auto mr-auto grid w-full max-w-[1240px] grid-cols-3 items-center gap-5 py-20">
      <Image
        src={ImageFrame}
        className="object-contain"
        alt=""
        width={520}
        height={680}
        quality={100}
      />
      <div className="col-span-2 flex flex-col">
        <span className="mb-5 font-medium uppercase tracking-widest text-[#888888]">
          Sobre nós
        </span>
        <span className="mb-4 text-6xl font-semibold text-white">
          Buscamos inovação com interfaces transformadoras
        </span>
        <span className="text-lg font-medium text-[#888888]">
          Somos um estúdio especializado em design de interfaces que visa
          atender grandes e médias empresas.
        </span>
        <ul className="mt-6 grid w-full max-w-[600px] grid-cols-2 gap-4">
          <li className="flex items-center gap-2 text-white">
            <CheckCheck />
            Windows
          </li>
          <li className="flex items-center gap-2 text-white">
            <CheckCheck />
            MacOS
          </li>
          <li className="flex items-center gap-2 text-white">
            <CheckCheck />
            Android
          </li>
          <li className="flex items-center gap-2 text-white">
            <CheckCheck />
            IOS
          </li>
          <li className="flex items-center gap-2 text-white">
            <CheckCheck />
            Xiomi
          </li>
          <li className="flex items-center gap-2 text-white">
            <CheckCheck />
            Todos os sistemas operacionais
          </li>
        </ul>
      </div>
    </div>
  )
}
