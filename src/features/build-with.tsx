import { FormFieldCheckbox } from '@/components/form-field-checkbox'
import { FormFieldCombobox } from '@/components/form-field-combobox'
import { FormFieldWithButton } from '@/components/form-field-with-button'
import { TECHNOLOGIES } from '@/util/tech-stack'

export function BuildWith() {
  return (
    <div className="flex flex-col gap-2">
      <FormFieldCheckbox label="Hide Build With" registerName="buildWith.isBuildWithHide" />
      <FormFieldCombobox registerName="buildWith.technologies" items={TECHNOLOGIES} />

      <div className="mt-4">
        <FormFieldWithButton
          registerName="buildWith.otherTechnologies"
        />
      </div>
    </div>
  )
}
