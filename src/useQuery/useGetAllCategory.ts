import { ServiceAPI } from '@/apis';
import { flatten } from '@/utils/lodash';
import { useInfiniteQuery, QUERY_KEYS } from '@/useQuery/constants';

const _loadData = async ({ page }: { page?: number }) => {
  const LIMIT = 999;

  const result = await ServiceAPI.getAllCategory(page, LIMIT);

  const metadata = result?.data?.metadata;

  const chapters = result?.data?.items || [];

  const totalChapters = (metadata?.total_items || 0);

  const currentChapters = (metadata?.limit || 0) * (metadata?.current_page || 0);

  const hasNextPage = (!totalChapters || !currentChapters) ? false : (currentChapters < totalChapters);

  return { data: chapters, page: !!hasNextPage ? ((page || 0) + 1) : 1, hasNextPage };
}

export const useGetAllCategory = ({ enabled = true }: { enabled?: boolean } = {}) => {
  const query = useInfiniteQuery({
    queryKey: [QUERY_KEYS.GET_ALL_CATEGORY],
    queryFn: async ({ pageParam: { page } }) => await _loadData({ page }),
    getNextPageParam: lastPage => (!!lastPage?.hasNextPage ? { page: lastPage?.page, hasNextPage: lastPage.hasNextPage } : null),
    select: data => flatten(data.pages.map((page) => page.data)),
    initialPageParam: { page: 1, hasNextPage: false },
    enabled
  });

  return query;
}
