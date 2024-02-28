import { Switch } from '@/components/form-field-react-hook-form/switch'
import { GroupField } from '@/components/form-field/group-field'
import { Text } from '@/components/form-field/text'
import { useState } from 'react'

export function HowToUse() {
  const [howToUseStep, setHowToUseStep] = useState('')

  // useEffect(() => {
  //   if (fields.length === 0) {
  //     append({ description: 'git clone <repo-name>' })
  //     append({ description: 'pnpm install' })
  //     append({ description: 'pnpm dev' })
  //   }
  // }, [append, fields.length])

  return (
    <div>
      <Switch registerName="howToUse.isHide" label="Hide Gif Print" />

      <GroupField registerName="howToUse.howToUse" label="Add new how to use step" btnLabel="Add How to use Step" displayType="title" obj={{ label: howToUseStep }}>
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
