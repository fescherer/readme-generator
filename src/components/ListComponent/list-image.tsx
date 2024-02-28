import { TBadge } from '@/@types/badge'
import { LucideX } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type ListImageProps = {
  fields: TBadge[]
  // eslint-disable-next-line no-unused-vars
  onClick: (item: TBadge) => void
}

export function ListImage({ fields, onClick }: ListImageProps) {
  return (
    <div className="mt-1 flex flex-wrap gap-2">
      {fields.map(item => (
        <div key={item.value} className="relative flex flex-col items-center rounded border p-2 text-form-value shadow-sm">
          {
            item.link
              ? (
                <Link target="_blank" href={item.link}>
                  <Image
                    className="rounded"
                    src={item.badge}
                    width={70}
                    height={70}
                    alt={item.alt}
                    unoptimized
                  />
                </Link>
                )
              : (
                <Image
                  className="rounded"
                  src={item.badge}
                  width={70}
                  height={70}
                  alt={item.alt}
                  unoptimized
                />
                )
            }

          <span>{item.label}</span>

          <button className="absolute right-0 top-0 rounded bg-slate-100 p-1 transition-all hover:text-form-hightlight" type="button" onClick={() => onClick(item)}>
            <LucideX size={16} />
          </button>
        </div>
      ))}
    </div>
  )
}
