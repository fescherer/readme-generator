import { FieldValues } from 'react-hook-form'

// TODO add emoji picker to be an main emoji

export function getAboutProject(form: FieldValues) {
  const field = form?.aboutProject
  if (!field || field?.isHide || !field?.description) return ``
  else
    return `
<!-- **********************🐲About🐲********************** -->

<a name="aboutProject"></a>

## 📕 About

${field?.description}

<p align="right">(<a href="#readme-top">back to top</a>)</p>
`
}
