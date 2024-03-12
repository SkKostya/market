import React from 'react'
import './auth.scss'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="auth-layout">
      <div className="auth-layout__window">
        <div className="auth-layout__content">{children}</div>
      </div>
    </div>
  )
}
