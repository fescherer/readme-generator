import { FieldValues } from 'react-hook-form'

export function getProjectInfo(form: FieldValues) {
  const field = form?.projectInfo
  if (!field || field?.isHide) return ``
  else
    return `
<!-- **********************🐲 PROJECT INFO 🐲********************** -->

<a name="contact"></a>

## 💬 Project Info 💬

${field?.license?.length > 0 ? `[![${field?.license?.[0]?.label}][${field?.license?.[0]?.badge}]][${field?.license?.[0]?.link}]` : ''}
${field?.contribute?.length > 0 ? `[![${field?.contribute?.[0]?.label}][${field?.contribute?.[0]?.badge}]][${field?.contribute?.[0]?.link}]` : ''}

${field?.descriptionLicense
? `
### LICENSE

${field?.descriptionLicense}
`
: ''}

${field?.descriptionContribute
? `
### How to contribute

${field?.descriptionContribute}
`
: ''}

<p align="right">(<a href="#readme-top">back to top</a>)</p>
`
}

// TODO
// Distributed under the MIT License. See LICENSE for more information.

// Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contribution you make would be appreciated.

//     Fork the Project
//     Create your Feature Branch (git checkout -b feature/AmazingFeature)
//     Commit your Changes (git commit -m 'Add some AmazingFeature')
//     Push to the Branch (git push origin feature/AmazingFeature)
//     Open a Pull Request
