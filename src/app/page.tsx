'use client'
import { TForm } from '@/@types/form'
import { BuildWithHelp } from '@/components/HelpPopover/build-with-help'
import { SectionCard } from '@/components/section-card'
import { BasicInformation } from '@/features/basic-information'
import { BuildWith } from '@/features/build-with'
import { ContactUs } from '@/features/contact-us'
import { Contributors } from '@/features/contributors'
import { FAQ } from '@/features/faq'
import { GifsPrints } from '@/features/gifs-prints'
import { HowToUse } from '@/features/how-to-use'
import { Preview } from '@/features/preview'
import { SpecialThanks } from '@/features/special-thanks'
import { defaultValues } from '@/util/form-default-values'
import { FormProvider, useForm } from 'react-hook-form'

const items = [
  {
    value: 'basic-information',
    title: 'Basic Information',
    description: 'Fill the obrigatory fields',
    children: <BasicInformation />,
  },
  {
    value: 'build-with',
    title: 'Build with',
    description: 'Technologies used',
    children: <BuildWith />,
    helpPopover: <BuildWithHelp />,
  },
  {
    value: 'how-to-use',
    title: 'How to use',
    description:
      'To get this project up and running locally on your pc, follow the steps:',
    children: <HowToUse />,
  },
  {
    value: 'gifs-prints',
    title: 'Gifs/Prints',
    description: 'Gifs/Prints of your project',
    children: <GifsPrints />,
  },
  {
    value: 'faq',
    title: 'FAQ',
    description: 'Questions and answers about your project',
    children: <FAQ />,
  },
  {
    value: 'contact-us',
    title: 'Contact Us',
    description: 'Find us in our socials',
    children: <ContactUs />,
  },
  {
    value: 'contributors',
    title: 'Contributors',
    description: 'People who create the project',
    children: <Contributors />,
  },
  {
    value: 'special-thanks',
    title: 'Special Thanks',
    description: 'Give credits for who help you',
    children: <SpecialThanks />,
  },
]

export default function Home() {
  const methods = useForm<TForm>({ defaultValues })

  return (
    <FormProvider {...methods}>

      <main className="m-auto flex w-full max-w-5xl flex-col p-4">
        <h1 className="text-3xl font-medium underline">Markdown generator</h1>

        <div className="flex flex-col gap-1 md:flex-row">
          <div className="flex max-w-[320px] flex-col gap-4 py-4">
            {items.map(item => (
              <SectionCard
                key={item.title}
                description={item.description}
                title={item.title}
                helpPopover={item?.helpPopover}
              >
                {item.children}
              </SectionCard>
            ))}
          </div>

          <Preview />
        </div>
      </main>
    </FormProvider>
  )
}
