import { FieldValues } from 'react-hook-form'

export function getAboutProject(form: FieldValues) {
  const field = form?.aboutProject
  if (!field || field?.isHide || !field?.description) return ``
  else
    return `
<!-- **********************🐲About🐲********************** -->

<a name="about"></a>

## 📕 About 📕

${field?.description}

<p align="right">(<a href="#readme-top">back to top</a>)</p>
`
}
