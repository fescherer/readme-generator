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

  hasStarsBadge: boolean
  hasContributorsBadge: boolean
  hasForksBadge: boolean
  hasLicenseBadge: boolean
  hasContributing: boolean
  hasIssuesBadge: boolean
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
