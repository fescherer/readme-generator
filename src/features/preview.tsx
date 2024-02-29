'use client'

// https://dev.to/acidop/i-built-an-markdown-editor-using-nextjs-and-tailwindcss-46bg

import { getMarkdownCode } from '@/util/getMarkdownCode'
import { useFormContext } from 'react-hook-form'

export function Preview() {
  const { watch } = useFormContext()
  const formsFields = watch()

  const markdownCode = getMarkdownCode(formsFields)

  return (
    <div className="relative w-full">
      <div className="sticky top-0 p-2">
        Preview
        {/* <pre>{JSON.stringify(formsFields)}</pre> */}
        <pre>{JSON.stringify(formsFields.basicInformation)}</pre>
        <pre>{JSON.stringify(formsFields.summary)}</pre>
        <pre>{JSON.stringify(formsFields.aboutProject)}</pre>
        <pre>{JSON.stringify(formsFields.buildWith)}</pre>
        <pre>{JSON.stringify(formsFields.contactUs)}</pre>
        <pre>{JSON.stringify(formsFields.contributors)}</pre>
        <pre>{JSON.stringify(formsFields.faq)}</pre>
        <pre>{JSON.stringify(formsFields.gifPrint)}</pre>
        <pre>{JSON.stringify(formsFields.howToUse)}</pre>
        <pre>{JSON.stringify(formsFields.projectInfo)}</pre>
        <pre>{JSON.stringify(formsFields.specialThanks)}</pre>

        <div>
          <ul>
            <li>text Form field</li>
            <li>text area field</li>
            <li>checkbox field</li>
            <li>select</li>
            <li>expansion</li>
            <li>tabs</li>
          </ul>
        </div>

        <div>
          {markdownCode}
        </div>

      </div>
    </div>
  )
}
