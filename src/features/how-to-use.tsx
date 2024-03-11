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

  const [howToUseStep, setHowToUseStep] = useState('')

  useEffect(() => {
    if (fields.length === 0) {
      append({ label: 'git clone <repo-name>' })
      append({ label: 'pnpm install' })
      append({ label: 'pnpm dev' })
    }
  }, [append, fields.length])

  return (
    <div>
      <Switch defaultChecked registerName="howToUse.enabled" label="Enable How to use" />

      <GroupField registerName={registerName} label="Add new how to use step" btnLabel="Add How to use Step" displayType="title" obj={{ label: howToUseStep }}>
        <Text
          label="How to use Step"
          onChange={e => setHowToUseStep(e.target.value)}
          value={howToUseStep}
          placeholder="pnpm run dev"
        />
      </GroupField>
    </div>
  )
}
