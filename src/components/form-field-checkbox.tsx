'use client'

import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Switch } from '@/components/ui/switch'
import { useFormContext } from 'react-hook-form'

interface FormFieldCheckboxProps {
  label: string
  registerName: string
}

export function FormFieldCheckbox({ label, registerName }: FormFieldCheckboxProps) {
  const { control } = useFormContext()
  return (
    <FormField
      control={control}
      name={registerName}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between rounded-lg p-2">
          <div className="space-y-0.5">
            <FormLabel>{label}</FormLabel>
          </div>

          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}
