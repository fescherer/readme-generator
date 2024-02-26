import { Textarea } from '@/components/form-field-react-hook-form/textarea'

export function AboutProject() {
  return (
    <Textarea registerName="aboutProject.description" label="Project description" required />
  )
}
