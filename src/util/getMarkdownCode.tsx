import {
  getAboutProject,
  getBasicInformation,
  getBuildWith, getContactUs,
  getContributors,
  getFAQ,
  getGifsPrints,
  getHowToUse,
  getSpecialThanks,
  getTableOfContents,
  getDocsLink } from './getReadme'
import { TForm } from '@/@types/form'

export function getMarkdownCode(form: TForm) {
  const string
= getAboutProject(form)
+ getBuildWith(form)
+ getHowToUse(form)
+ getGifsPrints(form)
+ getFAQ(form)
+ getContactUs(form)
+ getContributors(form)
+ getSpecialThanks(form)

  const centerAligned = getBasicInformation(form)
    + getDocsLink(form)
    + getTableOfContents(form)

  return `<div align="center">
${centerAligned}

</div>
${string}`
}
