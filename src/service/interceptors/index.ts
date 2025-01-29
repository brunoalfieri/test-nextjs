import { AxiosInstance } from 'axios';
import verificationError from './verificationError';

export default function setInterceptors(axiosClient: AxiosInstance) {
  // verificationAuthExp(axiosClient)
  verificationError(axiosClient);
}
