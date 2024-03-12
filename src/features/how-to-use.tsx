import { Switch } from '@/components/form-field-react-hook-form/switch'
import { GroupField } from '@/components/form-field/group-field'
import { Text } from '@/components/form-field/text'
import { useEffect, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

export function HowToUse() {
  const registerName = 'howToUse.howToUse'

  const { control } = useFormContext()
  const { fields, append } = useFieldArray({
    control,
    name: registerName,
  })

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    if (fields.length === 0) {
      append({ title: 'Clone repository', text: 'git clone <repo-name>', id: Math.random().toString() })
      append({ title: 'Install dependencies', text: 'pnpm install', id: Math.random().toString() })
      append({ title: 'Run project', text: 'pnpm dev', id: Math.random().toString() })
    }
  }, [append, fields.length])

  return (
    <div>
      <Switch defaultChecked registerName="howToUse.enabled" label="Enable How to use" />

      <GroupField registerName={registerName} label="Add new how to use step" btnLabel="Add How to use Step" displayType="title" obj={{ title, text, id: Math.random().toString() }}>
        <Text
          label="Description about the step"
          onChange={e => setTitle(e.target.value)}
          value={title}
          placeholder="Install dependencies"
        />

        <Text
          label="Step's code"
          onChange={e => setText(e.target.value)}
          value={text}
          placeholder="pnpm install"
        />
      </GroupField>
    </div>
  )
}
