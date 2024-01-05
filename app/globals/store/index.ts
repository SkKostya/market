import { configureStore } from '@reduxjs/toolkit'

import slicesReducers from './slices'

export const makeStore = () => {
  return configureStore({
    reducer: {
      ...slicesReducers,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
