'use client'

import * as React from 'react'

import { useMediaQuery } from '@/hooks/use-media-query'

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Combolist } from './combolist'
import { TItem } from '@/@types/Combobox'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { ChoosenList } from './choosen-list'

type FormFieldComboboxProps = {
  items: TItem[]
  registerName: string
}

export function FormFieldCombobox({ items, registerName }: FormFieldComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: registerName,
  })

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="button">
          + Add technology
        </PopoverTrigger>

        <ChoosenList fields={fields} remove={remove} />

        <PopoverContent className="w-[200px] p-0" align="start">
          <Combolist fields={fields} append={append} items={items} setOpen={setOpen} />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="button">
        + Add technology
      </DrawerTrigger>

      <ChoosenList fields={fields} remove={remove} />

      <DrawerContent>
        <div className="mt-4 border-t">
          <Combolist fields={fields} append={append} items={items} setOpen={setOpen} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
