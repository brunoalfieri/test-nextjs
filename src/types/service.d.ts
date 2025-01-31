import { QueryFunctionContext } from '@tanstack/react-query';

export type IServiceFunctionParams<T = object> = {
  context?: QueryFunctionContext;
} & T;

export interface IServiceResponseAPI<T> {
  result: T;
}

export interface IServiceTableSort {
  sort?: {
    field: string;
    order: 'ASC' | 'DESC';
  };
}
export interface IServiceTableParams extends IServiceTableSort {
  search?: string | null;
  page: number | string;
  pageSize: number | string;
}
export interface IServiceTableResponse<T> extends IServiceTableParams {
  result: T[];
}
