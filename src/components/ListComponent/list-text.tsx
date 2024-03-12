import { LucideChevronDown, LucideX } from 'lucide-react'
import { UseFieldArrayRemove } from 'react-hook-form'
import * as Accordion from '@radix-ui/react-accordion'
import { TBadgeText } from '@/@types/badge-text'

type ListProps = {
  fields: any
  remove: UseFieldArrayRemove
}

export function ListText({ fields, remove }: ListProps) {
  return (
    <Accordion.Root collapsible type="single" className="mt-4 flex flex-col gap-2 overflow-hidden rounded">
      {fields.map((field: TBadgeText) => (
        <div key={field.id} className="flex w-full">
          <Accordion.Item value={field.id} className="w-full overflow-hidden rounded border border-zinc-300 ">
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full flex-1 cursor-pointer items-center justify-between bg-zinc-50 px-5 py-4 text-form-value leading-none outline-none transition-all hover:bg-zinc-100">
                <span>{field.title}</span>
                <LucideChevronDown size={14} />
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="overflow-hidden bg-zinc-50 px-5 text-form-value data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              {field.text}
            </Accordion.Content>
          </Accordion.Item>

          <button className="rounded bg-slate-100 p-2 transition-all hover:text-form-hightlight" type="button" onClick={() => remove(fields.findIndex((item: TBadgeText) => item.id === field.id))}>
            <LucideX size={16} />
          </button>
        </div>
      ))}
    </Accordion.Root>

  )
}
