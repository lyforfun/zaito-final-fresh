import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zaito.kz - Микрокредиты онлайн в Казахстане | Сравнение МФО',
  description: 'Сравните условия микрокредитов от ведущих МФО Казахстана. Быстрое оформление займов онлайн в Алматы, Нур-Султане, Шымкенте и других городах.',
  openGraph: {
    title: 'Zaito.kz - Микрокредиты онлайн в Казахстане',
    description: 'Сравните условия микрокредитов от ведущих МФО Казахстана',
    url: 'https://zaito.kz',
    siteName: 'Zaito.kz',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
