import { ArrayPath, useFieldArray, useFormContext } from 'react-hook-form'
import { Multiselect as PrimitiveSelect } from '../form-field/multiselect'
import { ListBadge } from '../ListComponent/list-badge'
import { TItemImage } from '@/@types/item'
import { TForm } from '@/@types/form'

type SelectProps = {
  registerName: ArrayPath<TForm>
  triggerLabel: string
  items: TItemImage[]
}

export function MultiSelectBadge({ registerName, triggerLabel, items }: SelectProps) {
  const { control } = useFormContext<TForm>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: registerName,
  })

  function onRemove(item: TItemImage) {
    // @ts-ignore
    remove(fields.findIndex(field => field.keyId === item.keyId))
  }

  return (
    <>
      <PrimitiveSelect
        items={items}
        triggerLabel={triggerLabel}
        data={fields as TItemImage[]}
        setDataAppend={append}
      />

      <ListBadge fields={fields as TItemImage[]} onClick={onRemove} />
    </>

  )
}
