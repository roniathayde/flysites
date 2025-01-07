import { CheckCheck } from 'lucide-react'
import Image from 'next/image'

import ImageFrame from '@/public/flysites-sobre.jpg'

export function SecaoTres() {
  return (
    <div
      id="sobre"
      className="ml-auto mr-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-5 px-2 py-6 md:py-20 lg:grid-cols-3 lg:px-0"
    >
      <Image
        src={ImageFrame}
        className="order-2 max-h-[400px] w-full rounded-lg object-cover lg:order-1"
        alt=""
        width={520}
        height={680}
        quality={100}
      />
      <div className="order-1 flex flex-col lg:order-2 lg:col-span-2">
        <span className="mb-5 font-medium uppercase tracking-widest text-[#888888]">
          Sobre nós
        </span>
        <span className="mb-4 text-4xl font-semibold text-white sm:text-6xl">
          Buscamos inovação com interfaces transformadoras
        </span>
        <span className="text-lg font-medium text-[#888888]">
          Somos um estúdio especializado em design de interfaces que visa
          atender pequenas e médias empresas.
        </span>
        <ul className="mt-6 grid w-full max-w-[800px] grid-cols-1 gap-4 lg:grid-cols-2">
          <li className="flex items-center gap-2 text-white">
            <CheckCheck />
            Responsividade <br />
            (desktop, tablet e smartphone)
          </li>
          <li className="flex items-center gap-2 text-white">
            <CheckCheck />
            SEO <br />
            (otimização para motores de busca, melhorando visibilidade e
            alcance)
          </li>
          <li className="flex items-center gap-2 text-white">
            <CheckCheck />
            Performance otimizada <br />
            (sites rápidos e leves)
          </li>
          <li className="flex items-center gap-2 text-white">
            <CheckCheck />
            Integração com plataformas populares <br />
            (WordPress, WooCommerce, etc.)
          </li>
          <li className="flex items-center gap-2 text-white">
            <CheckCheck />
            Design exclusivo e personalizado
          </li>
          <li className="flex items-center gap-2 text-white">
            <CheckCheck />
            Configuração de formulários e captação de leads
          </li>
        </ul>
      </div>
    </div>
  )
}
