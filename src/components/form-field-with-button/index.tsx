'use client'

import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import * as Accordion from '@radix-ui/react-accordion'
import { LucideChevronDown } from 'lucide-react'
import { Form } from './form'
import { List } from './list'

interface FormFieldWithButtonProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  registerName: string
}

export function FormFieldWithButton({ registerName }: FormFieldWithButtonProps) {
  const { control } = useFormContext()

  const { fields, append, remove } = useFieldArray({
    control,
    name: registerName,
  })

  function addField(data: any) {
    append(data)
  }

  return (
    <div className="rounded ">
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Header>
            <Accordion.Trigger className="button-outlined flex w-full items-center justify-between data-[state=open]:border-zinc-400">
              <span>Add new technology</span>
              <LucideChevronDown size={14} />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="border-l-2 border-zinc-300 pl-2">
            <Form createNewTechFn={addField} />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <div className="mt-4">
        <List fields={fields} remove={remove} />
      </div>
    </div>
  )
}
