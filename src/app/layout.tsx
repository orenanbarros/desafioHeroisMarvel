import Header from '@/components/base/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/base/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marvel Heros',
  description: 'Search Page of Marvel Heros',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
