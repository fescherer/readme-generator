import { Textarea } from '@/components/form-field-react-hook-form/textarea'

export function AboutProject() {
  return (
    <Textarea registerName="aboutProject.description" label="Project description" placeholder="This project is a readme generator that help you create nice readme files for your projects easy peasy" required />
  )
}
