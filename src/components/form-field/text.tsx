import { DetailedHTMLProps, InputHTMLAttributes, PropsWithChildren } from 'react'

interface TextProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string
  required?: boolean
}

export function Text({ label, required, children, ...props }: PropsWithChildren<TextProps>) {
  return (
    <div className="my-2 flex flex-col gap-1">
      <label htmlFor={label} className="text-sm text-zinc-600">
        <span>{label}</span>
        <span className="text-red-500">{required && '*'}</span>
      </label>

      {
        children
          ? children
          : <input className="input" type="text" id={label} {...props} />
      }
    </div>
  )
}
