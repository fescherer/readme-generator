import { FormField } from '@/components/form-field'
import { FormFieldCheckbox } from '@/components/form-field-checkbox'
import { FormFieldTextarea } from '@/components/form-field-textarea'
import * as Tabs from '@radix-ui/react-tabs'

export function ProjectInfo() {
  return (
    <div>
      <FormFieldCheckbox label="Hide project info" registerName="projectInfo.isProjectInfoHide" />

      <Tabs.Root>
        <Tabs.List className="flex justify-around divide-x rounded border border-zinc-400 text-sm text-zinc-400">
          <Tabs.Trigger value="badge" className="flex w-full justify-center p-2  data-[state=active]:bg-slate-200 data-[state=active]:text-slate-800">
            Badge
          </Tabs.Trigger>

          <Tabs.Trigger value="textarea" className="flex w-full justify-center p-2  data-[state=active]:bg-slate-200 data-[state=active]:text-slate-800">
            Textarea
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="badge">
          <FormField label="License" registerName="projectInfo.license" />
          <FormField label="Contribute" registerName="projectInfo.contribute" />
        </Tabs.Content>

        <Tabs.Content value="textarea">
          <FormFieldTextarea label="License" registerName="projectInfo.descriptionLicense" />
          <FormFieldTextarea label="Contribute" registerName="projectInfo.descriptionContribute" />
        </Tabs.Content>
      </Tabs.Root>

    </div>
  )
}
