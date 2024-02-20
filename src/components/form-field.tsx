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
    <div className="m-2 flex flex-col gap-1">
      <label htmlFor={`form field ${label}`} className="text-sm text-zinc-600">
        <span>{label}</span>
        <span className="text-red-500">{required && '*'}</span>
      </label>

      <input className="rounded border border-zinc-300 bg-zinc-50 px-4 py-2 text-zinc-700 outline-none ring-offset-0 transition-all placeholder:text-zinc-300 invalid:border-red-600 hover:border-transparent hover:ring-2 hover:ring-zinc-400 focus:border-transparent focus:ring-2 invalid:focus:ring-red-600" type="text" {...props} {...register(registerName)} />
    </div>
  )
}
