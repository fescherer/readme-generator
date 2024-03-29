import { TItemImage } from '@/@types/item'
import { LucideX } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type ListBadgeProps = {
  fields: TItemImage[]
  // eslint-disable-next-line no-unused-vars
  onClick: (item: TItemImage) => void
}

export function ListBadge({ fields, onClick }: ListBadgeProps) {
  return (
    <div className="mt-1 flex flex-wrap gap-2">
      {fields.map(item => (
        <div key={item.keyId} className="flex items-center rounded-full border p-1 pl-2 text-form-value">
          <Link target="_blank" href={item.link}>
            <Image className="w-auto rounded-full" src={item.image} width={70} height={40} alt={item.alt} unoptimized />
          </Link>

          <button className="p-2 transition-all hover:text-form-hightlight" type="button" onClick={() => onClick(item)}>
            <LucideX size={16} />
          </button>
        </div>
      ))}
    </div>
  )
}
