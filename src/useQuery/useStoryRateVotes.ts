import { ServiceAPI } from '@/apis';
import { flatten } from '@/utils/lodash';
import { useInfiniteQuery, QUERY_KEYS } from '@/useQuery/constants';

const _loadData = async ({ storyId, page }: { storyId?: number, page: number }) => {
  const LIMIT = 10;

  const result = await ServiceAPI.getStoryRateVotes(storyId, page, LIMIT);

  const metadata = result?.data?.metadata;

  const items = result?.data?.items || [];

  const totalItems = (metadata?.total_items || 0);

  const currentPage = (metadata?.limit || 0) * (metadata?.current_page || 0);

  const hasNextPage = (!totalItems || !currentPage) ? false : (currentPage < totalItems);

  return { data: items, page: !!hasNextPage ? (page + 1) : 1, hasNextPage };
}

export const useStoryRateVotes = ({ storyId, enabled = true }: { storyId?: number, enabled?: boolean }) => {
  const query = useInfiniteQuery({
    queryKey: [QUERY_KEYS.GET_STORY_RATE_VOTES, { storyId }],
    queryFn: async ({ pageParam: { page } }) => await _loadData({ storyId, page }),
    getNextPageParam: lastPage => (!!lastPage?.hasNextPage ? { page: lastPage?.page, hasNextPage: lastPage.hasNextPage } : null),
    select: data => flatten(data.pages.map((page) => page.data)),
    initialPageParam: { page: 1, hasNextPage: false },
    enabled
  });

  return query;
}
