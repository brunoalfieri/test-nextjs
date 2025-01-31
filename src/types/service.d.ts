import { QueryFunctionContext } from '@tanstack/react-query';
import { ORDER_BY } from './global';

export type IServiceFunctionParams<T = Partial<object>> = {
  context?: QueryFunctionContext;
} & T;

export interface IServiceResponseAPI<T> {
  result: T;
}
export interface IServiceTableParams {
  search?: string | null;
  page: number | string;
  pageSize: number | string;
  sortBy?: string | null;
  orderBy?: `${ORDER_BY}` | null;
}
export type IServiceTableResponse<
  T,
  X = Partial<object>
> = IServiceTableParams & {
  result: T[];
} & X;
