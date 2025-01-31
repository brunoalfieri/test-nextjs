import API from '@/service/api';
import { ProductsCategory } from '@prisma/client';
import { CategoryDeleteSchema } from './schema';

export function _serviceCategoryDelete({
  id: categoryId,
}: CategoryDeleteSchema) {
  return new API<ProductsCategory>()
    .method('DELETE')
    .append('/categories/' + categoryId)
    .build();
}
