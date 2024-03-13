import { PropsWithChildren, ReactNode } from 'react'
import { ArrayPath, useFieldArray, useFormContext } from 'react-hook-form'
import { ListText } from '../ListComponent/list-text'
import { ListBadge } from '../ListComponent/list-badge'
import { ListImage } from '../ListComponent/list-image'
import { TItemImage, TItemText } from '@/@types/item'
import { TForm } from '@/@types/form'

type GroupFieldProps = {
  label: string | ReactNode
  displayType: 'badge' | 'image' | 'text' | 'title'
  obj: TItemImage | TItemText
  btnLabel: string
  registerName: ArrayPath<TForm>
  btnDisabled?: boolean
  hasLabel?: boolean
}

export function GroupField({ label, children, displayType, obj, btnLabel, registerName, btnDisabled = false, hasLabel = true }: PropsWithChildren<GroupFieldProps>) {
  const { control } = useFormContext<TForm>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: registerName,
  })

  function addBadge() {
    const randomItem = Math.random().toString()
    append({ ...obj, keyId: randomItem })
  }

  // @ts-ignore
  function onRemove(item) {
    // @ts-ignore
    remove(fields.findIndex(field => field.keyId === item.keyId))
  }

  return (
    <div>
      <h2 className="mb-1 text-form-title">{label}</h2>

      <div className="border-l-2 border-form-highlight/20 pl-2">
        {children}

        <button disabled={btnDisabled} type="button" className="button-fill w-full whitespace-nowrap text-sm" onClick={addBadge}>
          {btnLabel}
        </button>
      </div>

      {
        displayType === 'badge'
          ? <ListBadge fields={fields as TItemImage[]} onClick={onRemove} />
          : displayType === 'image'
            ? <ListImage hasLabel={hasLabel} fields={fields as TItemImage[]} onClick={onRemove} />
            : displayType === 'text'
              ? <ListText fields={fields} remove={remove} />
              : <></>
      }

    </div>
  )
}
