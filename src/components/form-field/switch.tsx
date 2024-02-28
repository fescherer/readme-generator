import * as SwitchPrimitives from '@radix-ui/react-switch'
import React from 'react'

interface CheckboxProps {
  label: string
  className?: string
}
const Switch = React.forwardRef<
React.ElementRef<typeof SwitchPrimitives.Root>,
React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & CheckboxProps
>(({ label }, ref) => (
  <div className="my-4 flex flex-row items-center justify-between rounded-lg">
    <label className="w-full text-sm" htmlFor={label}>{label}</label>

    <SwitchPrimitives.Root
      id={label}
      className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-highlight/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-transparent data-[state=checked]:bg-form-value data-[state=unchecked]:bg-foreground-2"
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className="pointer-events-none block size-5 rounded-full bg-foreground-2 ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-form-placeholder"
      />
    </SwitchPrimitives.Root>
  </div>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
