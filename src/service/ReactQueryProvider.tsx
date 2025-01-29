/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {
  DefaultError,
  QueryClient,
  QueryClientProvider,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AxiosError } from 'axios';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // throwOnError: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV !== 'production' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
      {children}
    </QueryClientProvider>
  );
};

export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> =
  Awaited<ReturnType<FnType>>;

export type QueryConfig<T extends (...args: any[]) => Promise<any>> = Omit<
  UseQueryOptions<Awaited<ReturnType<T>>, AxiosError>,
  'queryKey' | 'queryFn'
>;

export type MutationConfig<T extends (...args: any) => Promise<any>> = Omit<
  UseMutationOptions<Awaited<ReturnType<T>>, DefaultError, Parameters<T>[0]>,
  'mutationKey'
>;

export default ReactQueryProvider;
