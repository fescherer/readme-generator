import { TItemImage } from '@/@types/item'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

type SelectProps = {
  value: TItemImage
  // eslint-disable-next-line no-unused-vars
  changeValue: (item: string) => void
  fields: TItemImage[]
}

export function Select({ changeValue, value, fields }: SelectProps) {
  return (
    <SelectPrimitive.Root value={value.keyId} onValueChange={value => changeValue(value)}>
      <SelectPrimitive.Trigger
        className="input flex w-full items-center justify-between text-sm"
      >
        <SelectPrimitive.Value placeholder="Select a value..." />

        <SelectPrimitive.Icon className="text-form-value">
          <ChevronsUpDown size={14} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className="overflow-hidden rounded-md border border-highlight/20 bg-foreground-2">
          <SelectPrimitive.ScrollUpButton className="text-form-value">
            <ChevronUp size={14} />
          </SelectPrimitive.ScrollUpButton>

          <SelectPrimitive.Viewport className="p-2">
            <SelectPrimitive.Group>
              {
                fields.map(item => (
                  <SelectPrimitive.Item
                    key={item.keyId}
                    value={item.keyId}
                    className="relative flex cursor-pointer select-none items-center rounded-sm bg-background py-2 pl-6 pr-9 text-form-value leading-none data-[disabled]:pointer-events-none data-[highlighted]:bg-highlight/20 data-[disabled]:text-form-placeholder data-[highlighted]:outline-none"
                  >
                    <SelectPrimitive.ItemText>{item.alt}</SelectPrimitive.ItemText>

                    <SelectPrimitive.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
                      <Check size={14} />
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                ))
              }
            </SelectPrimitive.Group>

          </SelectPrimitive.Viewport>

          <SelectPrimitive.ScrollDownButton className="text-form-value">
            <ChevronDown size={14} />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
