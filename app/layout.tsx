import type { Metadata } from 'next'
import './globals/styles/global.scss'

import AppStoreProvider from '@/globals/providers/app-store-provider'
import ThemeProvider from '@/globals/providers/theme-provider'

export const metadata: Metadata = {
  title: 'Market',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppStoreProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AppStoreProvider>
      </body>
    </html>
  )
}
