import './layout.scss'

import { Footer, Header } from '@/globals/entities'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
