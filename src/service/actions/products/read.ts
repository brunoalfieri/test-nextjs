import API from '@/service/api';
import { IServiceFunctionParams } from '@/types/service';
import { Prisma } from '@prisma/client';
import { ProductReadSchema } from './schema';

export function _serviceProductsRead({
  context,
  productId,
}: IServiceFunctionParams<{ productId: string }>) {
  return new API<
    Prisma.ProductsGetPayload<{
      include: {
        category: true;
      };
    }>
  >()
    .method('GET')
    .append('/products/' + productId)
    .signal(context?.signal)
    .build()
    .then<ProductReadSchema>(async ({ data }) => {
      return {
        ...data,
        category: {
          id: data.category.id,
          label: data.category.name,
        },
      };
    });
}
