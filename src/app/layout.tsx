import './globals.css'
import type { Metadata } from 'next'
import { Inter, Titillium_Web, Raleway } from 'next/font/google'
import 'swiper/css';
import 'swiper/css/pagination';

const primary = Raleway({
  weight: ['800', "900"],
  subsets: ['latin'],
  variable: "--primary-font"
})

const secondary = Titillium_Web({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  variable: "--secondary-font"
})

export const metadata: Metadata = {
  title: 'Wesley Ferreira - Dev',
  description: 'Wesley Software Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${primary.variable} ${secondary.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
