'use client'

import { Switch } from '@/components/form-field-react-hook-form/switch'
import { GroupField } from '@/components/form-field/group-field'
import { Text } from '@/components/form-field/text'
import { useState } from 'react'

export function Contributors() {
  const [githubProfile, setGithubProfile] = useState('')
  const [name, setName] = useState('')

  return (
    <div>
      <Switch defaultChecked registerName="contributors.enabled" label="Enable Contributors" />

      <GroupField registerName="contributors.items" label="Add new Contributor" btnLabel="Add contributor" displayType="image" obj={{ link: `https://github.com/${githubProfile}`, image: `https://github.com/${githubProfile}.png`, alt: name, keyId: Math.random().toString() }}>
        <Text
          label="Github username"
          onChange={e => setGithubProfile(e.target.value)}
          value={githubProfile}
          placeholder="fennectales"
        />

        <Text
          label="Display name"
          onChange={e => setName(e.target.value)}
          value={name}
          placeholder="Fennec Tales"
        />
      </GroupField>
    </div>
  )
}
