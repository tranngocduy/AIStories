import React, { useEffect, useMemo, useRef } from 'react';
import { View, FlatList, StatusBar } from 'react-native';

import { ICloseModalSVG } from '@/assets/svg';
import { runAfterInteractions } from '@/utils/app';
import { useStoryChapters } from '@/useQuery/useStoryChapters';
import type { TChapter } from '@/models/types';

import TextBase from '@/component/TextBase';
import EmptyList from '@/component/EmptyList';
import ChapterItem from '@/component/ChapterItem';
import TouchableView from '@/component/TouchableView';
import InstanceModal, { InstanceModalRefs } from '@/component/InstanceModal';

import styles from './styles';

type StoryChaptersProps = { translateVersionId: number, chapterIndex: number, resolve: Function, onHide?: () => void };

const StoryChapters: React.FC<StoryChaptersProps> = ({ translateVersionId, chapterIndex, resolve, onHide }) => {

  const queryStoryChapters = useStoryChapters({ translateVersionId, enabled: !!translateVersionId });

  const isLoadMoreRef = useRef(true);

  const data = queryStoryChapters?.data || [];

  const instanceModalRef = useRef<InstanceModalRefs>(null);

  const _onClose = () => {
    StatusBar.setBarStyle('dark-content', true);
    instanceModalRef.current?.onClose?.(() => resolve(null));
  }

  const _onPressChapter = (chapter: TChapter) => {
    StatusBar.setBarStyle('dark-content', true);
    instanceModalRef.current?.onClose?.(() => resolve(chapter));
  }

  const _loadMore = async () => {
    if (!!isLoadMoreRef.current && !!queryStoryChapters?.hasNextPage) {
      isLoadMoreRef.current = false;
      await queryStoryChapters?.fetchNextPage?.();
      isLoadMoreRef.current = true;
    }
  }

  useEffect(() => { runAfterInteractions(() => StatusBar.setBarStyle('light-content', true)); }, []);

  const _viewsEmpty = useMemo(() => <EmptyList />, []);

  const _viewsHeader = useMemo(() => (
    <View style={styles.header}>
      <TextBase style={styles.title}>Chương tiết</TextBase>
      <TouchableView style={styles.close} hitSlop={16} onPress={_onClose}><ICloseModalSVG /></TouchableView>
    </View>
  ), []);

  const _keyExtractor = (item: TChapter) => `${item?.id}`;

  const _renderItem = ({ item, index }: { item: TChapter, index: number }) => {
    return <ChapterItem item={item} isActive={(chapterIndex === index)} chapterIndex={index} onPressChapter={_onPressChapter} />;
  }

  return (
    <InstanceModal onHide={onHide} ref={instanceModalRef}>
      <View style={styles.container}>
        <View style={styles.view}>
          {_viewsHeader}

          <View style={styles.separator} />

          <FlatList
            data={data}
            renderItem={_renderItem}
            keyExtractor={_keyExtractor}
            ListEmptyComponent={_viewsEmpty}
            contentContainerStyle={styles.scroll}

            onEndReached={_loadMore}
            onEndReachedThreshold={1}
          />

        </View>
      </View>
    </InstanceModal>
  )

}

export default StoryChapters;
