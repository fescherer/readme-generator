import { TForm } from '@/@types/form'
import { generateBadges, generateURL } from '../generateMarkdownBadges'

export function getBuildWith(form: TForm) {
  const field = form?.buildWith
  if (!field || !field?.enabled || !(field?.items?.length || field?.items?.length)) return ``

  const badgesTechnologies = generateBadges(field?.items)
  const badgesCustomTechnologies = generateBadges(field?.customItems)

  const badgesTechnologiesURL = generateURL(field?.items)
  const badgesCustomTechnologiesURL = generateURL(field?.customItems)

  return `\n
<!-- **********************🐲Built With🐲********************** -->
<a name="buildWith"></a>

## 💻 Built With

<div align="center">

${[...badgesTechnologies, ...badgesCustomTechnologies].join('\n')}

</div>

<!-- Badges -->
${[...badgesTechnologiesURL, ...badgesCustomTechnologiesURL].join('\n')}

<p align="right">(<a href="#readme-top">back to top</a>)</p>`
}
