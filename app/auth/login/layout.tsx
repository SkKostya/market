import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Log in Market',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
