import { TForm } from '@/@types/form'

export function getTableOfContents(form: TForm) {
  const field = form.tableOfContent
  if (!field || !field?.enabled) return ``
  return `\n
<!-- **********************🐲 Table of contents 🐲********************** -->
<div align="center">
<a href="https://github.com/${form.basicInformation.repo || 'fescherer/blog'}"><strong>Explore the docs »</strong></a>

${[
`<a href="#aboutProject">About</a>`,
form?.buildWith?.items?.length
? `<a href="#buildWith">Build With</a>`
: '',
form?.howToUse?.items?.length
? `<a href="#howToUse">How to use</a>`
: '',
form?.gifsPrints?.items?.length
? `<a href="#gifsPrints">Gifs Prints</a>`
: '',
form?.faq?.items?.length
? `<a href="#faq">FAQ</a>`
: '',
form?.contactUs.items?.length
? `<a href="#contactUs">Contact Us</a>`
: '',
form?.contributors?.items?.length
? `<a href="#contributors">Contributors</a>`
: '',
form?.specialThanks?.items?.length
? `<a href="#specialThanks">Special Thanks</a>`
: '',
].filter(n => n).join('\n•\n')}
</div>`
}
