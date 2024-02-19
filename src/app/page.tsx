import { SectionCard } from '@/components/section-card'
import { AboutProject } from '@/features/about-project'
import { BasicInformation } from '@/features/basic-information'
import { BuildWith } from '@/features/build-with'
import { ContactUs } from '@/features/contact-us'
import { Contributors } from '@/features/contributors'
import { FAQ } from '@/features/faq'
import { GifsPrints } from '@/features/gifs-prints'
import { HowToUse } from '@/features/how-to-use'
import { ProjectInfo } from '@/features/project-info'
import { SpecialThanks } from '@/features/special-thanks'
import { Summary } from '@/features/summary'

const items = [
  {
    title: 'Basic Information',
    description: 'Fill the obrigatory fields',
    children: <BasicInformation />,
  },
  {
    title: 'Sumamry',
    description: 'Sumamry',
    children: <Summary />,
  },
  {
    title: 'About Project',
    description: '',
    children: <AboutProject />,
  },
  {
    title: 'Build with',
    description: 'Tecnologies used',
    children: <BuildWith />,
  },
  {
    title: 'Contact Us',
    description: 'Find us in our socials',
    children: <ContactUs />,
  },
  {
    title: 'Contributors',
    description: 'People who create the project',
    children: <Contributors />,
  },
  {
    title: 'FAQ',
    description: 'QUESTIONS AND answers',
    children: <FAQ />,
  },
  {
    title: 'GIFS/PRINTS',
    description: 'Gifs/Prints',
    children: <GifsPrints />,
  },
  {
    title: 'How to use',
    description:
      'To get this project up and running locally on your pc, follow the steps:',
    children: <HowToUse />,
  },
  {
    title: 'Project Info',
    description: 'Some project info',
    children: <ProjectInfo />,
  },
  {
    title: 'Special Thanks',
    description: 'Give credtis for who help you',
    children: <SpecialThanks />,
  },
]

export default function Home() {
  return (
    <main className="m-auto flex flex-col">
      <h1>Markdown generator</h1>

      <div className="divide-y divide-solid">
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
    </main>
  )
}
