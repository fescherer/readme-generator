import { ArrayPath, useFieldArray, useFormContext } from 'react-hook-form'
import { Switch } from '../form-field/switch'
import { TForm } from '@/@types/form'
import { TItemImage } from '@/@types/item'

type SwitchGroupProps = {
  registerName: ArrayPath<TForm>
  switches: Array<TItemImage & {
    label: string
    hint?: string
  }>
}

export function SwitchGroup({ registerName, switches }: SwitchGroupProps) {
  const { control } = useFormContext<TForm>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: registerName,
  })

  return (
    <>
      {
      switches.map(switchItem => (
        <Switch
          key={switchItem.keyId}
          label={switchItem.label}
          checked={!!fields.find(item => item.keyId === switchItem.keyId)}
          onCheckedChange={(checked) => {
            if (!checked) {
              const item = fields.findIndex(item => item.keyId === switchItem.keyId)
              remove(item)
            } else append({
              alt: switchItem.alt,
              image: switchItem.image,
              keyId: switchItem.keyId,
              link: switchItem.link,
            })
          }}
        />
      ))
    }
    </>
  )
}
