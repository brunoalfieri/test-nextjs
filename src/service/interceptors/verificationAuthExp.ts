import axios, { AxiosInstance } from 'axios'

export default function verificationAuthExp(axiosClient: AxiosInstance) {
  axiosClient.interceptors.request.use(
    config => {
      if (config.headers?.Authorization) {
        const loginExp = false
        if (loginExp) {
          throw new axios.Cancel('Auth is expired. Login again!')
        }
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )
}
