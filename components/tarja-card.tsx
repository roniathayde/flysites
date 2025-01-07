import { LucideIcon } from 'lucide-react'

interface ITarjaCard {
  title: string
  description: string
  icon: LucideIcon
}

export function TarjaCard({ title, description, icon: Icon }: ITarjaCard) {
  return (
    <div className="flex items-start gap-3">
      <div className="rounded-xl bg-[#843DF7] p-3">
        <Icon className="text-white" />
      </div>
      <div>
        <span className="block text-xl font-bold text-white">{title}</span>
        <span className="block max-w-[220px] text-sm text-[#A5A5A5]">
          {description}
        </span>
      </div>
    </div>
  )
}
