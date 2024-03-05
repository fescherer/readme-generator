import { FieldValues } from 'react-hook-form'
import { getAboutProject, getBasicInformation, getBuildWith, getContactUs, getContributors, getFAQ, getGifsPrints, getHowToUse, getProjectInfo, getSpecialThanks, getSummary } from './getReadme'

export function getMarkdownCode(form: FieldValues) {
  const string
    = getBasicInformation(form)
    + getSummary(form)
    + getAboutProject(form)
    + getBuildWith(form)
    + getContactUs(form)
    + getContributors(form)
    + getFAQ(form)
    + getHowToUse(form)
    + getGifsPrints(form)
    + getProjectInfo(form)
    + getSpecialThanks(form)

  return string
}
