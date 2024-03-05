import { FieldValues } from 'react-hook-form'

export function getBasicInformation(form: FieldValues) {
  const field = form.basicInformation
  const defaultValues = {
    repo: 'fescherer/blog',
    projectImage: 'https://github.com/fescherer/pokedex/assets/62115215/74001705-7939-4769-a5a0-0e5a77cb6334',
    projectName: 'Markdown Readme Generator',
    shortDescription: 'Here goes a short description of your project. Basically what it does.',
  }
  if (!field || field?.isHide) return ``
  return `
<a name="readme-top"></a>

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<a href="https://github.com/${field.repo || defaultValues.repo}">
  <img src="${field.projectImage || defaultValues.projectImage}" alt="Logo" width="80" height="80">
</a>

<h3 align="center">${field.projectName || defaultValues.projectName}</h3>

${field.shortDescription || defaultValues.shortDescription}

</div>

<!-- Badges -->
[contributors-shield]: https://img.shields.io/github/contributors/${field.repo || defaultValues.repo}.svg?style=for-the-badge
[contributors-url]: https://github.com/${field.repo || defaultValues.repo}/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/${field.repo || defaultValues.repo}.svg?style=for-the-badge
[forks-url]: https://github.com/${field.repo || defaultValues.repo}/network/members
[stars-shield]: https://img.shields.io/github/stars/${field.repo || defaultValues.repo}.svg?style=for-the-badge
[stars-url]: https://github.com/${field.repo || defaultValues.repo}/stargazers
[issues-shield]: https://img.shields.io/github/issues/${field.repo || defaultValues.repo}.svg?style=for-the-badge
[issues-url]: https://github.com/${field.repo || defaultValues.repo}/issues
[license-shield]: https://img.shields.io/github/license/${field.repo || defaultValues.repo}.svg?style=for-the-badge
[license-url]: https://github.com/${field.repo || defaultValues.repo}/blob/master/LICENSE
`
}
