import Link from 'next/link'

export function Footer() {
  const today = new Date()

  return (
    <footer className="bg-slate-500 p-4 text-white">
      <div className="m-auto flex max-w-screen-lg flex-col items-center">
        <small>
          Copyright © 🞄
          {' '}
          {today.getFullYear().toString()}
        </small>

        <small>
          <Link aria-label={`Go to Github's Felipe Scherer's page`} className="transition-all" href="https://github.com/fescherer" target="_blank">
            fescherer
            |
            Felipe Scherer
          </Link>
        </small>
      </div>
    </footer>
  )
}
