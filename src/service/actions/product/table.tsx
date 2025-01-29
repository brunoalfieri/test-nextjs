import API from '@/service/api';
import {
  ActionQueryConfigArgs,
  IServiceFunctionParams,
  IServiceTableParams,
  IServiceTableResponse,
} from '@/types/service';
import { Prisma } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { EProductAction } from '.';

export function serviceProductsTable({
  context,
  params,
}: IServiceFunctionParams<{ params: IServiceTableParams }>) {
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
    .data<IServiceTableParams>(params)
    .build()
    .then(async ({ data }) => {
      return data;
    });
}

export const useServiceProductTable = (
  args: ActionQueryConfigArgs<typeof serviceProductsTable>
) => {
  return useQuery({
    queryKey: [EProductAction.PRODUCTS_TABLE, args.params],
    ...args.queryConfig,
    queryFn: (context) =>
      serviceProductsTable({ context, params: args.params }),
  });
};
