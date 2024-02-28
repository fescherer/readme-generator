import { Switch } from '@/components/form-field-react-hook-form/switch'
import { Text } from '@/components/form-field-react-hook-form/text'
import { Textarea } from '@/components/form-field-react-hook-form/textarea'
import * as Tabs from '@radix-ui/react-tabs'

export function ProjectInfo() {
  return (
    <div>
      <Switch registerName="projectInfo.isHide" label="Hide project info" />

      <Tabs.Root defaultValue="badge">
        <Tabs.List className="flex justify-around divide-x rounded border border-zinc-400 text-form-value">
          <Tabs.Trigger value="badge" className="flex w-full justify-center p-2  data-[state=active]:bg-slate-200 data-[state=active]:text-slate-800">
            Badge
          </Tabs.Trigger>

          <Tabs.Trigger value="textarea" className="flex w-full justify-center p-2  data-[state=active]:bg-slate-200 data-[state=active]:text-slate-800">
            Textarea
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="badge">
          <Text
            label="License"
            placeholder="https://github.com/fennectales/utils/blob/main/LICENSE"
            registerName="projectInfo.license"
          />

          <Text
            label="Contribute"
            placeholder="https://github.com/fennectales/utils/blob/main/CONTRIBUTING.md"
            registerName="projectInfo.contribute"
          />
        </Tabs.Content>

        <Tabs.Content value="textarea">
          <Textarea
            label="License"
            placeholder="License: MIT"
            registerName="projectInfo.descriptionLicense"
          />

          <Textarea
            label="Contribute"
            placeholder="1. Fork the Project 2. Create your Feature Branch (git checkout -b feature/AmazingFeature) 3. Commit your Changes (git commit -m 'Add some AmazingFeature') 4. Push to the Branch (git push origin feature/AmazingFeature) 5. Open a Pull Request"
            registerName="projectInfo.descriptionContribute"
          />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}
