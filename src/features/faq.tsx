import { Switch } from '@/components/form-field-react-hook-form/switch'
import { GroupField } from '@/components/form-field/group-field'
import { Text } from '@/components/form-field/text'
import { useState } from 'react'

export function FAQ() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  return (
    <div>
      <Switch defaultChecked registerName="faq.enabled" label="Enable FAQ" />

      <GroupField registerName="faq.faq" label="Add new FAQ" displayType="text" obj={{ question, answer }} btnLabel="Add FAQ">
        <Text
          label="Question"
          onChange={e => setQuestion(e.target.value)}
          value={question}
          placeholder="Which browsers are supported?"
        />

        <Text
          label="Answer"
          onChange={e => setAnswer(e.target.value)}
          value={answer}
          placeholder="Firefox, Chrome and Safari"
        />
      </GroupField>
    </div>
  )
}
