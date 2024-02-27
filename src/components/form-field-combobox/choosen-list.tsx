import { TTechnology } from '@/@types/Combobox'
import { LucideX } from 'lucide-react'
import Image from 'next/image'
import { UseFieldArrayRemove } from 'react-hook-form'

type ChoosenListProps = {

  fields: any
  remove: UseFieldArrayRemove
}

export function ChoosenList({ fields, remove }: ChoosenListProps) {
  return (
    <div className="mt-1 flex flex-wrap gap-2">
      {fields.map((item: TTechnology) => (
        <div key={item.value} className="flex items-center rounded-full border p-1 pl-2 text-sm text-zinc-600">
          <Image className="rounded-full" src={item.badge} width={70} height={40} alt={item.label} unoptimized />

          <button className="p-2 transition-all hover:text-zinc-900" type="button" onClick={() => remove(fields.findIndex((field: TTechnology) => field.value === item.value))}>
            <LucideX size={16} />
          </button>
        </div>
      ))}
    </div>
  )
}
