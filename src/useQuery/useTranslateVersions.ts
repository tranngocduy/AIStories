import { ServiceAPI } from '@/apis';
import { useQuery, QUERY_KEYS } from '@/useQuery/constants';

const _loadData = async (storyId?: number) => {
  const result = await ServiceAPI.getTranslateVersions(storyId);

  return (result?.data || []);
}

export const useTranslateVersions = ({ storyId, enabled = true }: { storyId?: number, enabled?: boolean }) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.GET_TRANSLATE_VERSIONS, { storyId }],
    queryFn: async () => await _loadData(storyId),
    enabled
  });

  return query;
}
