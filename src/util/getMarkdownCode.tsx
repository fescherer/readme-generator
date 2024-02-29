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

  <!-- **********************🐲About🐲********************** -->

  <a name="about"></a>

  ## 📕 About 📕

  ${form?.aboutProject?.description}

  <p align="right">(<a href="#readme-top">back to top</a>)</p>

  <!-- **********************🐲Built With🐲********************** -->

  <a name="stack"></a>

  ## 💻 Built With 💻

  <div align="center">

  ${form?.buildWith?.technologies?.map((item: TBadge) => `[![${item?.label}][${item?.badge}]][${item?.link}]`)}

  </div>

  <p align="right">(<a href="#readme-top">back to top</a>)</p>

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
