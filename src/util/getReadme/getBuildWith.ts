import { TBadge } from '@/@types/badge'
import { FieldValues } from 'react-hook-form'

export function getBuildWith(form: FieldValues) {
  const field = form?.buildWith
  if (!field || field?.isHide || !field?.technologies) return ``
  else
    return `
<!-- **********************🐲Built With🐲********************** -->

<a name="stack"></a>

## 💻 Built With 💻

<div align="center">

${field?.technologies?.map((item: TBadge) => `[![${item?.label}][${item?.badge}]][${item?.link}]`).join('')}

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
`
}
