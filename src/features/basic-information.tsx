'use client'

import { Switch } from '@/components/form-field-react-hook-form/switch'
import { Text } from '@/components/form-field-react-hook-form/text'
import { Textarea } from '@/components/form-field-react-hook-form/textarea'

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
        label="Project Image"
        registerName="basicInformation.projectImage"
        required
        placeholder="https://imageurl.png"
      />

      <Text
        label="Short description"
        registerName="basicInformation.shortDescription"
        required
        placeholder="Generate markdown files for your readme projects in seconds"
      />

      <Textarea registerName="basicInformation.description" label="Project description" placeholder="This project is a readme generator that help you create nice readme files for your projects easy peasy" required />
      <Switch defaultChecked label="Stars badge" registerName="basicInformation.hasStarsBadge" />
      <Switch defaultChecked label="Contributors badge" registerName="basicInformation.hasContributorsBadge" />
      <Switch defaultChecked label="Forks badges" registerName="basicInformation.hasForksBadge" />
      <Switch defaultChecked label="License badge" registerName="basicInformation.hasLicenseBadge" hint="https://choosealicense.com" />
      <Switch defaultChecked label="How to Contribute badge" registerName="basicInformation.hasContributing" hint="https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors" />
      <Switch defaultChecked label="Issues badge" registerName="basicInformation.hasIssuesBadge" />
      <Switch defaultChecked label="Table of content" registerName="tableOfContent.enabled" />
    </div>
  )
}

// TODO A GIST WITH EXAMPLES HOW TO CREATE A CONTRIBUTING.MD FILE
// Distributed under the MIT License. See LICENSE for more information.

// Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contribution you make would be appreciated.

//     Fork the Project
//     Create your Feature Branch (git checkout -b feature/AmazingFeature)
//     Commit your Changes (git commit -m 'Add some AmazingFeature')
//     Push to the Branch (git push origin feature/AmazingFeature)
//     Open a Pull Request

// 1. Fork the Project 2. Create your Feature Branch (git checkout -b feature/AmazingFeature) 3. Commit your Changes (git commit -m 'Add some AmazingFeature') 4. Push to the Branch (git push origin feature/AmazingFeature) 5. Open a Pull Request
