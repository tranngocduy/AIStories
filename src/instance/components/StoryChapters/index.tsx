import React, { useEffect, useMemo, useRef } from 'react';
import { View, FlatList, StatusBar } from 'react-native';

import { TChapter } from '@/models/types';
import { ICheckSVG, ICloseModalSVG } from '@/assets/svg';
import { runAfterInteractions } from '@/utils/app';
import { useStoryChapters } from '@/useQuery/useStoryChapters';

import { TextBase } from '@/components/TextBase';
import { EmptyList } from '@/components/EmptyList';
import { ChapterItem } from '@/components/ChapterItem';
import { TouchableView } from '@/components/TouchableView';
import { InstanceModal, TInstanceModalRefs } from '@/components/InstanceModal';

import { styles } from './styles';

type TStoryChaptersProps = { translateVersionId: number, chapterIndex: number, resolve: Function, onHide?: Function };

export const StoryChapters: React.FC<TStoryChaptersProps> = ({ translateVersionId, chapterIndex, resolve, onHide }) => {

  const queryStoryChapters = useStoryChapters({ translateVersionId, enabled: !!translateVersionId });

  const isLoadMoreRef = useRef(true);

  const data = queryStoryChapters?.data || [];

  const instanceModalRef = useRef<TInstanceModalRefs>(null);

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
    return (
      <View>
        {(chapterIndex === index) && <View style={styles.selectedView} pointerEvents='none'><ICheckSVG /></View>}
        <ChapterItem item={item} chapterIndex={index} onPressChapter={_onPressChapter} />
      </View>
    )
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
