import { LucideX } from 'lucide-react'
import { UseFieldArrayRemove } from 'react-hook-form'

type ListProps = {
  fields: any
  remove: UseFieldArrayRemove
}

export function List({ fields, remove }: ListProps) {
  return (
    <div className="mt-4 divide-y rounded border border-zinc-400 bg-zinc-50 text-slate-700">
      {fields.map((field: any) => (
        <div key={field.id} className="flex w-full p-2">
          <span className="w-full">{field.description}</span>

          <button className="rounded bg-slate-100 p-1 transition-all hover:text-zinc-900" type="button" onClick={() => remove(fields.findIndex((item: any) => item.question === field.question))}>
            <LucideX size={16} />
          </button>
        </div>
      ))}
    </div>
  )
}
