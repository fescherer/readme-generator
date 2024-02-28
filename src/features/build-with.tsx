'use client'

import { MultiSelectBadge } from '@/components/form-field-react-hook-form/multiselect-badge'
import { Switch } from '@/components/form-field-react-hook-form/switch'
import { GroupField } from '@/components/form-field/group-field'
import { Text } from '@/components/form-field/text'
import { Hint } from '@/components/hint'
import { TECHNOLOGIES } from '@/util/tech-stack'
import { useState } from 'react'

export function BuildWith() {
  const [alt, setAlt] = useState('')
  const [link, setLink] = useState('')
  const [badge, setBadge] = useState('')

  return (
    <div className="flex flex-col gap-2">
      <Switch registerName="buildWith.isHide" label="Hide Build With" />
      <MultiSelectBadge items={TECHNOLOGIES} registerName="buildWith.technologies" triggerLabel="Add tecnology" />

      <GroupField
        registerName="buildWith.buildWith"
        label="Add new technology"
        displayType="badge"
        obj={{ alt, link, badge }}
        btnLabel="Add technology"
      >
        <Text label="Alt Name" value={alt} onChange={e => setAlt(e.target.value)} placeholder="React logo" />

        <Text
          label={(
            <div className="flex items-center justify-between" title="Find more badges here">
              <span>Badge Link</span>
              <Hint href="https://github.com/Ileriayo/markdown-badges" />
            </div>
          )}
          value={badge}
          onChange={e => setBadge(e.target.value)}
          placeholder="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
        />

        <Text label="Doc link" value={link} onChange={e => setLink(e.target.value)} placeholder="https://react.dev" />
      </GroupField>
    </div>
  )
}
