'use client'

import { useEffect } from 'react'

import { useAppDispatch } from '@/globals/store/hooks'
import { setTheme } from '@/globals/store/slices/theme'

interface ThemeProviderProps {
  children: React.ReactNode
}

export type ThemeType = 'light' | 'dark'
export const themeStorage = 'market-color-theme'
export const dataThemeAttribute = 'data-theme'

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (window) {
      const storageTheme: string | null = localStorage.getItem(themeStorage)
      if (storageTheme) {
        dispatch(setTheme(storageTheme as ThemeType))
      } else {
        const isUserDarkMode = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches
        const defaultMode = isUserDarkMode ? 'dark' : 'light'
        document.documentElement.setAttribute(dataThemeAttribute, defaultMode)
        localStorage.setItem(themeStorage, defaultMode)
      }
    }
  }, [dispatch])

  return children
}

export default ThemeProvider
