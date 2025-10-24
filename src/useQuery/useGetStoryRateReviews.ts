import { ServiceAPI } from '@/apis';
import { useQuery, QUERY_KEYS } from '@/useQuery/constants';

const _loadData = async (ratingId: number) => {
  const result = await ServiceAPI.getStoryRateReviews(ratingId);

  return result?.data || [];
}

export const useGetStoryRateReviews = ({ ratingId, enabled = true }: { ratingId: number, enabled?: boolean }) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.GET_STORY_RATE_REVIEWS, { ratingId }],
    queryFn: async () => await _loadData(ratingId),
    enabled
  });

  return query;
};
