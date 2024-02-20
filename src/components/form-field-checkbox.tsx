'use client'

import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface FormFieldCheckboxProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string
  registerName: string
}

export function FormFieldCheckbox({ label, registerName, ...props }: FormFieldCheckboxProps) {
  const { register } = useFormContext()

  return (
    <div className="m-2 flex justify-between gap-1">
      <label htmlFor={`checkbox ${label}`}>Hide summary</label>
      <input type="checkbox" className="accent-slate-700" {...props} {...register(registerName)} />
    </div>
  )
}
