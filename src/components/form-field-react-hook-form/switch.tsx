import { Controller, useFormContext } from 'react-hook-form'
import { Switch as SwitchPrimitive } from '../form-field/switch'
import { useEffect } from 'react'

type SwitchProps = {
  registerName: string
  label: string
  defaultChecked?: boolean
  hint?: string
}

export function Switch({ registerName, label, defaultChecked, hint }: SwitchProps) {
  const { control, setValue } = useFormContext()

  useEffect(() => {
    if (defaultChecked) setValue(registerName, true)
  }, [defaultChecked, registerName, setValue])

  return (
    <Controller
      name={registerName}
      control={control}
      render={({ field }) => (
        <SwitchPrimitive
          label={label}
          checked={field.value}
          onCheckedChange={field.onChange}
          hint={hint}
        />
      )}
    />
  )
}
