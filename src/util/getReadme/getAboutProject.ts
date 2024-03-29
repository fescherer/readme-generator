import { TForm } from '@/@types/form'

// TODO add emoji picker to be an main emoji

export function getAboutProject(form: TForm) {
  const field = form?.basicInformation
  if (!field || !field?.description) return ``
  else
    return `\n<!-- **********************🐲About🐲********************** -->
<a name="aboutProject"></a>

## 📕 About

${field?.description}

<p align="right">(<a href="#readme-top">back to top</a>)</p>`
}
