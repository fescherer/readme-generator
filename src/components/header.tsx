import { GithubIcon } from '@/icons/github'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <div className="bg-zinc-900">
      <header className="m-auto flex max-w-5xl items-center justify-between p-4 text-white">
        <Image width={250} height={50} src="/logo.svg" alt="logo" unoptimized />

        <Link target="_blank" className="text-white transition-all hover:text-slate-600" href="https://github.com/fescherer">
          <GithubIcon />
        </Link>
      </header>
    </div>
  )
}
