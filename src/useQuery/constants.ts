import { QueryClientProvider, QueryClient, useQuery, useInfiniteQuery, useQueryClient, useMutation, useQueries, queryOptions } from '@tanstack/react-query';

export { QueryClientProvider, QueryClient, useQuery, useInfiniteQuery, useQueryClient, useMutation, useQueries, queryOptions };

export const QUERY_OPTIONS = {
  defaultOptions: {
    queries: {
      retry: false,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: 0,
      refetchIntervalInBackground: false,
      refetchOnReconnect: false,
      retryOnMount: true,
      refetchOnMount: 'always'
    }
  }
} as const;

export const QUERY_KEYS = {
  GET_STORY_DETAIL: 'GET_STORY_DETAIL',
  GET_STORIES_DASHBOARD: 'GET_STORIES_DASHBOARD',
  SEARCH_STORIES_BY_QUERY: 'SEARCH_STORIES_BY_QUERY'
} as const;
