import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { View } from 'react-native';

import { useStackNavigation } from '@/useHooks/useNavigation';
import { useStoryChapters } from '@/useQuery/useStoryChapters';
import type { TStory, TChapter } from '@/models/types';

import EmptyList from '@/component/EmptyList';
import ChapterItem from '@/component/ChapterItem';
import ProgressIcon from '@/component/ProgressIcon';

import styles from './styles';

type ChaptersProps = { story: TStory, translateVersionId?: number };

export type ChaptersRefs = { loadMore: Function };

const Chapters = forwardRef<ChaptersRefs, ChaptersProps>(({ story, translateVersionId }, ref) => {

  const { navigate } = useStackNavigation();

  const queryStoryChapters = useStoryChapters({ translateVersionId, enabled: !!translateVersionId });

  const isLoadMoreRef = useRef(true);

  const data = queryStoryChapters?.data || [];

  const isLoading = (!translateVersionId || !!queryStoryChapters?.isLoading);

  const _onPressChapter = (chapter: TChapter) => navigate('PageChapter', { story, chapter });

  const _loadMore = async () => {
    if (!!isLoadMoreRef.current && !!queryStoryChapters?.hasNextPage) {
      isLoadMoreRef.current = false;
      await queryStoryChapters?.fetchNextPage?.();
      isLoadMoreRef.current = true;
    }
  }

  useImperativeHandle(ref, () => ({ loadMore: _loadMore }));

  const _renderItem = (item: TChapter, chapterIndex: number) => {
    return <ChapterItem item={item} chapterIndex={chapterIndex} onPressChapter={_onPressChapter} key={`${item?.id}`} />
  };

  return (
    <View style={styles.container}>
      {(!isLoading && !!data?.[0]) && data?.map(_renderItem)}
      {!!isLoading && <View style={styles.empty}><ProgressIcon /></View>}
      {(!isLoading && !data?.[0]) && <View style={styles.empty}><EmptyList /></View>}
    </View>
  )

});

export default Chapters;
