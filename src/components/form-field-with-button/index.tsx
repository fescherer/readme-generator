'use client'

import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import * as Accordion from '@radix-ui/react-accordion'
import { LucideChevronDown } from 'lucide-react'
import { Form } from './form'

interface FormFieldWithButtonProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  registerName: string
}

export function FormFieldWithButton({ registerName }: FormFieldWithButtonProps) {
  const { control } = useFormContext()

  const { append } = useFieldArray({
    control,
    name: registerName,
  })

  function addField(data: any) {
    append(data)
  }

  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <Accordion.Trigger className="button flex w-full items-center justify-between data-[state=open]:border-zinc-400">
            <span>Add new technology</span>
            <LucideChevronDown size={14} />
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content>
          <Form createNewTechFn={addField} />
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>

  )
}
