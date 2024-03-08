import Link from 'next/link'

export function BuildWithHelp() {
  return (
    <div className="space-y-4 leading-6">
      <p>
        If your tech is not listed in the dopdown, you can add a custom badge. Create your own badges at
        <Link className="link ml-1" href="https://shields.io/">shields.io</Link>
        .
      </p>

      <p>
        You can also search in
        <Link className="link ml-1" href="https://github.com/Ileriayo/markdown-badges">this amazing repo</Link>
        more badges following the same style
      </p>
    </div>
  )
}
