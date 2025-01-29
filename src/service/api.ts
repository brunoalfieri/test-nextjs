import axios, { AxiosRequestConfig, Method } from 'axios';
import setInterceptors from './interceptors';
const client = axios.create();

setInterceptors(client);

export default class API<T> {
  config = {
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  } as AxiosRequestConfig;

  method(nameMethod: Method) {
    this.config.method = nameMethod;
    return this;
  }

  signal(signal?: AbortSignal) {
    this.config.signal = signal;
    return this;
  }

  append(url: string) {
    this.config.url = url;
    return this;
  }

  params<P>(params: P) {
    this.config.params = params;
    return this;
  }

  data<X>(data: X) {
    this.config.data = data;
    return this;
  }
  build() {
    return client<T>(this.config);
  }
}
