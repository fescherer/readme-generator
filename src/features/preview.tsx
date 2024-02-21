'use client'

import { useFormContext } from 'react-hook-form'

export function Preview() {
  const { watch } = useFormContext()
  const formsFields = watch()

  return (
    <div className="relative">
      <div className="sticky top-0 p-2">
        Preview
        <pre>{JSON.stringify(formsFields)}</pre>
        <pre>{JSON.stringify(formsFields.basicInformation)}</pre>
        <pre>{JSON.stringify(formsFields.summary)}</pre>
        <pre>{JSON.stringify(formsFields.buildWith)}</pre>
        {/* <pre>{JSON.stringify(formsFields)}</pre>
      <pre>{JSON.stringify(formsFields)}</pre> */}

      </div>

    </div>
  )
}
