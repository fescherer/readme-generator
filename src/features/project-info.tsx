'use client'

import { Switch } from '@/components/form-field-react-hook-form/switch'
import { Textarea } from '@/components/form-field-react-hook-form/textarea'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { Text } from '@/components/form-field/text'
import { GroupField } from '@/components/form-field/group-field'
import { useWatch } from 'react-hook-form'

export function ProjectInfo() {
  const [contributeText, setContributeText] = useState('')

  const repo = useWatch({ name: 'basicInformation.repo' })
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
          <GroupField registerName="projectInfo.license" label="Project License" btnLabel="Update License" displayType="badge" obj={{ link: `https://github.com/${repo}/blob/master/LICENSE`, badge: `https://img.shields.io/github/license/${repo}`, label: 'LICENSE' }} btnDisabled={!repo} />

          <GroupField registerName="projectInfo.contribute" label="Add new Contributor" btnLabel="Add contributor" displayType="badge" obj={{ link: contributeText, badge: `https://img.shields.io/badge/👋-How%20to%20contribute-blue.svg?style=for-the-badge`, label: 'Contribute' }}>
            <Text
              label="Contribute"
              onChange={e => setContributeText(e.target.value)}
              value={contributeText}
              placeholder="https://github.com/fennectales/utils/blob/main/CONTRIBUTING.md"
            />
          </GroupField>
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
