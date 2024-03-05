import { TFAQ } from '@/@types/faq'
import { FieldValues } from 'react-hook-form'

export function getFAQ(form: FieldValues) {
  const field = form?.faq
  if (!field || field?.isHide || !field?.faq) return ``
  else
    return `
<!-- **********************🐲FAQ🐲********************** -->

<a name="contact"></a>

## 💬 FAQ 💬

${field.faq.map((item: TFAQ) => `
### ${item.question}

${item.answer}
`)}

<p align="right">(<a href="#readme-top">back to top</a>)</p>
`
}
