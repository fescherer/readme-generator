import { useFieldArray, useFormContext } from 'react-hook-form'
import { Multiselect as PrimitiveSelect } from '../form-field/multiselect'
import { TSelect } from '@/@types/select'

type SelectProps = {
  registerName: string
  triggerLabel: string
  items: TSelect[]
}

export function MultiSelectContributor({ registerName, triggerLabel, items }: SelectProps) {
  const { control } = useFormContext()
  const { fields, append } = useFieldArray({
    control,
    name: registerName,
  })

  // const [selectItems, setSelectItems] = useState<TSelect[]>([])
  { /* <ChoosenList fields={fields} remove={remove} /> vai se runico para cada tipo de form */ }
  { /* <ChoosenList fields={fields} remove={remove} /> */ }

  return (
    <PrimitiveSelect
      items={items}
      triggerLabel={triggerLabel}
      data={fields as unknown as TSelect[]}
      setDataAppend={append}
    />
  )
}
