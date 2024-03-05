import { TBadge } from '@/@types/badge'
import { FieldValues } from 'react-hook-form'

export function getSpecialThanks(form: FieldValues) {
  const field = form?.specialThanks
  if (!field || field?.isHide || !field?.specialThanks?.length) return ``
  else
    return `
<!-- **********************🐲SpecialThanks🐲********************** -->

<a name="SpecialThanks"></a>

## 🤗 SpecialThanks 🤗

<table>
  <tr>
    ${field?.specialThanks?.map((contributor: TBadge) => `<td align="center">
      <a href=${contributor.link}>
        <img src=${contributor.badge} width="100px;" alt="${contributor.label} Picture"/><br>
        <sub>
          <b>${contributor.label}</b>
        </sub>
      </a>
    </td>
    `).join('')}
  </tr>
</table>
`
}
