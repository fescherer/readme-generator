import { Controller, useFormContext } from 'react-hook-form'
import { Switch as SwitchPrimitive } from '../form-field/swich'

type SwitchProps = {
  registerName: string
  label: string
}

export function Switch({ registerName, label }: SwitchProps) {
  const { control } = useFormContext()
  return (
    <Controller
      name={registerName}
      control={control}
      render={({ field }) => (
        <SwitchPrimitive
          label={label}
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      )}
    />
  )
}
