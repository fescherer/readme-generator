import { useFieldArray, useFormContext } from 'react-hook-form'
import { Multiselect as PrimitiveSelect } from '../form-field/multiselect'
import { TSelect } from '@/@types/select'
import { ListBadge } from '../ListComponent/list-badge'
import { TBadge } from '@/@types/badge'

type SelectProps = {
  registerName: string
  triggerLabel: string
  items: TSelect[]
}

export function MultiSelectBadge({ registerName, triggerLabel, items }: SelectProps) {
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: registerName,
  })

  function onRemove(item: TBadge) {
    // @ts-ignore
    remove(fields.findIndex(field => field.value === item.value))
  }

  return (
    <>
      <PrimitiveSelect
        items={items}
        triggerLabel={triggerLabel}
        data={fields as unknown as TSelect[]}
        setDataAppend={append}
      />

      <ListBadge fields={fields as unknown as TBadge[]} onClick={onRemove} />
    </>

  )
}
