import Header from '@/components/base/Header'
import './globals.css'
import { Roboto } from 'next/font/google'

import Footer from '@/components/base/Footer'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
})


export const metadata = {
  title: 'Heróis Marvel',
  description: 'Página de Busca dos Heróis Marvel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
