import { Controller, Path, useFormContext } from 'react-hook-form'
import { Switch as SwitchPrimitive } from '../form-field/switch'
import { TForm } from '@/@types/form'

type SwitchProps = {
  registerName: Path<TForm>
  label: string
  defaultChecked?: boolean
  hint?: string
}

export function Switch({ registerName, label, hint }: SwitchProps) {
  const { control } = useFormContext<TForm>()

  return (
    <Controller
      name={registerName}
      control={control}
      render={({ field }) => (
        <SwitchPrimitive
          label={label}
          checked={!!field.value}
          onCheckedChange={field.onChange}
          hint={hint}
        />
      )}
    />
  )
}
