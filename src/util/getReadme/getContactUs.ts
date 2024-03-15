import { TForm } from '@/@types/form'
import { generateBadges, generateURL } from '../generateMarkdownBadges'

export function getContactUs(form: TForm) {
  const field = form?.contactUs
  if (!field || !field?.enabled || !field?.items.length) return ``

  const badges = generateBadges(field?.items)
  const badgesURL = generateURL(field?.items)

  return `\n
<!-- **********************🐲 Contact Us 🐲********************** -->
<a name="contactUs"></a>

## 💬 Contact Us

Share your ideas with us 😁 Find us in our socials below:

<div align="center">

${badges.join('\n')}

</div>

<!-- Badges -->
${badgesURL.join('\n')}

<p align="right">(<a href="#readme-top">back to top</a>)</p>`
}
