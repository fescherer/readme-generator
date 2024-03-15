import { TItemImage, TItemText } from './item'

export type TForm = {
  basicInformation: TBasicInformation
  tableOfContent: TEnabled
  buildWith: TFormFieldImage & {
    customItems: TItemImage[]
  }
  contactUs: TFormFieldImage
  contributors: TFormFieldImage
  faq: TFormField
  howToUse: TFormField
  gifsPrints: TFormFieldImage
  specialThanks: TFormFieldImage
}

export type TBasicInformation = {
  repo: string
  projectName: string
  projectImage: string
  shortDescription: string
  description: string

  badges: TItemImage[]

  docsLink?: string
}

export type TEnabled = {
  enabled: boolean
}

export type TFormField = TEnabled & {
  items: TItemText[]
}

export type TFormFieldImage = TEnabled & {
  items: TItemImage[]
}
