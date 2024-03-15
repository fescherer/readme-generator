import { TForm } from '@/@types/form'

export function getBasicInformation(form: TForm) {
  const field = form.basicInformation
  if (!field) return ``

  return `${field?.badges?.length ? '\n' : ''}
<a href="https://github.com/${field.repo}">
<img src="${field.projectImage}" alt="Logo" width="80" height="80">
</a>

### ${field.projectName}

${field.shortDescription}`
}
