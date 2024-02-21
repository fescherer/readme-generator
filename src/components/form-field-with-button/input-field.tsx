'use client'

import { TFormFieldWithButtonValue } from '@/@types/Combobox'
import { DetailedHTMLProps, Dispatch, InputHTMLAttributes, SetStateAction } from 'react'

interface InputFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: TFormFieldWithButtonValue
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

export function InputField({ label, required, value, setValue, ...props }: InputFieldProps) {
  return (
    <div className="my-2 flex flex-col">
      <label htmlFor={`form field ${label}`} className="text-sm text-zinc-600">
        <span>{label.label}</span>
        <span className="text-red-500">{required && '*'}</span>
      </label>

      <div className="my-2 flex items-center gap-2">
        <input
          id={`form field ${label.label}`}
          className="rounded border border-zinc-300 bg-zinc-50 px-4 py-2 text-zinc-700 outline-none ring-offset-0 transition-all placeholder:text-zinc-300 invalid:border-red-600 hover:border-zinc-400 focus:border-transparent focus:ring-2 invalid:focus:ring-red-600"
          type="text"
          {...props}
          onChange={e => setValue(e.target.value)}
          value={value}
        />

      </div>
    </div>
  )
}
