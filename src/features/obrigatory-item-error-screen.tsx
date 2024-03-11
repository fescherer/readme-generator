import { FieldValues } from 'react-hook-form'

type ObrigatoryItemErrorScreenProps = {
  form: FieldValues
}

export function ObrigatoryItemErrorScreen({ form }: ObrigatoryItemErrorScreenProps) {
  return (
    <div className="m-4 w-full">
      <h2 className="text-title font-medium">To be able to generate your markdown code, please fill the following fields: </h2>

      <ul className="mx-2 my-4 list-disc space-y-2">
        {
          !form.basicInformation.repo && <li>Github repo (Owner + repo name)</li>
        }

        {
          !form.basicInformation.projectName && <li>Project Name</li>
        }

        {
          !form.basicInformation.projectImage && <li>Project Image</li>
        }

        {
          !form.basicInformation.shortDescription && <li>Short Description</li>
        }

        {
          !form.basicInformation.description && <li>Description</li>
        }
      </ul>
    </div>
  )
}
