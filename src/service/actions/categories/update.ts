import API from '@/service/api';
import { Prisma } from '@prisma/client';
import { CategoryReadSchema, CategoryUpdateSchema } from './schema';

export function _serviceCategoryUpdate(category: CategoryReadSchema) {
  const { id: categoryId, ...data } = category;
  return new API<
    Prisma.ProductsGetPayload<{
      include: {
        category: true;
      };
    }>
  >()
    .method('PUT')
    .append('/categories/' + categoryId)
    .data<CategoryUpdateSchema>(data)
    .build()
    .then(async ({ data }) => {
      return data;
    });
}
