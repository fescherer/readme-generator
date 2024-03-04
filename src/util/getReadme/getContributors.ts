import { TBadge } from '@/@types/badge'
import { FieldValues } from 'react-hook-form'

export function getContributors(form: FieldValues) {
  const field = form?.contributors
  if (field?.isHide) return ``
  else
    return `
  <!-- **********************🐲Contributors🐲********************** -->

  <a name="contributors"></a>

  ## 🤗 Contributors 🤗

  <table>
    <tr>
      ${field?.contributors?.map((contributor: TBadge) =>
        `
        <td align="center">
          <a href=${contributor.link}>
            <img src=${contributor.badge} width="100px;" alt="${contributor.label} Picture"/><br>
            <sub>
              <b>${contributor.label}</b>
            </sub>
          </a>
        </td>
        `
      )}
    </tr>
  </table>
  `
}
