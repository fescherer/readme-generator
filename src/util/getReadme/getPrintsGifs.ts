import { FieldValues } from 'react-hook-form'

export function getGifsPrints(form: FieldValues) {
  const field = form.gifsPrints
  if (!field || field?.isHide || !field?.faq) return ``
  return `
<!-- **********************🐲Gifs Prints🐲********************** -->

<a name="gifsprints"></a>
`
}
