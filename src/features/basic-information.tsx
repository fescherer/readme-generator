'use client'

import { Switch } from '@/components/form-field-react-hook-form/switch'
import { SwitchGroup } from '@/components/form-field-react-hook-form/switch-group'
import { Text } from '@/components/form-field-react-hook-form/text'
import { Textarea } from '@/components/form-field-react-hook-form/textarea'
import { BASIC_BADGES_INFO } from '@/util/basic-badges-info'

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
      <SwitchGroup registerName="basicInformation.badges" switches={BASIC_BADGES_INFO} />
      <Switch defaultChecked label="Table of content" registerName="tableOfContent.enabled" />

      <Text
        label="Doc's link"
        registerName="basicInformation.docsLink"
        placeholder="https://docs.amazing-project.dev"
      />
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
