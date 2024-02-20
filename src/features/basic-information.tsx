import { FormField } from '@/components/form-field'

export function BasicInformation() {
  return (
    <div>
      <FormField registerName="basicInformation.repoOwner" label="Github repo owner" required />
      <FormField registerName="basicInformation.repoName" label="Github repo name" required />
      <FormField registerName="basicInformation.shortDescription" label="Short description" required />
      <FormField registerName="basicInformation.projectImage" label="Project Image" required />
    </div>
  )
}
