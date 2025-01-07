import Image from 'next/image'

import ImageFrame1 from '@/public/flysites-landing-pages.png'
import ImageFrame2 from '@/public/flysites-landing-pages-2.png'
export function SecaoDois() {
  return (
    <div className="ml-auto mr-auto flex w-full max-w-[1240px] gap-4 px-2 py-6 md:py-20 lg:px-0">
      <div className="w-full rounded-lg">
        <Image
          src={ImageFrame1}
          className="h-full max-h-[600px] w-full rounded-lg object-cover"
          alt=""
          width={1000}
          height={700}
          quality={100}
        />
      </div>
      <div className="hidden w-full rounded-lg md:block">
        <Image
          src={ImageFrame2}
          className="h-full max-h-[600px] w-full rounded-lg object-cover"
          alt=""
          width={1000}
          height={700}
          quality={100}
        />
      </div>
    </div>
  )
}
