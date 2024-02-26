import { LucideX } from 'lucide-react'
import { UseFieldArrayRemove } from 'react-hook-form'
import Image from 'next/image'

type ListProps = {
  fields: any
  remove: UseFieldArrayRemove
}

export function List({ fields, remove }: ListProps) {
  return (
    <div className="mt-1 flex flex-wrap gap-2">
      {fields.map((item: any) => (
        <div key={item.url} className="relative flex flex-col items-center rounded border p-2 text-sm text-zinc-600 shadow-sm">
          <Image
            className="rounded"
            src={item.url}
            width={70}
            height={70}
            alt={item.alt}
            unoptimized
          />

          <button className="absolute right-0 top-0 rounded bg-slate-100 p-1 transition-all hover:text-zinc-900" type="button" onClick={() => remove(fields.findIndex((field: any) => field.url === item.url))}>
            <LucideX size={16} />
          </button>
        </div>
      ))}
    </div>
  )
}
