import { useState } from 'react'
import { InputField } from './input-field'

type FormpProps = {
  // eslint-disable-next-line no-unused-vars
  createNewTechFn: (data: any) => void
}

export function Form({ createNewTechFn }: FormpProps) {
  const [alt, setAlt] = useState('')
  const [link, setLink] = useState('')
  const [badge, setBadge] = useState('')

  function onSubmit() {
    createNewTechFn({
      alt,
      link,
      badge,
    })
  }

  return (
    <div>
      <InputField label={{ label: 'Alt Name', id: 'alt' }} value={alt} setValue={setAlt} required />
      <InputField label={{ label: 'Badge Link', id: 'badge' }} value={link} setValue={setLink} required />
      <InputField label={{ label: 'Doc link', id: 'doc' }} value={badge} setValue={setBadge} required />

      <button type="button" className="button w-full whitespace-nowrap text-sm" onClick={onSubmit}>
        Add technology
      </button>
    </div>
  )
}
