import { TForm } from '@/@types/form'

export function getHowToUse(form: TForm) {
  const field = form.howToUse
  if (!field || !field?.enabled || !field?.items?.length) return ``
  return `\n
<!-- **********************🐲How to use🐲********************** -->
<a name="howToUse"></a>

## 🚀 How to use

If you want run locally, just run the commands bellow

${field.items.map(item => `
### ${item.title}
\`\`\`cli
${item.text}
\`\`\`
`).join('')}

<p align="right">(<a href="#readme-top">back to top</a>)</p>`
}
