import { DetailedHTMLProps, InputHTMLAttributes, PropsWithChildren, ReactNode } from 'react'

interface TextProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string | ReactNode
  required?: boolean
}

export function Text({ label, required, children, ...props }: PropsWithChildren<TextProps>) {
  return (
    <div className="my-2 flex flex-col gap-1">
      <label htmlFor={label?.toString()} className="text-form-placeholder">
        <span>{label}</span>
        <span className="text-red-500">{required && '*'}</span>
      </label>

      {
        children
          ? children
          : <input className="input" type="text" id={label?.toString()} {...props} />
      }
    </div>
  )
}
