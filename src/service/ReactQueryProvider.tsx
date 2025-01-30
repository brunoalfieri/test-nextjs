'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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

export default ReactQueryProvider;
