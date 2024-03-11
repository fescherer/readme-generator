import { TBadge } from '@/@types/badge'
import { FieldValues } from 'react-hook-form'

export function getBuildWith(form: FieldValues) {
  const field = form?.buildWith
  if (!field || !field?.enabled || !(field?.technologies?.length || field?.customTechnologies?.length)) return ``

  const badgesTechnologies = field?.technologies?.map((item: TBadge) => `[![${item?.label}][${item.value}-shield]][${item.value}-url]`)
  const badgesCustomTechnologies = field?.customTechnologies?.map((item: TBadge) => `[![${item?.label}][${item.value}-shield]][${item.value}-url]`)

  const badgesTechnologiesURL = field?.technologies?.map((item: TBadge) => `[${item.value}-shield]: ${item.badge}\n[${item.value}-url]: ${item.link}`)
  const badgesCustomTechnologiesURL = field?.customTechnologies?.map((item: TBadge) => `[${item.value}-shield]: ${item.badge}\n[${item.value}-url]: ${item.link}`)

  return `\n
<!-- **********************🐲Built With🐲********************** -->
<a name="buildWith"></a>

## 💻 Built With

<div align="center">

${[...badgesCustomTechnologies, ...badgesTechnologies].join('\n')}

</div>

<!-- Badges -->
${[...badgesTechnologiesURL, ...badgesCustomTechnologiesURL].join('\n')}

<p align="right">(<a href="#readme-top">back to top</a>)</p>`
}
