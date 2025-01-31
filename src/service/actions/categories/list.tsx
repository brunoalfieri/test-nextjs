import API from '@/service/api';
import { IServiceFunctionParams, IServiceResponseAPI } from '@/types/service';
import { Prisma } from '@prisma/client';
import { ProductCreateSchema } from '../products/schema';

type CategoryResponse = Prisma.ProductsCategoryGetPayload<{
  include: {
    _count: true;
  };
}>;

export function _serviceCategoriesList(props?: IServiceFunctionParams) {
  return new API<IServiceResponseAPI<CategoryResponse[]>>()
    .method('GET')
    .signal(props?.context?.signal)
    .append('/categories')
    .build()
    .then<(ProductCreateSchema['category'] & CategoryResponse)[]>(
      ({ data }) => {
        return data.result.map((category) => {
          return {
            ...category,
            id: category.id,
            label: category.name,
            labelOption: undefined,
          };
        });
      }
    );
}
