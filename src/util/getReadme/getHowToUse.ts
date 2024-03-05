import { FieldValues } from 'react-hook-form'

export function getHowToUse(form: FieldValues) {
  const field = form.howToUse
  if (!field || field?.isHide || !field?.howToUse) return ``
  return ''
}
