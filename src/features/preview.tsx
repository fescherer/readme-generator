'use client'

// https://dev.to/acidop/i-built-an-markdown-editor-using-nextjs-and-tailwindcss-46bg
import { useFormContext } from 'react-hook-form'
import { Textarea } from '@/components/form-field/textarea'
import { LucideCopy } from 'lucide-react'
import { getMarkdownCode } from '@/util/getMarkdownCode'
import { Tab } from '@/components/tab'
import { ObrigatoryItemErrorScreen } from './obrigatory-item-error-screen'

export function Preview() {
  const { watch } = useFormContext()
  const formsFields = watch()

  const markdownCode = getMarkdownCode(formsFields)

  function copyCode() {
    navigator.clipboard.writeText(markdownCode)
  }

  return (
    <div className="relative w-full">
      <div className="sticky top-0 p-2">
        {
        !formsFields.basicInformation.repo || !formsFields.basicInformation.projectImage || !formsFields.basicInformation.projectName || !formsFields.basicInformation.shortDescription || !formsFields.basicInformation.description
          ? <ObrigatoryItemErrorScreen form={formsFields} />

          : (
            <Tab contents={[
              // {
              //   value: 'preview',
              //   content: <>Preview</>,
              //   trigger: <>Preview</>,
              // },
              {
                value: 'code',
                content: (
                  <div className="relative">
                    <button className="button-fill absolute right-0 top-1 z-10 p-2" type="button" onClick={copyCode}>
                      <LucideCopy size={14} />
                    </button>

                    <Textarea
                      label=""
                      placeholder="Here is your readme code"
                      value={markdownCode}
                      disabled

                      style={{ height: 'calc(100vh - 80px)', resize: 'none' }}
                    />
                  </div>
                ),
                trigger: <>Code</>,
              },
            ]}
            />
            )
        }
      </div>

    </div>
  )
}
