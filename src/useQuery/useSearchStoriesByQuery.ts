import { ServiceAPI } from '@/apis';
import { flatten } from '@/utils/lodash';
import { useInfiniteQuery, QUERY_KEYS } from '@/useQuery/constants';

const _loadData = async ({ page }: { page: number }) => {
  const nextPage = page + 1;

  const result = await ServiceAPI.searchStoriesByQueryString(nextPage, { keyword: '' });

  const data = result?.data?.items || [];

  const metadata = result?.data?.metadata;

  const hasNextPage = metadata?.total_items < metadata?.limit;

  return { data, page: nextPage, hasNextPage };
}

export const useSearchStoriesByQuery = ({ enabled = true } = {}) => {
  const query = useInfiniteQuery({
    queryKey: [QUERY_KEYS.SEARCH_STORIES_BY_QUERY],
    queryFn: async ({ pageParam: { page } }) => await _loadData({ page }),
    getNextPageParam: lastPage => ({ page: lastPage.page, hasNextPage: lastPage.hasNextPage }),
    select: data => flatten(data.pages.map((page) => page.data)),
    initialPageParam: { page: 0, hasNextPage: false },
    enabled
  });

  return query;
};
