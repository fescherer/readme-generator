import { TForm } from '@/@types/form'

export function getBasicInformation(form: TForm) {
  const field = form.basicInformation
  if (!field) return ``

  // Badges
  const starsShield = '\n[![Stargazers][stars-shield]][stars-url]'
  const contributorsShield = '\n[![Contributors][contributors-shield]][contributors-url]'
  const forksShield = '\n[![Forks][forks-shield]][forks-url]'
  const licenseShield = '\n[![License][license-shield]][license-url]'
  const contributingShield = '\n[![Contributing][contributing-shield]][contributing-url]'
  const issueShield = '\n[![Issues][issues-shield]][issues-url]'

  // Badges URL

  const starsShieldURL = `\n[stars-shield]: https://img.shields.io/github/stars/${field.repo}.svg?style=for-the-badge&color=gold\n[stars-url]: https://github.com/${field.repo}/stargazers`
  const contributorsShieldURL = `\n[contributors-shield]: https://img.shields.io/github/contributors/${field.repo}.svg?style=for-the-badge\n[contributors-url]: https://github.com/${field.repo}/graphs/contributors`
  const forksShieldURL = `\n[forks-shield]: https://img.shields.io/github/forks/${field.repo}.svg?style=for-the-badge\n[forks-url]: https://github.com/${field.repo}/network/members`
  const licenseShieldURL = `\n[license-shield]: https://img.shields.io/github/license/${field.repo}.svg?style=for-the-badge\n[license-url]: https://github.com/${field.repo}/blob/main/LICENSE`
  const contributingShieldURL = `\n[contributing-shield]: https://img.shields.io/badge/How%20to%20contribute-%E2%9C%A8-purple.svg?style=for-the-badge\n[contributing-url]: https://github.com/${field.repo}/blob/main/CONTRIBUTING.md`
  const issuesShieldURL = `\n[issues-shield]: https://img.shields.io/github/issues/${field.repo}.svg?style=for-the-badge\n[issues-url]: https://github.com/${field.repo}/issues`

  return `
<a name="readme-top"></a>
${field.hasStarsBadge ? starsShield : ''}${field.hasContributorsBadge ? contributorsShield : ''}${field.hasForksBadge ? forksShield : ''}${field.hasLicenseBadge ? licenseShield : ''}${field.hasContributing ? contributingShield : ''}${field.hasIssuesBadge ? issueShield : ''}

<a href="https://github.com/${field.repo}">
<img src="${field.projectImage}" alt="Logo" width="80" height="80">
</a>

<h3 align="center">${field.projectName}</h3>

${field.shortDescription}

<!-- Badges -->${field.hasStarsBadge ? starsShieldURL : ''}${field.hasContributorsBadge ? contributorsShieldURL : ''}${field.hasForksBadge ? forksShieldURL : ''}${field.hasLicenseBadge ? licenseShieldURL : ''}${field.hasContributing ? contributingShieldURL : ''}${field.hasIssuesBadge ? issuesShieldURL : ''}`
}
