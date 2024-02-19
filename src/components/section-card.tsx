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
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </section>
  )
}
