import { ServiceAPI } from '@/apis';
import { useQuery, QUERY_KEYS } from '@/useQuery/constants';

const _loadData = async (chapterId: number, chapterIndex: number, translateVersionId: number) => {
  const nextIndex = Math.max(chapterIndex + 1, 2);
  const prevIndex = Math.max(chapterIndex - 1, 1);

  const apiCallers = [
    ServiceAPI.getStoryChapters(translateVersionId, nextIndex, 1),
    ServiceAPI.getStoryChapters(translateVersionId, prevIndex, 1)
  ];

  const result = await Promise.all([...apiCallers]);

  const resultNextChapter = result?.[0]?.data?.items?.[0];

  const resultPrevChapter = result?.[1]?.data?.items?.[0];

  const nextChapter = (!!resultNextChapter?.id && (resultNextChapter?.id !== chapterId)) ? { ...resultNextChapter } : null;

  const prevChapter = (!!resultPrevChapter?.id && (resultPrevChapter?.id !== chapterId)) ? { ...resultPrevChapter } : null;

  return { nextChapter, prevChapter };
}

export const useStoryChapter = ({ chapterId, chapterIndex, translateVersionId, enabled = true }: { chapterId: number, chapterIndex: number, translateVersionId: number, enabled?: boolean }) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.GET_STORY_CHAPTER, { chapterId, chapterIndex, translateVersionId }],
    queryFn: async () => await _loadData(chapterId, chapterIndex, translateVersionId),
    enabled
  });

  return query;
}
