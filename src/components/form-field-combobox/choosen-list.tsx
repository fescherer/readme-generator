import { TItem } from '@/@types/Combobox'
import { LucideX } from 'lucide-react'
import { UseFieldArrayRemove } from 'react-hook-form'

type ChoosenListProps = {
  fields: any
  remove: UseFieldArrayRemove
}

export function ChoosenList({ fields, remove }: ChoosenListProps) {
  return (
    <div className="mt-1 flex flex-wrap gap-2">
      {fields.map((item: TItem) => (
        <div key={item.value} className="flex items-center rounded-full border py-1 pl-4 pr-1 text-sm text-zinc-600">
          <span>{item.label}</span>

          <button className="p-2 transition-all hover:text-zinc-900" type="button" onClick={() => remove(fields.findIndex((field: TItem) => field.value === item.value))}>
            <LucideX size={16} />
          </button>
        </div>
      ))}
    </div>
  )
}
