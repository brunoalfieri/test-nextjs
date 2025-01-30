import API from '@/service/api';
import { Prisma } from '@prisma/client';
import { ProductReadSchema } from './schema';

export function _serviceProductsRead({ productId }: { productId: string }) {
  return new API<
    Prisma.ProductsGetPayload<{
      include: {
        category: true;
      };
    }>
  >()
    .method('GET')
    .append('/products/' + productId)
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
