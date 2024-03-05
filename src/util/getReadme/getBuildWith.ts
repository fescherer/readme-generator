import { TBadge } from '@/@types/badge'
import { FieldValues } from 'react-hook-form'

export function getBuildWith(form: FieldValues) {
  const field = form?.buildWith
  if (!field || field?.isHide || !field?.technologies?.length) return ``
  else
    return `
<!-- **********************🐲Built With🐲********************** -->

<a name="buildWith"></a>

## 💻 Built With

<div align="center">

${field?.technologies?.map((item: TBadge) => `[![${item?.label}][${item.value}-shield]][${item.value}-url]`).join('\n')}

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Badges -->
${field?.technologies?.map((item: TBadge) => `[${item.value}-shield]: ${item.badge}
[${item.value}-url]: ${item.link}`).join('\n')}
`
}
