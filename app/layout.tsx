import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Raiz Apartments | Modern Living in the Heart of Lagos',
  description: 'Raiz Apartments – Modern, stylish serviced apartments in the heart of Lagos. Studio, 1-bedroom and 2-bedroom units. 15 mins from the airport.',
  keywords: 'apartments Lagos, short let Lagos, serviced apartments Lagos, Raiz Apartments, Victoria Island, Lekki',
  openGraph: {
    title: 'Raiz Apartments | Modern Living in the Heart of Lagos',
    description: 'Stylish serviced apartments with 24/7 security, high-speed internet, and easy access to Lagos Island, Lekki, and the airport.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('raiz-theme')||'light';if(t==='dark')document.documentElement.classList.add('dark');})()`,
          }}
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="font-sans bg-white text-brand-gray antialiased dark:bg-brand-darker dark:text-gray-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}
