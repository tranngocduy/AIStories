import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { View } from 'react-native';

import { TChapter } from '@/models/types';
import { useStackNavigation } from '@/useHooks/useNavigation';
import { useStoryChapters } from '@/useQuery/useStoryChapters';

import { EmptyList } from '@/components/EmptyList';
import { ChapterItem } from '@/components/ChapterItem';
import { ProgressIcon } from '@/components/ProgressIcon';

import { styles } from './styles';
import { TChaptersProps, TChaptersRef } from '../types';

export const Chapters = forwardRef<TChaptersRef, TChaptersProps>(({ translateVersionId }, ref) => {

  const { navigate } = useStackNavigation();

  const queryStoryChapters = useStoryChapters({ translateVersionId, enabled: !!translateVersionId });

  const isLoadMoreRef = useRef(true);

  const data = queryStoryChapters?.data || [];

  const isLoading = (!translateVersionId || !!queryStoryChapters?.isLoading);

  const _onPressChapter = () => { }

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
      {!!isLoading && <ProgressIcon />}
      {(!isLoading && !!data?.[0]) && data?.map(_renderItem)}
      {(!isLoading && !data?.[0]) && <View style={styles.empty}><EmptyList /></View>}
    </View>
  )

});
