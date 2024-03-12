import { TBadgeText } from '@/@types/badge-text'
import { FieldValues } from 'react-hook-form'

export function getHowToUse(form: FieldValues) {
  const field = form.howToUse
  if (!field || !field?.enabled || !field?.howToUse?.length) return ``
  return `\n
<!-- **********************🐲How to use🐲********************** -->
## 🚀 How to use

If you want run locally, just run the commands bellow

${field.howToUse.map((item: TBadgeText) => `
### ${item.title}
\`\`\`${item.text}\`\`\`
`).join('')}

<a name="howToUse"></a>`
}
