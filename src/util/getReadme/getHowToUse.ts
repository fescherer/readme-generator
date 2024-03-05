import { FieldValues } from 'react-hook-form'

export function getHowToUse(form: FieldValues) {
  const field = form.howToUse
  if (!field || field?.isHide || !field?.howToUse?.length) return ``
  return `
<!-- **********************🐲How to use🐲********************** -->

<a name="howToUse"></a>
`
}
