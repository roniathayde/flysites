import { ChartPie, User2 } from 'lucide-react'

import { TarjaCard } from './tarja-card'

export function SecaoCinco() {
  return (
    <div className="w-full items-center gap-12 bg-[#121314] py-6">
      <div className="ml-auto mr-auto grid max-w-[1200px] grid-cols-4 items-start">
        <TarjaCard
          title="Manutenção"
          description="Atenção diária com você e sua empresa"
          icon={ChartPie}
        />
        <TarjaCard
          title="Atualizações"
          description="Você sempre seguindo as melhores tendências em tecnologia"
          icon={User2}
        />
        <TarjaCard
          title="Relatórios"
          description="Documentos sobre o trabalho"
          icon={ChartPie}
        />
        <TarjaCard
          title="Análises"
          description="Análise em concorrentes para nunca ficar para trás!"
          icon={ChartPie}
        />
      </div>
    </div>
  )
}
