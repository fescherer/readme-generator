import { FormFieldCheckbox } from '@/components/form-field-checkbox'
import { MiniFormGifPrint } from '@/components/mini-form-gif-prints'

export function GifsPrints() {
  return (
    <div>
      <FormFieldCheckbox label="Hide Gif Print" registerName="gifPrint.isGifPrintHide" />
      <MiniFormGifPrint label1="Url Gif Print" label2="Alt Gif Print" registerName="gifPrint.gifPrint" />
    </div>
  )
}
