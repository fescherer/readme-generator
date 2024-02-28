import { PropsWithChildren } from 'react'

type SectionCardProps = {
  title: string
  description: string
}

export function SectionCard({
  title,
  description,
  children,
}: PropsWithChildren<SectionCardProps>) {
  return (
    <section className="rounded-sm border border-highlight/20 bg-foreground p-2 shadow-sm">
      <h2 className="text-title">{title}</h2>
      <p className="pb-2 text-subtitle">{description}</p>
      {children}
    </section>
  )
}
