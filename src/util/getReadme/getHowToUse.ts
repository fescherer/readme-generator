import { TForm } from '@/@types/form'

export function getHowToUse(form: TForm) {
  const field = form.howToUse
  if (!field || !field?.enabled || !field?.items?.length) return ``
  return `\n
<!-- **********************🐲How to use🐲********************** -->
## 🚀 How to use

If you want run locally, just run the commands bellow

${field.items.map(item => `
### ${item.title}
\`\`\`${item.text}\`\`\`
`).join('')}

<a name="howToUse"></a>`
}
