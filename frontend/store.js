import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {},
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devtools: true,
})

export default store
