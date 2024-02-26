import { DetailedHTMLProps, PropsWithChildren, TextareaHTMLAttributes } from 'react'

interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  label: string
  required?: boolean
}

export function Textarea({ label, required, children, ...props }: PropsWithChildren<TextareaProps>) {
  return (
    <div className="my-2 flex flex-col gap-1">
      <label htmlFor={label} className="text-sm text-zinc-600">
        <span>{label}</span>
        <span className="text-red-500">{required && '*'}</span>
      </label>

      {
        children
          ? children
          : <textarea className="input w-full text-sm" id={label} style={{ minHeight: 100 }} {...props} />
      }
    </div>
  )
}
