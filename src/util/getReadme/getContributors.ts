import { TForm } from '@/@types/form'

export function getContributors(form: TForm) {
  const field = form?.contributors
  if (!field || !field?.enabled || !field?.items.length) return ``
  else
    return `\n
<!-- **********************🐲Contributors🐲********************** -->
<a name="contributors"></a>

## 🤗 Contributors

<table>
  <tr>
    ${field?.items?.map(contributor => `<td align="center">
        <a href=${contributor.link}>
          <img src=${contributor.image} width="100px;" alt="${contributor.alt} Picture"/><br>
          <sub>
            <b>${contributor.alt}</b>
          </sub>
        </a>
      </td>`
    ).join('')}
  </tr>
</table>`
}
