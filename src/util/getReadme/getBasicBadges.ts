import { TForm } from '@/@types/form'
import { generateBadges, generateURL } from '../generateMarkdownBadges'

export function getBasicBadges(form: TForm) {
  const field = form?.basicInformation
  if (!field || !field?.badges?.length) return ``

  const badges = generateBadges(field?.badges)
  const badgesURL = generateURL(field?.badges)

  return `
${badges.join('\n').replaceAll('repo-name', field.repo)}

<!-- Badges -->
${badgesURL.join('\n').replaceAll('repo-name', field.repo)}`
}
