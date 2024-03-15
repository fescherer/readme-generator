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
import { getBasicBadges } from './getReadme/getBasicBadges'

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

  const centerAligned = getBasicBadges(form)
    + getBasicInformation(form)
    + getDocsLink(form)
    + getTableOfContents(form)

  return `<a name="readme-top"></a>
<div align="center">
${centerAligned}

</div>
${string}`
}
