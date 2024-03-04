import { TBadge } from '@/@types/badge'
import { FieldValues } from 'react-hook-form'

export function getMarkdownCode(form: FieldValues) {
  const md
  = `
  <a name="readme-top"></a>

  <div align="center">

  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![MIT License][license-shield]][license-url]

    <br />
    <a href="https://github.com/${form?.basicInformation?.repo}">
      <img src="${form?.basicInformation?.projectImage}" alt="Logo" width="80" height="80">
    </a>

  <h3 align="center">${form?.basicInformation?.projectName}</h3>

  ${form?.summary?.isHide && `  <p align="center">

  ${form?.basicInformation?.shortDescription}
  <br />
  <a href="https://github.com/${form?.basicInformation?.repo}"><strong>Explore the docs »</strong></a>
  <br />
  <br />
  <a href="#about">About</a>
  •
  ${form?.buildWith?.technologies.length > 0 && `<a href="#stack">Build With</a>
  •`}
  <a href="#install">Getting Started</a>
  •
  <a href="#usage">How to use</a>
  •
  <a href="#info">Info</a>
  •
  <a href="#contact">Contact me</a>
  •
  <a href="#contributors">Contributors</a>

  </p>`}
  </div>





  <!-- **********************🐲Getting Started🐲********************** -->

  <a name="install"></a>

  ## 🚂 Getting Started 🚂

  To get this project up and running locally on your pc, follow the steps:

  ### Pre requisites

  ${form?.howToUse?.howToUse?.map((item: TBadge) => `
  \`\`\`
  ${item.label}
  \`\`\`
  `)}

  <!-- **********************🐲Gifs/Prints🐲********************** -->

  <a name="usage"></a>

  ## 🙋 Gifs/Prints 🙋

  ${form?.gifsprints?.gifsprints?.map((item: TBadge) => `![${item.alt}](${item.badge})`)}

  <!-- Badges and Badges Link -->
  [contributors-shield]: https://img.shields.io/github/contributors/${form?.basicInformation?.repo}.svg?style=for-the-badge
  [contributors-url]: https://github.com/${form?.basicInformation?.repo}/graphs/contributors
  [forks-shield]: https://img.shields.io/github/forks/${form?.basicInformation?.repo}.svg?style=for-the-badge
  [forks-url]: https://github.com/${form?.basicInformation?.repo}/network/members
  [stars-shield]: https://img.shields.io/github/stars/${form?.basicInformation?.repo}.svg?style=for-the-badge
  [stars-url]: https://github.com/${form?.basicInformation?.repo}/stargazers
  [issues-shield]: https://img.shields.io/github/issues/${form?.basicInformation?.repo}.svg?style=for-the-badge
  [issues-url]: https://github.com/${form?.basicInformation?.repo}/issues
  `

  return md
}

// Distributed under the MIT License. See LICENSE for more information.

// Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contribution you make would be appreciated.

//     Fork the Project
//     Create your Feature Branch (git checkout -b feature/AmazingFeature)
//     Commit your Changes (git commit -m 'Add some AmazingFeature')
//     Push to the Branch (git push origin feature/AmazingFeature)
//     Open a Pull Request
