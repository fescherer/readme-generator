import { TFAQ } from '@/@types/faq'
import { FieldValues } from 'react-hook-form'

export function getFAQ(form: FieldValues) {
  const field = form?.faq
  console.log(field)
  if (!field || field?.isHide || !field?.faq?.length) return ``
  else
    return `
<!-- **********************🐲FAQ🐲********************** -->

<a name="faq"></a>

## 💬 FAQ

${field.faq.map((item: TFAQ) => `
> ### ${item.question}
>
> ${item.answer}
`).join('')}
<p align="right">(<a href="#readme-top">back to top</a>)</p>
`
}
