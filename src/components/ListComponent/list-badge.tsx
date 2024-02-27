import { TBadge } from '@/@types/badge'
import { LucideX } from 'lucide-react'
import Image from 'next/image'

type ListBadgeProps = {
  fields: TBadge[]
  // eslint-disable-next-line no-unused-vars
  onClick: (item: TBadge) => void
}

export function ListBadge({ fields, onClick }: ListBadgeProps) {
  return (
    <div className="mt-1 flex flex-wrap gap-2">
      {fields.map(item => (
        <div key={item.value} className="flex items-center rounded-full border p-1 pl-2 text-sm text-zinc-600">
          <Image className="rounded-full" src={item.badge} width={70} height={40} alt={item.label} unoptimized />

          <button className="p-2 transition-all hover:text-zinc-900" type="button" onClick={() => onClick(item)}>
            <LucideX size={16} />
          </button>
        </div>
      ))}
    </div>
  )
}
