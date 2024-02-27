import { MultiSelectBadge } from '@/components/form-field-react-hook-form/multiselect-badge'
import { Switch } from '@/components/form-field-react-hook-form/switch'
import { FormFieldWithButton } from '@/components/form-field-with-button'
import { TECHNOLOGIES } from '@/util/tech-stack'

export function BuildWith() {
  return (
    <div className="flex flex-col gap-2">
      <Switch registerName="buildWith.isHide" label="Hide Build With" />
      <MultiSelectBadge items={TECHNOLOGIES} registerName="buildWith.technologies" triggerLabel="+ add tecnology" />

      <div className="mt-4">
        <FormFieldWithButton
          label="Add new technology"
          registerName="buildWith.otherTechnologies"
        />
      </div>
    </div>
  )
}
