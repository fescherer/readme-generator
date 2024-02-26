import { FormFieldCheckbox } from '@/components/form-field-checkbox'
import { MiniFormFAQ } from '@/components/mini-form-faq'

export function FAQ() {
  return (
    <div>
      <FormFieldCheckbox label="Hide FAQ" registerName="faq.isFAQHide" />
      <MiniFormFAQ label1="Question" label2="Answer" registerName="faq.faq" />
    </div>
  )
}
