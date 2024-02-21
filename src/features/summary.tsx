import { FormFieldCheckbox } from '@/components/form-field-checkbox'

export function Summary() {
  return (
    <FormFieldCheckbox label="Hide summary" registerName="summary.isSummaryHide" />
  )
}
