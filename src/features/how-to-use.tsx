import { FormFieldCheckbox } from '@/components/form-field-checkbox'
import { MiniFormText } from '@/components/mini-form-text'

export function HowToUse() {
  return (
    <div>
      <FormFieldCheckbox label="Hide How to use Step" registerName="howToUse.isHowToUseHide" />
      <MiniFormText label="How to use Step" registerName="howToUse.items" />
    </div>
  )
}
