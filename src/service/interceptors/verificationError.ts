// import { useAuthStore } from '@diazero-technologies/suite-utils'
import { AxiosInstance } from 'axios';
import { NextResponse } from 'next/server';

export default function verificationError(axiosClient: AxiosInstance) {
  axiosClient.interceptors.response.use(
    (config) => {
      return config;
    },
    (error) => {
      if (error.code === 'ERR_CANCELED') return Promise.reject(error);
      if (error.response.status === 401 && error.response.notExpel !== true) {
        // useAuthStore.getState().logout()
        NextResponse.redirect(new URL('/'));
        return Promise.reject('NOT_ALLOWED');
      }
      return Promise.reject(error);
    }
  );
}
