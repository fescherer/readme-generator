import { PropsWithChildren, ReactNode } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { LucideAlertCircle, LucideX } from 'lucide-react'

type SectionCardProps = {
  title: string
  description: string
  helpPopover?: ReactNode
}

export function SectionCard({
  title,
  description,
  children,
  helpPopover,
}: PropsWithChildren<SectionCardProps>) {
  return (
    <section className="relative rounded-sm border border-highlight/20 bg-foreground p-2 shadow-sm">
      <h2 className="text-title">{title}</h2>

      {
      helpPopover && (
        <PopoverPrimitive.Root>
          <PopoverPrimitive.Trigger className="absolute right-2 top-2 text-slate-400 transition-colors hover:text-slate-500 focus:ring-1 focus:ring-slate-500">
            <LucideAlertCircle size={20} />
          </PopoverPrimitive.Trigger>

          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              sideOffset={5}
              className="z-50 max-w-64 rounded border bg-background px-4 pb-4 pt-8 text-form-value shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
            >
              {helpPopover}
              <button className="not-sr-only" type="button" />

              <PopoverPrimitive.Close
                className="absolute right-1 top-1 inline-flex size-6 cursor-pointer items-center justify-center rounded-full text-subtitle outline-none transition-colors hover:bg-red-100 focus:ring-1 focus:ring-red-300"
                aria-label="Close"
              >
                <LucideX size={14} />
              </PopoverPrimitive.Close>

              <PopoverPrimitive.Arrow className="fill-white" />

            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>

        </PopoverPrimitive.Root>
      )
    }

      <p className="pb-2 text-subtitle">{description}</p>
      {children}
    </section>
  )
}
