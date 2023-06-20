import FilterGrid from '@/components/FilterGrid'
import Hero from '@/components/hero/Hero'
import { Roboto_Condensed } from 'next/font/google'

const robotoCondesed = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <section className="p-10 container mx-auto">
        <h3 className={robotoCondesed.className}>LISTA DE PERSONAGENS DA MARVEL</h3>
      </section>

      <section className="container mx-auto p-10">
        <FilterGrid />
      </section>

    </main>
  )
}
