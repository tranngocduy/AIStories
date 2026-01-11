import { useIStore } from '@/store';
import { ServiceAPI } from '@/apis';
import { useQuery, QUERY_KEYS } from '@/useQuery/constants';
import type { TStoryMarked } from '@/models/types';

const _loadData = async () => {
  const result = await ServiceAPI.getReadingBookmarks();

  const data = result?.data?.map?.((element: TStoryMarked) => element.story);

  return (data || []);
}

export const useStoryMarked = () => {
  const isSigned = useIStore(state => state.userProfile?.is_signed);

  const query = useQuery({
    queryKey: [QUERY_KEYS.GET_STORY_MARKED, { isSigned }],
    queryFn: async () => await _loadData(),
    enabled: !!isSigned
  });

  return query;
};
