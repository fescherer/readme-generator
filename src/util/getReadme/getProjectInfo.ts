import { FieldValues } from 'react-hook-form'

export function getProjectInfo(form: FieldValues) {
  const field = form?.projectInfo
  if (field?.isHide) return ``
  else
    return `
    <!-- **********************🐲 PROJECT INFO 🐲********************** -->

    <a name="contact"></a>

    ## 💬 Project Info 💬

    ${field?.license?.length > 0 ? `[![${field?.license?.[0]?.label}][${field?.license?.[0]?.badge}]][${field?.license?.[0]?.link}]` : ''}
    ${field?.contribute?.length > 0 ? `[![${field?.contribute?.[0]?.label}][${field?.contribute?.[0]?.badge}]][${field?.contribute?.[0]?.link}]` : ''}

    ${field?.descriptionLicense
    ? `
    ### LICENSE

    ${field?.descriptionLicense}
    `
    : ''}

    ${field?.descriptionContribute
    ? `
    ### How to contribute

    ${field?.descriptionContribute}
    `
    : ''}

    <p align="right">(<a href="#readme-top">back to top</a>)</p>
  `
}
