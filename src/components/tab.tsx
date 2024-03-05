import * as Tabs from '@radix-ui/react-tabs'
import { ReactNode } from 'react'

type TabProps = {
  contents: {
    value: string
    trigger: ReactNode
    content: ReactNode
  }[]
}

export function Tab({ contents }: TabProps) {
  return (
    <Tabs.Root defaultValue={contents[0].value}>
      <Tabs.List className="flex justify-around divide-x rounded border border-zinc-400 text-form-value">
        {
        contents.map(content => (
          <Tabs.Trigger key={content.value} value={content.value} className="flex w-full justify-center p-2  data-[state=active]:bg-slate-200 data-[state=active]:text-slate-800">
            {content.trigger}
          </Tabs.Trigger>
        ))
      }
      </Tabs.List>

      {
        contents.map(content => (
          <Tabs.Content key={content.value} value={content.value}>
            {content.content}
          </Tabs.Content>
        ))
      }
    </Tabs.Root>
  )
}
