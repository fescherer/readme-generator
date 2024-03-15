import { Switch } from '@/components/form-field-react-hook-form/switch'
import { GroupField } from '@/components/form-field/group-field'
import { Text } from '@/components/form-field/text'
import { useState } from 'react'

export function FAQ() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  return (
    <div>
      <Switch registerName="faq.enabled" label="Enable FAQ" />

      <GroupField registerName="faq.items" label="Add new FAQ" displayType="text" obj={{ title, text, keyId: Math.random().toString() }} btnLabel="Add FAQ">
        <Text
          label="Question"
          onChange={e => setTitle(e.target.value)}
          value={title}
          placeholder="Which browsers are supported?"
        />

        <Text
          label="Answer"
          onChange={e => setText(e.target.value)}
          value={text}
          placeholder="Firefox, Chrome and Safari"
        />
      </GroupField>
    </div>
  )
}
