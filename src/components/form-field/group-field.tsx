import { PropsWithChildren, ReactNode } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { ListText } from '../ListComponent/list-text'
import { ListBadge } from '../ListComponent/list-badge'
import { TBadge } from '@/@types/badge'
import { ListImage } from '../ListComponent/list-image'

type GroupFieldProps = {
  label: string | ReactNode
  displayType: 'badge' | 'image' | 'text' | 'title'
  obj: any
  btnLabel: string
  registerName: string
}

export function GroupField({ label, children, displayType, obj, btnLabel, registerName }: PropsWithChildren<GroupFieldProps>) {
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: registerName,
  })

  function addBadge() {
    append(obj)
  }

  function onRemove(item: TBadge) {
    // @ts-ignore
    remove(fields.findIndex(field => field.value === item.value))
  }

  return (
    <div>
      <h2 className="mb-1 text-form-title">{label}</h2>

      <div className="border-l-2 border-form-highlight/20 pl-2">
        {children}

        <button type="button" className="button-fill w-full whitespace-nowrap text-sm" onClick={addBadge}>
          {btnLabel}
        </button>
      </div>

      {
        displayType === 'badge'
          ? <ListBadge fields={fields as unknown as TBadge[]} onClick={onRemove} />
          : displayType === 'image'
            ? <ListImage fields={fields as unknown as TBadge[]} onClick={onRemove} />
            : displayType === 'text'
              ? <ListText fields={fields} remove={remove} />
              : displayType === 'title' ? <></> : <></>
      }

    </div>
  )
}
