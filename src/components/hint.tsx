import { HelpCircle } from 'lucide-react'
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import type { AnchorHTMLAttributes } from 'react'

type HintProps = LinkProps & AnchorHTMLAttributes<any>

export function Hint({ href, ...props }: HintProps) {
  return (
    <Link target="_blank" href={href} {...props}>
      <HelpCircle size={14} />
    </Link>
  )
}
