import { SOCIALTECH } from '@/util/social'
import { useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { List } from './list'
import { TSelect } from '@/@types/select'
import { Select } from '../form-field/select'

type MiniFormProps = {
  registerName: string
  label: string
}

export function MiniForm({ registerName, label }: MiniFormProps) {
  const [url, setURL] = useState('')
  const [social, setSocial] = useState<TSelect>(SOCIALTECH[0])

  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: registerName,
  })

  function addBadge() {
    if (social)
      append({ ...social, link: url })
  }

  function handleSocial(item: string) {
    const socialObj = SOCIALTECH.find(social => social.value === item)
    if (socialObj) setSocial(socialObj)
  }

  return (
    <div>
      <div className="flex flex-col gap-1 border-l-2 border-zinc-300 pl-2">

        <Select changeValue={handleSocial} fields={SOCIALTECH} value={social} />

        <div className="my-2 flex flex-col">
          <label htmlFor={`form field ${label}`} className="text-sm text-zinc-600">
            <span>{label}</span>
          </label>

          <div className="my-1 flex items-center gap-2">
            <input
              id={`form field ${label}`}
              className="input"
              type="text"
              onChange={e => setURL(e.target.value)}
              value={url}
            />

          </div>
        </div>

        <button type="button" className="button-fill w-full whitespace-nowrap text-sm" onClick={addBadge}>
          Add contact
        </button>
      </div>

      <List fields={fields} remove={remove} />
    </div>
  )
}
