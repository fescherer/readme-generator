'use client'

import { TItemImage } from '@/@types/item'
import { Switch } from '@/components/form-field-react-hook-form/switch'
import { GroupField } from '@/components/form-field/group-field'
import { Select } from '@/components/form-field/select'
import { Text } from '@/components/form-field/text'
import { SOCIALTECH } from '@/util/social'
import { useState } from 'react'

export function ContactUs() {
  const [url, setURL] = useState('')
  const [social, setSocial] = useState<TItemImage>(SOCIALTECH[0])

  function handleSocial(item: string) {
    const socialObj = SOCIALTECH.find(social => social.keyId === item)
    if (socialObj) setSocial(socialObj)
  }

  return (
    <div>
      <Switch defaultChecked registerName="contactUs.enabled" label="Enable Contact Us" />

      <GroupField registerName="contactUs.items" label="Add new contact" btnLabel="Add contact" displayType="badge" obj={{ ...social, link: url }}>
        <Select changeValue={handleSocial} fields={SOCIALTECH} value={social} />
        <Text label="Profile's url" value={url} onChange={e => setURL(e.target.value)} placeholder="https://www.youtube.com/@FennecTales" />
      </GroupField>
    </div>
  )
}
