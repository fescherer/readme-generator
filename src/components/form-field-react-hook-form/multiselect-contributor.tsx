import { ArrayPath, useFieldArray, useFormContext } from 'react-hook-form'
import { Multiselect as PrimitiveSelect } from '../form-field/multiselect'
import { TForm } from '@/@types/form'
import { TItemImage } from '@/@types/item'

type SelectProps = {
  registerName: ArrayPath<TForm>
  triggerLabel: string
  items: TItemImage[]
}

export function MultiSelectContributor({ registerName, triggerLabel, items }: SelectProps) {
  const { control } = useFormContext<TForm>()
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
      data={fields as TItemImage[]}
      setDataAppend={append}
    />
  )
}
