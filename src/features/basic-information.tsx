'use client'

import { Text } from '@/components/form-field-react-hook-form/text'

export function BasicInformation() {
  return (
    <div>
      <Text
        label="Github repo owner"
        registerName="basicInformation.repoOwner"
        required
        placeholder="fennectales"
      />

      <Text
        label="Github repo name"
        registerName="basicInformation.repoName"
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
