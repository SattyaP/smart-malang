import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Smart Malang | Kawal Isu Masalah',
  description: 'Platform untuk mengawal isu-isu semasa di Malang',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporate">
      <body className={`${roboto.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto p-4">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
