import { ServiceAPI } from '@/apis';
import { flatten } from '@/utils/lodash';
import { parseDataToObject } from '@/utils/format';
import { useInfiniteQuery, QUERY_KEYS } from '@/useQuery/constants';

const _loadData = async ({ searchOptions, page }: { searchOptions?: string, page: number }) => {
  const nextPage = page + 1;

  const params = parseDataToObject(searchOptions);

  const result = await ServiceAPI.searchStoriesByQueryString(nextPage, params);

  const data = result?.data?.items || [];

  const metadata = result?.data?.metadata;

  const hasNextPage = ((metadata?.current_page || 0) < (metadata?.total_pages || 0));

  return { data, page: nextPage, hasNextPage };
}

export const useSearchStoriesByQuery = ({ searchOptions, enabled = true }: { searchOptions?: string, enabled?: boolean } = {}) => {
  const query = useInfiniteQuery({
    queryKey: [QUERY_KEYS.SEARCH_STORIES_BY_QUERY, { searchOptions }],
    queryFn: async ({ pageParam: { page } }) => await _loadData({ searchOptions, page }),
    getNextPageParam: lastPage => !!lastPage.hasNextPage ? ({ page: lastPage.page, hasNextPage: lastPage.hasNextPage }) : null,
    select: data => flatten(data.pages.map((page) => page.data)),
    initialPageParam: { page: 0, hasNextPage: false },
    enabled
  });

  return query;
};
