import { TBadge } from '@/@types/badge'
import { FieldValues } from 'react-hook-form'

export function getContactUs(form: FieldValues) {
  const field = form?.contactUs
  if (field?.isHide) return ``
  else
    return `
  <!-- **********************🐲Contact Me🐲********************** -->
  <a name="contact"></a>

  ## 💬 Contact me 💬

  Share your ideas with us 😁 Find us in our socials below:

  ${field?.contactUs?.map((item: TBadge) => `[![${item?.label}][${item?.badge}]][${item?.link}]`)}

  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  `
}
