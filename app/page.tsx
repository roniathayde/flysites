import { SecaoCinco } from '@/components/secao-cinco'
import { SecaoDois } from '@/components/secao-dois'
import { SecaoQuatro } from '@/components/secao-quatro'
import { SecaoTres } from '@/components/secao-tres'
import { SecaoUm } from '@/components/secaoum'

export default function Home() {
  return (
    <>
      <SecaoUm />
      <SecaoDois />
      <SecaoTres />
      <SecaoQuatro />
      <SecaoCinco />
    </>
  )
}
