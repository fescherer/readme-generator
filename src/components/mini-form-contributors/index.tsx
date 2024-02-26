import { SOCIALTECH } from '@/util/social'
import { useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { List } from './list'

type MiniFormContributorsProps = {
  registerName: string
  label: string
}

export function MiniFormContributors({ registerName, label }: MiniFormContributorsProps) {
  const [url, setURL] = useState('')
  const [social, setSocial] = useState(SOCIALTECH[0].value)

  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: registerName,
  })

  function addBadge() {
    const socialData = SOCIALTECH.find(socialTech => socialTech.value === social)
    if (socialData)
      append({ ...socialData, link: url })
  }

  return (
    <div>
      <div className="flex flex-col gap-1 border-l-2 border-zinc-300 pl-2">
        <select value={social} onChange={e => setSocial(e.target.value)}>
          {SOCIALTECH.map(item => (
            <option key={item.value} value={item.value}>{item.label}</option>
          ))}
        </select>

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
