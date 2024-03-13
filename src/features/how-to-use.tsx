import { Switch } from '@/components/form-field-react-hook-form/switch'
import { GroupField } from '@/components/form-field/group-field'
import { Text } from '@/components/form-field/text'
import { useState } from 'react'

export function HowToUse() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  return (
    <div>
      <Switch registerName="howToUse.enabled" label="Enable How to use" />

      <GroupField registerName="howToUse.items" label="Add new how to use step" btnLabel="Add How to use Step" displayType="text" obj={{ title, text, keyId: Math.random().toString() }}>
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
