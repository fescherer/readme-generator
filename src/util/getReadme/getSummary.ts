import { FieldValues } from 'react-hook-form'

export function getSummary(form: FieldValues) {
  const field = form.summary
  if (!field || field?.isHide) return ``
  return `
<!-- **********************🐲 Summary 🐲********************** -->
<div align="center">
<br />
<a href="https://github.com/${form.basicInformation.repo || 'fescherer/blog'}"><strong>Explore the docs »</strong></a>
<br />
<br />
${[
form?.aboutProject?.description
? `<a href="#aboutProject">About</a>`
: '',
form?.buildWith?.technologies?.length
? `<a href="#buildWith">Build With</a>`
: '',
form?.howToUse?.length
? `<a href="#howToUse">How to use</a>`
: '',
form?.gifPrint?.gifsprints?.length
? `<a href="#gifsPrints">Gifs Prints</a>`
: '',
form?.faq?.faq?.length
? `<a href="#faq">FAQ</a>`
: '',
form?.projectInfo?.license.length || form?.projectInfo?.contribute.length || form?.projectInfo?.descriptionLicense || form?.projectInfo?.descriptionContribute
? `<a href="#projectInfo">Project Info</a>`
: '',
form?.contactUs.contactUs?.length
? `<a href="#contactUs">Contact Us</a>`
: '',
form?.contributors?.contributors?.length
? `<a href="#contributors">Contributors</a>`
: '',
form?.specialThanks?.specialThanks?.length
? `<a href="#specialThanks">Special Thanks</a>`
: '',
].filter(n => n).join('\n•\n')}
</div>
`
}
