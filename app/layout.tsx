import Header from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter,Nunito} from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
  weight:'800',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable}`}>
      <body>
      <Header />
        {children}</body>
    </html>
  )
}