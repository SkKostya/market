import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  dataThemeAttribute,
  themeStorage,
  ThemeType,
} from '@/globals/providers/theme-provider'

const initialState: ThemeType = 'light'

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState as ThemeType,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      const { payload } = action
      document.documentElement.setAttribute(dataThemeAttribute, payload)
      localStorage.setItem(themeStorage, payload)
      state = payload
      return state
    },
  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
