'use client'

import { useFormContext } from 'react-hook-form'

export function Preview() {
  const { watch } = useFormContext()
  const formsFields = watch()

  return (
    <div className="relative">
      <div className="sticky top-0 p-2">Preview</div>
      <pre>{JSON.stringify(formsFields)}</pre>
    </div>
  )
}
