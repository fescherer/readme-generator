import { LucideChevronDown, LucideX } from 'lucide-react'
import { UseFieldArrayRemove } from 'react-hook-form'
import * as Accordion from '@radix-ui/react-accordion'

type ListProps = {
  fields: any
  remove: UseFieldArrayRemove
}

export function List({ fields, remove }: ListProps) {
  return (
    <Accordion.Root collapsible type="single" className="mt-4 divide-y overflow-hidden rounded border border-zinc-400">
      {fields.map((field: any) => (
        <div key={field.question} className="flex w-full">
          <Accordion.Item value={field.question} className="w-full border-r border-zinc-400">
            <Accordion.Header>
              <Accordion.Trigger className="group flex h-[45px] w-full flex-1 cursor-pointer items-center justify-between bg-zinc-50 px-5 text-[15px] leading-none text-zinc-700 shadow-[0_1px_0] outline-none transition-all hover:bg-zinc-100">
                <span>{field.question}</span>
                <LucideChevronDown size={14} />
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="overflow-hidden bg-zinc-50 px-5 text-sm text-zinc-600 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              {field.answer}
            </Accordion.Content>
          </Accordion.Item>

          <button className="rounded bg-slate-100 p-1 transition-all hover:text-zinc-900" type="button" onClick={() => remove(fields.findIndex((item: any) => item.question === field.question))}>
            <LucideX size={16} />
          </button>
        </div>
      ))}
    </Accordion.Root>

  )
}
