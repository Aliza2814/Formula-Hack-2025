import './globals.css'
import { Orbitron, Roboto } from 'next/font/google'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-display',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'F1 Hackathon - Formula Hacks 2025',
  description: 'The ultimate Formula 1 themed hackathon. Build, innovate, and race to the finish line with cutting-edge tech.',
  keywords: ['hackathon', 'F1', 'Formula 1', 'coding', 'innovation', 'technology'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background-dark font-body text-text-dark">
        {children}
      </body>
    </html>
  )
}
