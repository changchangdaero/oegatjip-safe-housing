import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { SiteHeader } from '@/components/oigatjip/site-header'
import { MobileTabBar } from '@/components/oigatjip/mobile-tab-bar'
import './globals.css'

export const metadata: Metadata = {
  title: '외같집 | 외국인 안심 주거 플랫폼',
  description:
    '외국인도 같은 기준으로, 안심하고 계약하는 집. 등기부등본·계약서 AI 분석, 계약 위험 진단, 다국어 절차 안내까지 한 곳에서.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2f5bd6',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="bg-background">
      <body className="font-sans antialiased">
        <SiteHeader />
        <main className="pb-20 lg:pb-0">{children}</main>
        <MobileTabBar />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
