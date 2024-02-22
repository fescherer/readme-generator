import { FormFieldCheckbox } from '@/components/form-field-checkbox'
import { FormFieldWithSideButton } from '@/components/form-field-with-side-button'
import { SOCIALTECH } from '@/util/social'

export function ContactUs() {
  return (
    <div>
      <FormFieldCheckbox label="Hide Contact Us" registerName="contactUs.isContactUsHide" />

      {
        SOCIALTECH.map(social => (
          <FormFieldWithSideButton key={social.value} badge={social.badge} value={social.value} registerName={`contactUs.${social.value}`} label={social.label} />
        ))
      }
    </div>
  )
}
