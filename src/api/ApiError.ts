import { AxiosError, AxiosResponse } from 'axios'

export interface IApiError {
  status: number | undefined,
  message: string | undefined,
  data: any | undefined,
  raw: AxiosResponse
}

export default class ApiError {
  public readonly status: number | undefined

  public readonly message: string | undefined

  public readonly data: any | undefined

  public readonly readableError?: string

  public readonly raw: any

  constructor (error: AxiosError) {
    this.status = error?.response?.status
    this.message = error.message || (error.response && error.response.statusText)
    this.data = error?.response?.data
    this.raw = error
  }
}