'use client'

import { TSelect } from '@/@types/select'
import { Switch } from '@/components/form-field-react-hook-form/switch'
import { GroupField } from '@/components/form-field/group-field'
import { Select } from '@/components/form-field/select'
import { Text } from '@/components/form-field/text'
import { SOCIALTECH } from '@/util/social'
import { useState } from 'react'

export function ContactUs() {
  const [url, setURL] = useState('')
  const [social, setSocial] = useState<TSelect>(SOCIALTECH[0])

  function handleSocial(item: string) {
    const socialObj = SOCIALTECH.find(social => social.value === item)
    if (socialObj) setSocial(socialObj)
  }

  return (
    <div>
      <Switch registerName="contactUs.isHide" label="Hide Contact Us" />

      <GroupField registerName="contactUs.contactUs" label="Add new contact" btnLabel="Add contact" displayType="badge" obj={{ ...social, link: url }}>
        <Select changeValue={handleSocial} fields={SOCIALTECH} value={social} />
        <Text label="Profile's url" value={url} onChange={e => setURL(e.target.value)} placeholder="https://www.youtube.com/@FennecTales" />
      </GroupField>
    </div>
  )
}
