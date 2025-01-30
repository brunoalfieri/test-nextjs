import API from '@/service/api';
import { Prisma } from '@prisma/client';
import { ProductDeleteSchema } from './schema';

export function _serviceProductDelete({ id }: ProductDeleteSchema) {
  return new API<
    Prisma.ProductsGetPayload<{
      include: {
        category: true;
      };
    }>
  >()
    .method('DELETE')
    .append('/products/' + id)
    .build();
}
