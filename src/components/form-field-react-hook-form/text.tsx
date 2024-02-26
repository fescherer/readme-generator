import { useFormContext } from 'react-hook-form'
import { Text as PrimitiveText } from '../form-field/text'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface TextProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string
  registerName: string
}

export function Text({ label, registerName, required, ...props }: TextProps) {
  const { register } = useFormContext()

  return (
    <PrimitiveText label={label} required={required}>
      <input className="input" type="text" id={label} {...register(registerName)} {...props} />
    </PrimitiveText>
  )
}
