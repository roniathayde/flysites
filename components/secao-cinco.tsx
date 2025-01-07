import { ChartPie, User2 } from 'lucide-react'

import { TarjaCard } from './tarja-card'

export function SecaoCinco() {
  return (
    <div className="w-full items-center gap-12 bg-[#121314] py-6">
      <div className="ml-auto mr-auto grid max-w-[1200px] items-start justify-center gap-8 py-10 lg:grid-cols-4 lg:gap-0 lg:py-0">
        <TarjaCard
          title="Desenvolvimento"
          description="Criação de sites modernos e personalizados para sua empresa"
          icon={ChartPie}
        />
        <TarjaCard
          title="Entrega"
          description="Projetos entregues prontos para serem usados e gerenciados por você"
          icon={User2}
        />
        <TarjaCard
          title="Documentação"
          description="Instruções claras para gerenciar seu site com facilidade"
          icon={ChartPie}
        />
        <TarjaCard
          title="Planejamento"
          description="Estratégias para desenvolver um site alinhado aos seus objetivos"
          icon={ChartPie}
        />
      </div>
    </div>
  )
}
