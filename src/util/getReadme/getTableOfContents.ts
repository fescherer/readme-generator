import { TForm } from '@/@types/form'

export function getTableOfContents(form: TForm) {
  const field = form.tableOfContent
  if (!field || !field?.enabled) return ``
  return `\n
<!-- **********************🐲 Table of contents 🐲********************** -->
${[
`<a href="#aboutProject">About</a>`,
form?.buildWith?.items?.length && form?.buildWith?.enabled
? `<a href="#buildWith">Build With</a>`
: '',
form?.howToUse?.items?.length && form?.howToUse?.enabled
? `<a href="#howToUse">How to use</a>`
: '',
form?.gifsPrints?.items?.length && form?.gifsPrints?.enabled
? `<a href="#gifsPrints">Gifs Prints</a>`
: '',
form?.faq?.items?.length && form?.faq?.enabled
? `<a href="#faq">FAQ</a>`
: '',
form?.contactUs.items?.length && form?.contactUs?.enabled
? `<a href="#contactUs">Contact Us</a>`
: '',
form?.contributors?.items?.length && form?.contributors?.enabled
? `<a href="#contributors">Contributors</a>`
: '',
form?.specialThanks?.items?.length && form?.specialThanks?.enabled
? `<a href="#specialThanks">Special Thanks</a>`
: '',
].filter(n => n).join('\n•\n')}`
}
