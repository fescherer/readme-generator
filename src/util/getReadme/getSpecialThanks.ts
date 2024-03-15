import { TForm } from '@/@types/form'

export function getSpecialThanks(form: TForm) {
  const field = form?.specialThanks
  if (!field || !field?.enabled || !field?.items?.length) return ``
  else
    return `\n
<!-- **********************🐲SpecialThanks🐲********************** -->
<a name="specialThanks"></a>

## 🤗 SpecialThanks

<table>
  <tr>
    ${field?.items?.map(contributor => `<td align="center">
      <a href=${contributor.link}>
        <img src=${contributor.image} width="100px;" alt="${contributor.alt} Picture"/><br>
        <sub>
          <b>${contributor.alt}</b>
        </sub>
      </a>
    </td>`).join('')}
  </tr>
</table>

<p align="right">(<a href="#readme-top">back to top</a>)</p>`
}
