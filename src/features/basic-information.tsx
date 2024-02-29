'use client'

import { Text } from '@/components/form-field-react-hook-form/text'

export function BasicInformation() {
  return (
    <div>
      <Text
        label="Github repo (owner + repo name)"
        registerName="basicInformation.repo"
        required
        placeholder="fennectales/markdown-readme-generator"
      />

      <Text
        label="Project name"
        registerName="basicInformation.projectName"
        required
        placeholder="Markdown Readme Generator"
      />

      <Text
        label="Short description"
        registerName="basicInformation.shortDescription"
        required
        placeholder="Generate markdown files for your readme projects in seconds"
      />

      <Text
        label="Project Image"
        registerName="basicInformation.projectImage"
        required
        placeholder="https://imageurl.png"
      />

    </div>
  )
}
