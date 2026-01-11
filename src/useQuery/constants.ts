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
  GET_STORY_MARKED: 'GET_STORY_MARKED',
  GET_ALL_CATEGORY: 'GET_ALL_CATEGORY',
  GET_STORY_CHAPTER: 'GET_STORY_CHAPTER',
  GET_STORY_CHAPTERS: 'GET_STORY_CHAPTERS',
  GET_CHAPTER_CONTENT: 'GET_CHAPTER_CONTENT',
  GET_STORY_RATE_VOTES: 'GET_STORY_RATE_VOTES',
  GET_STORIES_DASHBOARD: 'GET_STORIES_DASHBOARD',
  GET_STORY_RATE_REVIEWS: 'GET_STORY_RATE_REVIEWS',
  GET_TRANSLATE_VERSIONS: 'GET_TRANSLATE_VERSIONS',
  SEARCH_AUTHOR_BY_NAME: 'SEARCH_AUTHORS_BY_NAME',
  SEARCH_STORIES_BY_QUERY: 'SEARCH_STORIES_BY_QUERY'
} as const;
