import Image from 'next/image'

import Estrelas from '@/public/estrelas.png'

import { Button } from './ui/button'

export function SecaoUm() {
  return (
    <div className="ml-auto mr-auto w-full max-w-[1240px] py-20">
      <span className="mb-5 text-lg uppercase tracking-widest text-[#888888]">
        Success of financial management
      </span>
      <h1 className="mb-4 text-7xl font-bold text-white">
        The window to success starts with managing your finances
      </h1>
      <span className="text-base text-[#888888]">
        Embark on a transformative journey to success by mastering the art of
        financial management, where the key to unlocking your full potential
        lies in your ability to effectively control and optimize your finances,
        ensuring stability, growth and prosperity.
      </span>
      <footer className="mt-16 flex justify-between">
        <Button
          size={'lg'}
          className="bg-[#843DF7] font-semibold hover:bg-[#843DF7]"
        >
          Try Pinancego for 3 days
        </Button>

        <div className="flex gap-10">
          <div className="flex flex-col items-end justify-between">
            <Image src={Estrelas} alt="" width={108} height={20} />
            <span className="text-sm font-medium text-[#888888]">
              Mais de 100+ cases de sucesso
            </span>
          </div>
          <div className="relative flex">
            <div className="relative -ml-6 size-[40px] rounded-full border-2 border-[#0D0D0D] bg-[#888]" />
            <div className="relative -ml-6 size-[40px] rounded-full border-2 border-[#0D0D0D] bg-[#888]" />
            <div className="relative -ml-6 size-[40px] rounded-full border-2 border-[#0D0D0D] bg-[#888]" />
            <div className="relative -ml-6 size-[40px] rounded-full border-2 border-[#0D0D0D] bg-[#888]" />
          </div>
        </div>
      </footer>
    </div>
  )
}
