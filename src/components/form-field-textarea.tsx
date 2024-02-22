import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface FormFieldTextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  label: string
  required?: boolean
  registerName: string
}

export function FormFieldTextarea({ label, required, registerName }: FormFieldTextareaProps) {
  const { register } = useFormContext()

  return (
    <div className="my-2 flex flex-col gap-1">
      <label htmlFor={`form field ${label}`} className="text-sm text-zinc-600">
        <span>{label}</span>
        <span className="text-red-500">{required && '*'}</span>
      </label>

      <textarea className="input w-full text-sm" style={{ minHeight: 100 }} {...register(registerName)} />
    </div>
  )
}
