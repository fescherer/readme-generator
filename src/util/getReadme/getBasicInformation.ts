import { FieldValues } from 'react-hook-form'

export function getBasicInformation(form: FieldValues) {
  const field = form.basicInformation
  if (!field || field?.isHide || !field?.basicInformation) return ``
  return ''
}
