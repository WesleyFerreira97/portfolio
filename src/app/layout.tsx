import './globals.css'
import type { Metadata } from 'next'
import { Inter, Titillium_Web, Raleway, Staatliches, Poppins } from 'next/font/google'
import 'swiper/css';
import 'swiper/css/pagination';

const primary = Raleway({
  weight: ['300', '400', '500', '600', '700', '800', "900"],
  subsets: ['latin'],
  variable: "--primary-font"
})

// const primary = Staatliches({
//   weight: ['400'],
//   subsets: ['latin'],
//   variable: "--primary-font"
// })

// const secondary = Poppins({
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   variable: "--secondary-font"
// })

const secondary = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--secondary-font"
})

// const secondary = Titillium_Web({
//   subsets: ['latin'],
//   weight: ['200', '300', '400', '600', '700', '900'],
//   variable: "--secondary-font"
// })

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
      <body className={`${primary.variable} ${secondary.variable} font-sans bg-[#e1e1ec]`}>
        {children}
      </body>
    </html>
  )
}
