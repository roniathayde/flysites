import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import Logotipo from '@/public/chart-square.svg'

import { Button } from './ui/button'

export function Header() {
  return (
    <header className="sticky top-0 ml-auto mr-auto flex h-[64px] w-full max-w-[1240px] items-center justify-between gap-4 border-b border-[#888888]/20 bg-[#0D0D0D]/70 px-2 backdrop-blur-lg lg:justify-start">
      <div className="flex items-center gap-2">
        <Image src={Logotipo} alt="logotipo flysites" width={40} height={40} />
        <span className="text-2xl font-bold tracking-tight text-white">
          Flysites
        </span>
      </div>
      <nav className="hidden h-full w-full max-w-[500px] items-center justify-around gap-2 lg:flex">
        <Link
          className="flex h-full items-center border-b border-transparent text-sm font-semibold text-[#888888] transition-colors hover:border-[#843DF7] hover:text-white"
          href="#sobre"
        >
          O que fazemos
        </Link>
        <Link
          className="flex h-full items-center border-b border-transparent text-sm font-semibold text-[#888888] transition-colors hover:border-[#843DF7] hover:text-white"
          href="#como-funciona"
        >
          Como funciona
        </Link>

        <Link
          className="flex h-full items-center border-b border-transparent text-sm font-semibold text-[#888888] transition-colors hover:border-[#843DF7] hover:text-white"
          href="#comece"
        >
          Comece um projeto
        </Link>
      </nav>
      <Popover>
        <PopoverTrigger className="block text-white lg:hidden" asChild>
          <Button>
            <Menu />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          sideOffset={14}
          className="w-screen rounded-none border-[#888888]/20 bg-[#0D0D0D]/70 backdrop-blur-lg"
        >
          <nav className="h-full w-full max-w-[420px] items-center justify-around gap-2 space-y-3">
            <Link
              className="flex h-full items-center border-b border-transparent text-sm font-semibold text-white transition-colors"
              href="#sobre"
            >
              O que fazemos
            </Link>
            <div className="h-[1px] w-full bg-[#888888]/20" />
            <Link
              className="flex h-full items-center border-b border-transparent text-sm font-semibold text-white transition-colors"
              href="#como-funciona"
            >
              Como funciona
            </Link>
            <div className="h-[1px] w-full bg-[#888888]/20" />
            <Link
              className="flex h-full items-center border-b border-transparent text-sm font-semibold text-white transition-colors"
              href="#"
            >
              Comece um projeto
            </Link>
          </nav>
        </PopoverContent>
      </Popover>
    </header>
  )
}
