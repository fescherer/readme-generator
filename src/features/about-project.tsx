import { FormFieldTextarea } from '@/components/form-field-textarea'

export function AboutProject() {
  return (
    <FormFieldTextarea registerName="aboutProject.description" label="Project description" required />
  )
}
