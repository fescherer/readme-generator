import { TItem } from '@/@types/Combobox'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import React from 'react'
import { FieldValues, UseFieldArrayAppend } from 'react-hook-form'

type CombolistProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  items: TItem[]
  fields: Record<'id', string>[]
  append: UseFieldArrayAppend<FieldValues, string>
}

export function Combolist({
  setOpen,
  items,
  fields,
  append,
}: CombolistProps) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />

      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup>
          {items.map(status => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                const item = items.find(item => item.value === value)
                // @ts-ignore
                const isAlreadyAdded = fields.find(item => item.value === value)
                if (item && !isAlreadyAdded) append(item)
                setOpen(false)
              }}
              // @ts-ignore
              disabled={!!fields.find(item => item.value === status.value)}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>

  )
}
