'use client'

import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface FormFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string
  required?: boolean
  registerName: string
}

export function FormField({ label, registerName, required, ...props }: FormFieldProps) {
  const { register } = useFormContext()

  return (
    <div className="my-2 flex flex-col gap-1">
      <label htmlFor={`form field ${label}`} className="text-sm text-zinc-600">
        <span>{label}</span>
        <span className="text-red-500">{required && '*'}</span>
      </label>

      <input className="input" type="text" {...props} {...register(registerName)} />
    </div>
  )
}
