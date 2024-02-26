import { FormFieldCheckbox } from '@/components/form-field-checkbox'
import { MiniFormContributors } from '@/components/mini-form-contributors'

export function SpecialThanks() {
  return (
    <div>
      <FormFieldCheckbox label="Hide Special Thanks" registerName="specialThanks.isSpecialThanksHide" />
      <MiniFormContributors label2="Display name" label1="Github username" registerName="specialThanks.specialThanks" />
    </div>
  )
}
