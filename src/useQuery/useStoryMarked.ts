import { ServiceAPI } from '@/apis';
import { TStoryMarked } from '@/models/types';
import { useQuery, QUERY_KEYS } from '@/useQuery/constants';

const _loadData = async () => {
  const result = await ServiceAPI.getStoryMarked();

  const data = result?.data?.map?.((element: TStoryMarked) => element.story);

  return (data || []);
}

export const useStoryMarked = ({ enabled = true }: { enabled?: boolean }) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.GET_STORY_MARKED],
    queryFn: async () => await _loadData(),
    enabled
  });

  return query;
};
