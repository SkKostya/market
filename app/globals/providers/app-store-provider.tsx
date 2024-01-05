'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'

import { AppStore, makeStore } from '@/store/index'

export default function AppStoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
