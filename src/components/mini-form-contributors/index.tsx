import { useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { List } from './list'

type MiniFormContributorsProps = {
  registerName: string
  label1: string
  label2: string
}

export function MiniFormContributors({ registerName, label1, label2 }: MiniFormContributorsProps) {
  const [githubProfile, setGithubProfile] = useState('')
  const [name, setName] = useState('')

  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: registerName,
  })

  function addBadge() {
    append({ github: githubProfile, name: name })
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
              placeholder="Eg. devAnderson"
              onChange={e => setGithubProfile(e.target.value)}
              value={githubProfile}
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
              placeholder="Eg. Anderson Silva"
              onChange={e => setName(e.target.value)}
              value={name}
            />

          </div>
        </div>

        <button type="button" className="button-fill w-full whitespace-nowrap text-sm" onClick={addBadge}>
          Add contributor
        </button>
      </div>

      <List fields={fields} remove={remove} />
    </div>
  )
}
