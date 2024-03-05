import { FieldValues } from 'react-hook-form'
import { getAboutProject, getBasicInformation, getBuildWith, getContactUs, getContributors, getFAQ, getGifsPrints, getHowToUse, getProjectInfo, getSpecialThanks, getTableOfContents } from './getReadme'

export function getMarkdownCode(form: FieldValues) {
  const string
    = getBasicInformation(form)
    + getTableOfContents(form)
    + getAboutProject(form)
    + getBuildWith(form)
    + getHowToUse(form)
    + getGifsPrints(form)
    + getFAQ(form)
    + getProjectInfo(form)
    + getContactUs(form)
    + getContributors(form)
    + getSpecialThanks(form)

  return string
}
