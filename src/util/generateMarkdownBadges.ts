import { TItemImage } from '@/@types/item'
import { slugfy } from './slugfy'

export function generateBadges(arr: TItemImage[]) {
  return arr?.map((item: TItemImage) => {
    const slug = slugfy(item.alt)
    return `[![${item?.alt}][${slug}-shield]][${slug}-url]`
  })
}

export function generateURL(arr: TItemImage[]) {
  return arr?.map((item: TItemImage) => {
    const slug = slugfy(item.alt)
    return `[${slug}-shield]: ${item.image}\n[${slug}-url]: ${item.link}`
  })
}
