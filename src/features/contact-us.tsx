import { FormFieldCheckbox } from '@/components/form-field-checkbox'
import { MiniForm } from '@/components/mini-form'

export function ContactUs() {
  return (
    <div>
      <FormFieldCheckbox label="Hide Contact Us" registerName="contactUs.isContactUsHide" />
      <MiniForm label="Profile's url" registerName="contactUs.socialContact" />
    </div>
  )
}
