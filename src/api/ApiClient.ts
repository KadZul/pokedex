import { AxiosInstance, AxiosResponse } from 'axios'
import ApiError, { IApiError } from './ApiError'

enum HttpMethods {
  Get = 'get',
  Put = 'put',
  Post = 'post',
  Patch = 'patch',
  Delete = 'delete',
}

interface ApiClient {
  httpProvider: AxiosInstance
  requestTimeout: number
  baseUrl: string
}

class ApiClientImpl {
  private requestTimeout: number

  private baseUrl: string

  private readonly httpProvider: AxiosInstance

  constructor(props: ApiClient) {
    this.requestTimeout = props.requestTimeout || 5000
    this.baseUrl = props.baseUrl
    this.httpProvider = props.httpProvider
  }

  public get(
    url: string,
    params: any,
    headers: any,
  ): Promise<AxiosResponse | IApiError> {
    return this.request(
      HttpMethods.Get,
      ApiClientImpl.transformRequestDataToQueryParams(url, params),
      null,
      headers)
  }

  public put(
    url: string,
    params: any,
    headers: any
  ): Promise<AxiosResponse | IApiError> {
    return this.request(HttpMethods.Put, url, params, headers)
  }

  public post(
    url: string,
    params: any,
    headers: any
  ): Promise<AxiosResponse | IApiError> {
    return this.request(HttpMethods.Post, url, params, headers)
  }

  public patch(
    url: string,
    params: any,
    headers: any
  ): Promise<AxiosResponse | IApiError> {
    return this.request(HttpMethods.Patch, url, params, headers)
  }

  public delete(
    url: string,
    params: any,
    headers: any
  ): Promise<AxiosResponse | IApiError> {
    return this.request(HttpMethods.Delete, url, params, headers)
  }

  private request(
    method: HttpMethods,
    url: string,
    data: any,
    headers: any
  ): Promise<AxiosResponse | IApiError> {
    return new Promise((resolve, reject) =>
      this.httpProvider({
        url,
        method,
        headers,
        data,
      })
        .then((response) => resolve(response))
        .catch((err) => {
          reject(new ApiError(err))
        }))
  }

  private static transformRequestDataToQueryParams(url: string, data: any): string {
    const PARAMS = new URLSearchParams()

    if (!data) {
      return url
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const KEY of Object.keys(data)) {
      PARAMS.set(KEY, data[KEY])
    }

    return `${url}?${PARAMS.toString()}`
  }
}

export default {
  ApiClient: ApiClientImpl,
}
