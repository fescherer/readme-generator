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
    <section className="py-2">
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="text-base text-zinc-800">{description}</p>
      {children}
    </section>
  )
}
