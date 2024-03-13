import { Switch } from '@/components/form-field-react-hook-form/switch'
import { GroupField } from '@/components/form-field/group-field'
import { Text } from '@/components/form-field/text'
import { useState } from 'react'

export function GifsPrints() {
  const [url, setURL] = useState('')
  const [alt, setAlt] = useState('')

  return (
    <div>
      <Switch defaultChecked registerName="gifsPrints.enabled" label="Enable Gif Print" />

      <GroupField hasLabel={false} registerName="gifsPrints.items" label="Add new Gif/Print" btnLabel="Add Gif/Print" displayType="image" obj={{ image: url, alt, keyId: Math.random().toString(), link: '' }}>
        <Text
          label="Url Gif Print"
          onChange={e => setURL(e.target.value)}
          value={url}
          placeholder="https://imageurl.png"
        />

        <Text
          label="Alt Gif Print"
          onChange={e => setAlt(e.target.value)}
          value={alt}
          placeholder="Form with many fields to configure your readme and a preview showing how would look like"
        />
      </GroupField>
    </div>
  )
}
