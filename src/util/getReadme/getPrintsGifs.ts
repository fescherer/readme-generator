import { FieldValues } from 'react-hook-form'

export function getGifsPrints(form: FieldValues) {
  const field = form.gifsPrints
  if (!field || !field?.enabled || !field?.printGifs) return ``
  return `\n
<!-- **********************🐲Gifs Prints🐲********************** -->
## 🏞️ Gifs Prints

<a name="gifsprints"></a>`
}
