import { QueryClientProvider, QueryClient, useQuery, useInfiniteQuery, useQueryClient, useMutation, useQueries, queryOptions } from '@tanstack/react-query';

export { QueryClientProvider, QueryClient, useQuery, useInfiniteQuery, useQueryClient, useMutation, useQueries, queryOptions };

export const QUERY_OPTIONS = {
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: true,
      refetchInterval: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      staleTime: 0,
      refetchOnMount: 'always'
    }
  }
} as const;

export const QUERY_KEYS = {

} as const;
