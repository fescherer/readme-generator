import { FieldValues } from 'react-hook-form'

export function getSummary(form: FieldValues) {
  const field = form.summary
  if (!field || field?.isHide || !field?.summary) return ``
  return ''
}
