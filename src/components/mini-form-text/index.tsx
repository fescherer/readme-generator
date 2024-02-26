import { useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { List } from './list'

type MiniFormTextProps = {
  registerName: string
  label: string
}

export function MiniFormText({ registerName, label }: MiniFormTextProps) {
  const [howToUseStep, setHowToUseStep] = useState('')

  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: registerName,
  })

  // useEffect(() => {
  //   if (fields.length === 0) {
  //     append({ description: 'git clone <repo-name>' })
  //     append({ description: 'pnpm install' })
  //     append({ description: 'pnpm dev' })
  //   }
  // }, [append, fields.length])

  function addHowToUseStep() {
    append({ description: howToUseStep })
  }

  return (
    <div>
      <div className="flex flex-col gap-1 border-l-2 border-zinc-300 pl-2">
        <div className="my-2 flex flex-col">
          <label htmlFor={`form field ${label}`} className="text-sm text-zinc-600">
            <span>{label}</span>
          </label>

          <div className="my-1 flex items-center gap-2">
            <input
              id={`form field ${label}`}
              className="input"
              type="text"
              placeholder="Eg. npm run dev"
              onChange={e => setHowToUseStep(e.target.value)}
              value={howToUseStep}
            />

          </div>
        </div>

        <button type="button" className="button-fill w-full whitespace-nowrap text-sm" onClick={addHowToUseStep}>
          Add how to use step
        </button>
      </div>

      <List fields={fields} remove={remove} />
    </div>
  )
}
