import { TForm } from '@/@types/form'
import { TItemImage } from '@/@types/item'

export function getGifsPrints(form: TForm) {
  const field = form.gifsPrints

  if (!field || !field?.enabled || !field?.items.length) return ``
  return `\n
<!-- **********************🐲Gifs Prints🐲********************** -->
<a name="gifsPrints"></a>

## 🏞️ Gifs Prints

${field.items.map((item: TItemImage) => `
![${item.alt}](${item.image})`).join('')}

<p align="right">(<a href="#readme-top">back to top</a>)</p>`
}
