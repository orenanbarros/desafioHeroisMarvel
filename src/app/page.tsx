'use client'

import FilterGrid from '@/components/FilterGrid'
import Hero from '@/components/hero/Hero'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Roboto_Condensed } from 'next/font/google'

const robotoCondesed = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})


export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main className="flex min-h-screen flex-col">
        <Hero />
        <section className="p-10 container mx-auto">
          <h3 className={robotoCondesed.className}>LISTA DE PERSONAGENS DA MARVEL</h3>
        </section>

        <section className="container mx-auto p-10">
          <FilterGrid />
        </section>

      </main>
    </QueryClientProvider>
  )
}
