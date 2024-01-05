import {
  BaseQueryApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

const bq = fetchBaseQuery({
  baseUrl: 'localhost:8080',
})

export const baseQuery = async (
  ...args: [args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}]
) => {
  const result = await bq(...args)
  return result
}
