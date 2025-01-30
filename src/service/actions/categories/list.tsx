import API from '@/service/api';
import {
  IServiceFunctionParams,
  IServiceQuerySearchResponseAPI,
} from '@/types/service';
import { ProductsCategory } from '@prisma/client';
import { ProductCreateSchema } from '../products/schema';

export function _serviceCategoriesList({ context }: IServiceFunctionParams) {
  return new API<IServiceQuerySearchResponseAPI<ProductsCategory>>()
    .method('GET')
    .signal(context?.signal)
    .append('/categories')
    .build()
    .then<ProductCreateSchema['category'][]>(({ data }) => {
      return data.result.map((category) => {
        return {
          id: category.id,
          label: category.name,
          labelOption: undefined,
        };
      });
    });
}
