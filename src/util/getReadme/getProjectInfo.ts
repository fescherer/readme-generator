import { FieldValues } from 'react-hook-form'

export function getProjectInfo(form: FieldValues) {
  const field = form?.projectInfo
  if (!field || field?.isHide) return ``
  else
    return `
<!-- **********************🐲 PROJECT INFO 🐲********************** -->

<a name="projectInfo"></a>

## 💬 Project Info 💬

<div align="center">

${field?.license?.length > 0 ? `[![${field?.license?.[0]?.label}][license-shield]][license-url]` : ''}
${field?.contribute?.length > 0 ? `[![${field?.contribute?.[0]?.label}][info-contribute-url]][info-issues-shield]` : ''}

</div>

${field?.descriptionLicense
? `
### LICENSE

${field?.descriptionLicense}
`
: ''}

${field?.descriptionContribute
? `
### How to contribute

[![Create an issue][info-issues-shield]][info-issues-url]

${field?.descriptionContribute}
`
: ''}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Badges -->
[license-shield]: ${field?.license?.[0]?.badge}
[license-url]: ${field?.license?.[0]?.link}
[info-contribute-url]: ${field?.contribute?.[0]?.badge}
[info-issues-shield]: ${field?.contribute?.[0]?.link}
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
