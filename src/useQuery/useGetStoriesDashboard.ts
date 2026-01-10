import { ServiceAPI } from '@/apis';
import { useQuery, QUERY_KEYS } from '@/useQuery/constants';
import { getSchemaStorage, setSchemaStorage } from '@/database/storage';

const _loadData = async () => {
  const result = await ServiceAPI.storiesDashboard();

  const hotStories = result?.data?.hot_stories || [];

  const newestStories = result?.data?.newest_stories || [];

  const recommendedStories = result?.data?.recommended_stories || [];

  const data = { hotStories, newestStories, recommendedStories };

  setSchemaStorage({ key: 'DASHBOARD_STORIES', data });

  return data;
}

export const useGetStoriesDashboard= ({ enabled = true } = {}) => {
  const initialData = getSchemaStorage({ key: 'DASHBOARD_STORIES' });

  const query = useQuery({
    queryKey: [QUERY_KEYS.GET_STORIES_DASHBOARD],
    queryFn: _loadData,
    initialData,
    enabled
  });

  return query;
};
