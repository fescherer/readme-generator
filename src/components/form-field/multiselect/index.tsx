'use client'

import { TSelect } from '@/@types/select'
import { useState } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { SelectList } from './selectList'
import { Drawer } from 'vaul'

type SelectProps = {
  items: TSelect[]
  triggerLabel: string
  data: TSelect[]
  // eslint-disable-next-line no-unused-vars
  setDataAppend: (item: TSelect) => void
}

export function Multiselect({ items, triggerLabel, data, setDataAppend }: SelectProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="hidden md:block">
        <PopoverPrimitive.Root>
          <PopoverPrimitive.Trigger className="button-fill w-full">{triggerLabel}</PopoverPrimitive.Trigger>

          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              className="z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
            >
              <SelectList selectItems={data} append={setDataAppend} items={items} setOpen={setOpen} />
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>

        </PopoverPrimitive.Root>
      </div>

      <div className="block md:hidden">
        <Drawer.Root open={open} onOpenChange={setOpen}>
          <Drawer.Trigger className="button-fill">
            {triggerLabel}
          </Drawer.Trigger>

          <Drawer.Portal>
            <Drawer.Overlay />

            <Drawer.Content
              className="fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background"
            >
              <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />

              <div className="mt-4 border-t">
                <SelectList selectItems={data} append={setDataAppend} items={items} setOpen={setOpen} />
              </div>
            </Drawer.Content>
          </Drawer.Portal>

        </Drawer.Root>
      </div>
    </>
  )
}
