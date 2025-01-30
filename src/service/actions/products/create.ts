import API from '@/service/api';
import { Prisma } from '@prisma/client';
import { ProductCreateSchema } from './schema';

export function _serviceProductCreate({
  product,
}: {
  product: ProductCreateSchema;
}) {
  return new API<
    Prisma.ProductsGetPayload<{
      include: {
        category: true;
      };
    }>
  >()
    .method('POST')
    .append('/products')
    .data<ProductCreateSchema>(product)
    .build()
    .then(async ({ data }) => {
      return data;
    });
}
