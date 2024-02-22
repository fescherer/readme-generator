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

      <div className="my-1 flex items-center gap-2">
        <input
          id={`form field ${label.label}`}
          className="input"
          type="text"
          {...props}
          onChange={e => setValue(e.target.value)}
          value={value}
        />

      </div>
    </div>
  )
}
