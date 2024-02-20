'use client'

import type { Dispatch, PropsWithChildren } from 'react'
import React, { useState } from 'react'

type IReadmeGenerator = {
  basicInfo: {
    isEnabled: boolean
    githubRepoOwner: string
    githubRepoName: string
    shortDescription: string
    projectImage: string
  }
  summary: {
    isEnabled: boolean
  }
}

const defaultValue: IReadmeGenerator = {
  basicInfo: {
    isEnabled: true,
    githubRepoOwner: '',
    githubRepoName: '',
    shortDescription: '',
    projectImage: '',
  },
  summary: {
    isEnabled: true,
  },
}

interface ReadmeGeneratorType {
  readmeGenerator: IReadmeGenerator
  setReadmeGenerator: Dispatch<React.SetStateAction<IReadmeGenerator>>
}

export const ReadmeGenerator = React.createContext<ReadmeGeneratorType>({
  readmeGenerator: defaultValue,
  setReadmeGenerator: () => null,
})

export function ReadmeGeneratorProvider({ children }: PropsWithChildren) {
  const [readmeGenerator, setReadmeGenerator] = useState<IReadmeGenerator>(defaultValue)

  return (
    <ReadmeGenerator.Provider value={{ readmeGenerator, setReadmeGenerator }}>
      {children}
    </ReadmeGenerator.Provider>
  )
}

export function useReadmeGenerator() {
  return React.useContext(ReadmeGenerator)
}
