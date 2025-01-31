import API from '@/service/api';
import { IServiceFunctionParams, IServiceResponseAPI } from '@/types/service';

export function _servicePriceRange(props?: IServiceFunctionParams) {
  return new API<
    IServiceResponseAPI<{
      mostExpensive: number;
      cheaper: number;
    }>
  >()
    .method('GET')
    .signal(props?.context?.signal)
    .append('/products/price-range')
    .build()
    .then(({ data }) => {
      return data;
    });
}
