import { FormFieldCheckbox } from '@/components/form-field-checkbox'
import { MiniFormContributors } from '@/components/mini-form-contributors'

export function Contributors() {
  return (
    <div>
      <FormFieldCheckbox label="Hide Contributors" registerName="contributors.isContributorsHide" />
      <MiniFormContributors label2="Display name" label1="Github username" registerName="contributors.contributors" />
    </div>
  )
}
