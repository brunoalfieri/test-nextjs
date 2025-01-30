import API from '@/service/api';
import {
  IServiceFunctionParams,
  IServiceTableParams,
  IServiceTableResponse,
} from '@/types/service';
import { Prisma } from '@prisma/client';

export function _serviceProductsTable({
  context,
  params,
}: IServiceFunctionParams<{ params: IServiceTableParams }>) {
  return new API<
    IServiceTableResponse<
      Prisma.ProductsGetPayload<{
        include: {
          category: true;
        };
      }>
    >
  >()
    .method('GET')
    .signal(context?.signal)
    .append('/products')
    .params<IServiceTableParams>(params)
    .build()
    .then(async ({ data }) => {
      return data;
    });
}
