/* eslint-disable react/no-unknown-property */
import { TItemImage } from '@/@types/item'
import { Command } from 'cmdk'
import { Search } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

type SelectListProps = {
  items: TItemImage[]
  setOpen: Dispatch<SetStateAction<boolean>>
  selectItems: TItemImage[]
  // eslint-disable-next-line no-unused-vars
  append: (item: TItemImage) => void
}

export function SelectList({ items, setOpen, selectItems, append }: SelectListProps) {
  return (
    <Command className="flex size-full flex-col overflow-hidden rounded-md bg-background text-form-value">
      <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
        <Search className="mr-2 size-4 shrink-0 opacity-50" />

        <Command.Input
          className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-form-placeholder disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden">
        <Command.Empty className="py-6 text-center text-sm">No results found.</Command.Empty>

        <Command.Group>
          {items.map(status => (
            <Command.Item
              className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-highlight/20 aria-selected:text-form-value data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              key={status.keyId}
              value={status.keyId}
              onSelect={(value) => {
                const item = items.find(item => item.keyId === value)
                const isAlreadyAdded = selectItems.find(item => item.keyId === value)
                if (item && !isAlreadyAdded) append(item)
                setOpen(false)
              }}
              disabled={!!selectItems.find(item => item.keyId === status.keyId)}
            >
              {status.alt}
            </Command.Item>
          ))}

        </Command.Group>
      </Command.List>
    </Command>

  )
}
