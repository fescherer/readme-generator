import { TForm } from '@/@types/form'

export const defaultValues: TForm = {
  basicInformation: {
    repo: '',
    projectName: '',
    projectImage: '',
    shortDescription: '',
    description: '',

    hasStarsBadge: true,
    hasContributorsBadge: true,
    hasForksBadge: true,
    hasLicenseBadge: true,
    hasContributing: true,
    hasIssuesBadge: true,
  },
  buildWith: {
    enabled: true,
    items: [],
    customItems: [],
  },
  contactUs: {
    enabled: true,
    items: [],
  },
  contributors: {
    enabled: true,
    items: [],
  },
  faq: {
    enabled: true,
    items: [],
  },
  howToUse: {
    enabled: true,
    items: [
      { title: 'Clone repository', text: 'git clone <repo-name>', keyId: Math.random().toString() },
      { title: 'Install dependencies', text: 'pnpm install', keyId: Math.random().toString() },
      { title: 'Run project', text: 'pnpm dev', keyId: Math.random().toString() },
    ],
  },
  gifsPrints: {
    enabled: true,
    items: [],
  },
  specialThanks: {
    enabled: true,
    items: [],
  },
  tableOfContent: {
    enabled: true,
  },
}
