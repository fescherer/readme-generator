import { TBadge } from '@/@types/badge'
import { LucideX } from 'lucide-react'

type ListTitleProps = {
  fields: any
  // eslint-disable-next-line no-unused-vars
  remove: (item: TBadge) => void
}

export function ListTitle({ fields, remove }: ListTitleProps) {
  return (
    <div className="mt-4 flex flex-col gap-2">
      {fields.map((field: any) => (
        <div key={field.id} className="flex w-full rounded border border-zinc-400 bg-zinc-50 p-2 text-slate-700">
          <span className="w-full">{field.label}</span>

          <button className="rounded bg-slate-100 p-1 transition-all hover:text-form-hightlight" type="button" onClick={() => remove(field)}>
            <LucideX size={16} />
          </button>
        </div>
      ))}
    </div>
  )
}
