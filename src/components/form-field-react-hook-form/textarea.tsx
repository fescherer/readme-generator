import { Path, useFormContext } from 'react-hook-form'
import { Text as PrimitiveTextarea } from '../form-field/text'
import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import { TForm } from '@/@types/form'

interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  label: string
  registerName: Path<TForm>
}

export function Textarea({ label, registerName, required, ...props }: TextareaProps) {
  const { register } = useFormContext<TForm>()

  return (
    <PrimitiveTextarea label={label} required={required}>
      <textarea
        id={label}
        className="input w-full text-sm"
        style={{ minHeight: 100 }}
        {...register(registerName)}
        {...props}
      />
    </PrimitiveTextarea>
  )
}
