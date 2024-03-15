import { TForm } from '@/@types/form'

export function getDocsLink(form: TForm) {
  const field = form.basicInformation
  if (!field || !field?.docsLink) return ``
  return `\n
<!-- **********************🐲 Docs link 🐲********************** -->
<a href="https://github.com/${form.basicInformation.repo || 'fescherer/blog'}"><strong>Explore the docs »</strong></a>`
}
