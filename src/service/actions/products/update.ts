import API from '@/service/api';
import { Prisma } from '@prisma/client';
import { ProductReadSchema, ProductUpdateSchema } from './schema';

export function _serviceProductUpdate({
  product,
}: {
  product: ProductReadSchema;
}) {
  const { id: productId, ...data } = product;
  return new API<
    Prisma.ProductsGetPayload<{
      include: {
        category: true;
      };
    }>
  >()
    .method('PUT')
    .append('/products/' + productId)
    .data<ProductUpdateSchema>(data)
    .build()
    .then(async ({ data }) => {
      return data;
    });
}
