import { ServiceAPI } from '@/apis';
import { useQuery, QUERY_KEYS } from '@/useQuery/constants';

const _loadData = async (chapterId?: number, translateVersionId?: number) => {
  const result = await ServiceAPI.getChapterContent(chapterId, translateVersionId);

  return result?.data;
}

export const useGetChapterContent = ({ chapterId, translateVersionId }: { chapterId?: number, translateVersionId?: number } = {}) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.GET_CHAPTER_CONTENT, { chapterId, translateVersionId }],
    queryFn: async () => await _loadData(chapterId, translateVersionId),
    enabled: (!!chapterId && !!translateVersionId)
  });

  return query;
}