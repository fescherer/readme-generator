import { useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { List } from './list'

type MiniFormGifPrintProps = {
  registerName: string
  label1: string
  label2: string
}

export function MiniFormGifPrint({ registerName, label1, label2 }: MiniFormGifPrintProps) {
  const [url, setURL] = useState('')
  const [alt, setAlt] = useState('')

  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: registerName,
  })

  function addImage() {
    append({ url, alt })
  }

  return (
    <div>
      <div className="flex flex-col gap-1 border-l-2 border-zinc-300 pl-2">

        <div className="my-2 flex flex-col">
          <label htmlFor={`form field ${label1}`} className="text-sm text-zinc-600">
            <span>{label1}</span>
          </label>

          <div className="my-1 flex items-center gap-2">
            <input
              id={`form field ${label1}`}
              className="input"
              type="text"
              placeholder="Eg. Url image"
              onChange={e => setURL(e.target.value)}
              value={url}
            />

          </div>
        </div>

        <div className="my-2 flex flex-col">
          <label htmlFor={`form field ${label2}`} className="text-sm text-zinc-600">
            <span>{label2}</span>
          </label>

          <div className="my-1 flex items-center gap-2">
            <input
              id={`form field ${label2}`}
              className="input"
              type="text"
              placeholder="Eg. Alt image"
              onChange={e => setAlt(e.target.value)}
              value={alt}
            />

          </div>
        </div>

        <button type="button" className="button-fill w-full whitespace-nowrap text-sm" onClick={addImage}>
          Add Gif/Print
        </button>
      </div>

      <List fields={fields} remove={remove} />
    </div>
  )
}
