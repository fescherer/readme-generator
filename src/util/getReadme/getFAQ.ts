import { TBadgeText } from '@/@types/badge-text'
import { FieldValues } from 'react-hook-form'

export function getFAQ(form: FieldValues) {
  const field = form?.faq
  console.log(field)
  if (!field || !field?.enabled || !field?.faq?.length) return ``
  else
    return `\n
<!-- **********************🐲FAQ🐲********************** -->
<a name="faq"></a>

## ❔ FAQ

${field.faq.map((item: TBadgeText) => `
> ### ${item.title}
>
> ${item.text}
`).join('')}
<p align="right">(<a href="#readme-top">back to top</a>)</p>`
}
