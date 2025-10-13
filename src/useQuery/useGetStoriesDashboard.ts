import { ServiceAPI } from '@/apis';
import { KEYS_STORAGE } from '@/constants';
import { useQuery, QUERY_KEYS } from '@/useQuery/constants';
import { getDataStorage, setDataStorage } from '@/database/storage';

const _loadData = async () => {
  const result = await ServiceAPI.storiesDashboard();

  const hotStories = result?.data?.hot_stories || [];

  const newestStories = result?.data?.newest_stories || [];

  const recommendedStories = result?.data?.recommended_stories || [];

  const data = { hotStories, newestStories, recommendedStories };

  setDataStorage({ key: KEYS_STORAGE.DASHBOARD_STORIES, data });

  return data;
}

export const useGetStoriesDashboard= ({ enabled = true } = {}) => {
  const initialData = getDataStorage({ key: KEYS_STORAGE.DASHBOARD_STORIES });

  const query = useQuery({
    queryKey: [QUERY_KEYS.GET_STORIES_DASHBOARD],
    queryFn: _loadData,
    initialData,
    enabled
  });

  return query;
};
