import Image from 'next/image'
import Link from 'next/link'

import Logotipo from '@/public/chart-square.svg'

export function Header() {
  return (
    <header className="sticky top-0 ml-auto mr-auto flex h-[64px] w-full max-w-[1240px] items-center gap-4 border-b border-[#888888]/20 bg-[#0D0D0D]/70 px-2 backdrop-blur-lg">
      <div className="flex items-center gap-2">
        <Image src={Logotipo} alt="logotipo flysites" width={40} height={40} />
        <span className="text-2xl font-bold tracking-tight text-white">
          Flysites
        </span>
      </div>
      <nav className="flex h-full w-full max-w-[420px] items-center justify-around gap-2">
        <Link
          className="flex h-full items-center border-b border-transparent text-sm font-semibold text-[#888888] transition-colors hover:border-[#843DF7] hover:text-white"
          href="#"
        >
          O que fazemos
        </Link>
        <Link
          className="flex h-full items-center border-b border-transparent text-sm font-semibold text-[#888888] transition-colors hover:border-[#843DF7] hover:text-white"
          href="#"
        >
          Cases
        </Link>
        <Link
          className="flex h-full items-center border-b border-transparent text-sm font-semibold text-[#888888] transition-colors hover:border-[#843DF7] hover:text-white"
          href="#"
        >
          Workflow
        </Link>
        <Link
          className="flex h-full items-center border-b border-transparent text-sm font-semibold text-[#888888] transition-colors hover:border-[#843DF7] hover:text-white"
          href="#"
        >
          Comece um projeto
        </Link>
      </nav>
    </header>
  )
}
