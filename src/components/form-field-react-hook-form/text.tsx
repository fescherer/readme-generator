import { Path, useFormContext } from 'react-hook-form'
import { Text as PrimitiveText } from '../form-field/text'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { TForm } from '@/@types/form'

interface TextProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string
  registerName: Path<TForm>
}

export function Text({ label, registerName, required, ...props }: TextProps) {
  const { register } = useFormContext<TForm>()

  return (
    <PrimitiveText label={label} required={required}>
      <input className="input" type="text" id={label} {...register(registerName)} {...props} />
    </PrimitiveText>
  )
}
