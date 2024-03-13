import { getAboutProject, getBasicInformation, getBuildWith, getContactUs, getContributors, getFAQ, getGifsPrints, getHowToUse, getSpecialThanks, getTableOfContents } from './getReadme'
import { TForm } from '@/@types/form'

export function getMarkdownCode(form: TForm) {
  const string
    = getBasicInformation(form)
    + getTableOfContents(form)
    + getAboutProject(form)
    + getBuildWith(form)
    + getHowToUse(form)
    + getGifsPrints(form)
    + getFAQ(form)
    + getContactUs(form)
    + getContributors(form)
    + getSpecialThanks(form)

  return string
}
