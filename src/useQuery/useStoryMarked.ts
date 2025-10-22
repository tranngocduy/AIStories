import { useIStore } from '@/store';
import { ServiceAPI } from '@/apis';
import { TStoryMarked } from '@/models/types';
import { useQuery, QUERY_KEYS } from '@/useQuery/constants';

const _loadData = async () => {
  const result = await ServiceAPI.getStoryMarked();

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
