import { LucideX } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { UseFieldArrayRemove } from 'react-hook-form'

type ListProps = {
  fields: any
  remove: UseFieldArrayRemove
}

export function List({ fields, remove }: ListProps) {
  return (
    <div className="mt-1 flex flex-wrap gap-2">
      {fields.map((item: any) => (
        <div key={item.github} className="relative flex flex-col items-center rounded border p-2 text-sm text-zinc-600 shadow-sm">
          <Link target="_blank" href={`https://github.com/${item.github}`}>
            <Image
              className="rounded"
              src={`https://github.com/${item.github}.png`}
              width={70}
              height={70}
              alt={item.name}
              unoptimized
            />
          </Link>

          <span>{item.name}</span>

          <button className="absolute right-0 top-0 rounded bg-slate-100 p-1 transition-all hover:text-zinc-900" type="button" onClick={() => remove(fields.findIndex((field: any) => field.github === item.github))}>
            <LucideX size={16} />
          </button>
        </div>
      ))}
    </div>
  )
}
