import { FieldValues } from 'react-hook-form'

export function getHowToUse(form: FieldValues) {
  const field = form.howToUse
  if (!field || !field?.enabled || !field?.howToUse?.length) return ``
  return `\n
<!-- **********************🐲How to use🐲********************** -->
## 🚀 How to use



<a name="howToUse"></a>`
}
