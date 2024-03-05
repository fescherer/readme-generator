'use client'
import { SectionCard } from '@/components/section-card'
import { AboutProject } from '@/features/about-project'
import { BasicInformation } from '@/features/basic-information'
import { BuildWith } from '@/features/build-with'
import { ContactUs } from '@/features/contact-us'
import { Contributors } from '@/features/contributors'
import { FAQ } from '@/features/faq'
import { GifsPrints } from '@/features/gifs-prints'
import { HowToUse } from '@/features/how-to-use'
import { Preview } from '@/features/preview'
import { ProjectInfo } from '@/features/project-info'
import { SpecialThanks } from '@/features/special-thanks'
import { TableOfContents } from '@/features/table-of-contents'
import { FormProvider, useForm } from 'react-hook-form'

const items = [
  {
    value: 'basic-information',
    title: 'Basic Information',
    description: 'Fill the obrigatory fields',
    children: <BasicInformation />,
  },
  {
    value: 'sumamry',
    title: 'Sumamry',
    description: 'Sumamry',
    children: <TableOfContents />,
  },
  {
    value: 'about-project',
    title: 'About Project',
    description: 'Give a nice description',
    children: <AboutProject />,
  },
  {
    value: 'build-with',
    title: 'Build with',
    description: 'Technologies used',
    children: <BuildWith />,
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
    value: 'project-info',
    title: 'Project Info',
    description: 'Some project info',
    children: <ProjectInfo />,
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
  const methods = useForm({ defaultValues: { basicInformation: { repo: '' } } })

  return (
    <FormProvider {...methods}>
      <main className="m-auto flex w-full max-w-5xl flex-col p-4">
        <h1 className="text-3xl font-medium underline">Markdown generator</h1>

        <div className="flex flex-col gap-1 md:flex-row">
          <div className="flex flex-col gap-4 py-4">
            {items.map(item => (
              <SectionCard
                key={item.title}
                description={item.description}
                title={item.title}
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
