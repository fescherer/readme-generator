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
    <section className="rounded-sm border border-slate-200 bg-slate-100 p-2 shadow-sm">
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="pb-2 text-base text-zinc-800">{description}</p>
      {children}
    </section>
  )
}
