import { TForm } from '@/@types/form'

export const defaultValues: TForm = {
  basicInformation: {
    repo: '',
    projectName: '',
    projectImage: '',
    shortDescription: '',
    description: '',

    hasStarsBadge: false,
    hasContributorsBadge: false,
    hasForksBadge: false,
    hasLicenseBadge: false,
    hasContributing: false,
    hasIssuesBadge: false,

    docsLink: '',
  },
  buildWith: {
    enabled: false,
    items: [],
    customItems: [],
  },
  contactUs: {
    enabled: false,
    items: [],
  },
  contributors: {
    enabled: false,
    items: [],
  },
  faq: {
    enabled: false,
    items: [],
  },
  howToUse: {
    enabled: false,
    items: [
      { title: 'Clone repository', text: 'git clone <repo-name>', keyId: Math.random().toString() },
      { title: 'Install dependencies', text: 'pnpm install', keyId: Math.random().toString() },
      { title: 'Run project', text: 'pnpm dev', keyId: Math.random().toString() },
    ],
  },
  gifsPrints: {
    enabled: false,
    items: [],
  },
  specialThanks: {
    enabled: false,
    items: [],
  },
  tableOfContent: {
    enabled: false,
  },
}
