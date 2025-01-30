import { MutationConfig, QueryConfig } from '@/service/ReactQueryProvider';
import { QueryFunctionContext } from '@tanstack/react-query';

export type ActionMutationConfigArgs<T> = {
  mutationConfig?: MutationConfig<T>;
};

export type ActionQueryConfigArgs<T, Q = object> = {
  queryConfig?: QueryConfig<T>;
} & Omit<Parameters<T>[0], 'context'> &
  Q;

export type IServiceFunctionParams<T = object> = {
  context?: QueryFunctionContext;
} & T;

export interface IServiceResponseAPI<T> {
  result: T[];
}

export interface IServiceTableSort {
  sort?: {
    field: string;
    order: 'ASC' | 'DESC';
  };
}
export interface IServiceTableParams extends IServiceTableSort {
  search?: string;
  page: number;
  pageSize: number;
}
export interface IServiceTableResponse<T> extends IServiceTableParams {
  result: T[];
  pagination: IServiceTableParams;
}
