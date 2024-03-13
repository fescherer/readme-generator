import { TForm } from '@/@types/form'

export function getContactUs(form: TForm) {
  const field = form?.contactUs
  if (!field || !field?.enabled || !field?.items.length) return ``
  else
    return `\n
<!-- **********************🐲 Contact Us 🐲********************** -->
<a name="contactUs"></a>

## 💬 Contact Us

Share your ideas with us 😁 Find us in our socials below:

${field?.items?.map(item => `[![${item?.alt}][${item?.image}]][${item?.link}]`).join('\n\n')}

<p align="right">(<a href="#readme-top">back to top</a>)</p>`
}
