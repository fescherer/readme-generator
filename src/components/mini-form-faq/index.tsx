import { useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { List } from './list'

type MiniFormFAQProps = {
  registerName: string
  label1: string
  label2: string
}

export function MiniFormFAQ({ registerName, label1, label2 }: MiniFormFAQProps) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: registerName,
  })

  function addBadge() {
    append({ question, answer })
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
              placeholder="Eg. Which browsers are supported?"
              onChange={e => setQuestion(e.target.value)}
              value={question}
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
              placeholder="Eg. Firefox, Chrome and Safari"
              onChange={e => setAnswer(e.target.value)}
              value={answer}
            />

          </div>
        </div>

        <button type="button" className="button-fill w-full whitespace-nowrap text-sm" onClick={addBadge}>
          Add FAQ
        </button>
      </div>

      <List fields={fields} remove={remove} />
    </div>
  )
}
