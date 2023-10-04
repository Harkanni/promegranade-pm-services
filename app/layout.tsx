import Navigation from '@/components/Navigation'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Pomegranades',
   description: 'Pomegranades Project management.com',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en" className='light'>
         <body className={`${inter.className} dark:bg-slate-900 bg-white`}>
            <Navigation></Navigation>
            {children}
         </body>
      </html>
   )
}
