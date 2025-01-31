import API from '@/service/api';
import {
  IServiceFunctionParams,
  IServiceTableParams,
  IServiceTableResponse,
} from '@/types/service';
import { Prisma } from '@prisma/client';
import { ProductReadSchema } from './schema';

export function _serviceProductsTable({
  context,
  params,
}: IServiceFunctionParams<{
  params: IServiceTableParams & {
    minPrice?: string | null;
    maxPrice?: string | null;
    orderBy?: string | null;
    sortBy?: string | null;
  };
}>) {
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
    .then<IServiceTableResponse<ProductReadSchema>>(({ data }) => {
      return {
        ...data,

        result: data.result.map((product) => {
          return {
            ...product,
            category: {
              id: product.category.id,
              label: product.category.name,
            },
          } as ProductReadSchema;
        }),
      };
    });
}
