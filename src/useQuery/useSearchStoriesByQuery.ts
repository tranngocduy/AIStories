import { ServiceAPI } from '@/apis';
import { useQuery, QUERY_KEYS } from '@/useQuery/constants';

const _loadData = async () => {

}

export const useSearchStoriesByQuery = ({ enabled = true } = {}) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.SEARCH_STORIES_BY_QUERY],
    queryFn: _loadData,
    enabled
  });

  return query;
};
