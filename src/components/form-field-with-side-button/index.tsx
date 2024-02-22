import { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { List } from './list'

interface FormFieldWithSideButtonProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string
  required?: boolean
  registerName: string
  badge: string
  value: string
}

export function FormFieldWithSideButton({ label, required, registerName, badge, ...props }: FormFieldWithSideButtonProps) {
  const { control } = useFormContext()
  const [inputText, setInputText] = useState('')

  const { fields, append, remove } = useFieldArray({
    control,
    name: registerName,
  })

  function addTech() {
    append({ label, value: label, link: inputText, badge })
  }

  return (
    <div className="my-2 flex flex-col gap-1">
      <label htmlFor={`form field ${label}`} className="text-sm text-zinc-600">
        <span>{label}</span>
        <span className="text-red-500">{required && '*'}</span>
      </label>

      <div className="flex gap-2">
        <input className="input placeholder:text-sm" placeholder="https://example.app" onChange={e => setInputText(e.target.value)} type="text" {...props} value={inputText} />
        <button onClick={addTech} type="button" className="button-fill">Add</button>
      </div>

      <List fields={fields} remove={remove} />
    </div>
  )
}
