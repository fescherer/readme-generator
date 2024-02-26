import { FormFieldCombobox } from '@/components/form-field-combobox'
import { Switch } from '@/components/form-field-react-hook-form/switch'
import { FormFieldWithButton } from '@/components/form-field-with-button'
import { TECHNOLOGIES } from '@/util/tech-stack'

export function BuildWith() {
  return (
    <div className="flex flex-col gap-2">
      <Switch registerName="buildWith.isHide" label="Hide Build With" />
      <FormFieldCombobox registerName="buildWith.technologies" items={TECHNOLOGIES} />

      <div className="mt-4">
        <FormFieldWithButton
          label="Add new technology"
          registerName="buildWith.otherTechnologies"
        />
      </div>
    </div>
  )
}
