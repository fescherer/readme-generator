import { TForm } from '@/@types/form'

export function getFAQ(form: TForm) {
  const field = form?.faq
  if (!field || !field?.enabled || !field?.items?.length) return ``
  else
    return `\n
<!-- **********************🐲FAQ🐲********************** -->
<a name="faq"></a>

## ❔ FAQ

${field.items.map(item => `
> ### ${item.title}
>
> ${item.text}
`).join('')}
<p align="right">(<a href="#readme-top">back to top</a>)</p>`
}
