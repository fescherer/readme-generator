import { TBadge } from '@/@types/badge'
import { FieldValues } from 'react-hook-form'

export function getContactUs(form: FieldValues) {
  const field = form?.contactUs
  if (!field || field?.isHide || !field?.contactUs.length) return ``
  else
    return `
<!-- **********************🐲 Contact Us 🐲********************** -->
<a name="contactUs"></a>

## 💬 Contact Us 💬

Share your ideas with us 😁 Find us in our socials below:

${field?.contactUs?.map((item: TBadge) => `[![${item?.label}][${item?.badge}]][${item?.link}]`).join('')}

<p align="right">(<a href="#readme-top">back to top</a>)</p>
`
}
