import React, { useMemo, useRef } from 'react';
import { View, ScrollView, Keyboard } from 'react-native';

import { runAfterInteractions } from '@/utils/app';

import { ScrollAvoidingView } from '@/components/ScrollAvoidingView';
import { InstanceModal, TInstanceModalRefs } from '@/components/InstanceModal';

import { FilterHeader } from './FilterHeader';
import { FilterQuery } from './FilterQuery';
import { PageAuthor } from './PageAuthor';

import { styles } from './styles';
import { TSearchStoriesProps, TTypeFilterRefs, TTypeFilterState } from './types';

export const SearchStories: React.FC<TSearchStoriesProps> = ({ resolve, onHide }) => {

  const pageAuthorRef = useRef<View>(null);

  const scrollViewRef = useRef<ScrollView>(null);

  const filterHeaderRef = useRef<TTypeFilterRefs>(null);

  const instanceModalRef = useRef<TInstanceModalRefs>(null);

  const _loadSettingPage = (isActive: boolean) => {
    return { position: !!isActive ? 'relative' : 'absolute', opacity: !!isActive ? 1 : 0, pointerEvents: !!isActive ? 'auto' : 'none' };
  }

  const _onClose = () => instanceModalRef.current?.onClose?.();

  const _onBack = () => {
    Keyboard.dismiss();
    filterHeaderRef.current?.setTypeFilter?.('');
    scrollViewRef.current?.scrollTo?.({ x: 0, y: 0 });

    runAfterInteractions(() => {
      pageAuthorRef.current?.setNativeProps?.({ ..._loadSettingPage(false) });
    }, 350);
  };

  const _onGenerateQuery = () => { };

  const _onPressFilter = (type: TTypeFilterState) => {
    pageAuthorRef.current?.setNativeProps?.({ ..._loadSettingPage((type === 'author')) });

    runAfterInteractions(() => {
      filterHeaderRef.current?.setTypeFilter?.(type);
      scrollViewRef.current?.scrollTo?.({ x: styles.pageMain.width, y: 0 });
    }, 50);
  }

  const memoFilterHeader = useMemo(() => <FilterHeader onGenerateQuery={_onGenerateQuery} onBack={_onBack} onClose={_onClose} ref={filterHeaderRef} />, []);

  const memoFilterQuery = useMemo(() => <FilterQuery onPressFilter={_onPressFilter} />, []);

  const memoPageAuthor = useMemo(() => <PageAuthor />, []);

  return (
    <InstanceModal onHide={onHide} ref={instanceModalRef}>
      <ScrollAvoidingView offset={-200}>
        <View style={styles.container}>
          <View style={styles.view}>
            {memoFilterHeader}

            <View style={styles.detail}>
              <ScrollView horizontal={true} pagingEnabled={true} scrollEnabled={false} showsHorizontalScrollIndicator={false} ref={scrollViewRef}>
                <View style={styles.pageMain}>{memoFilterQuery}</View>
                <View style={styles.pageSub} pointerEvents='none' ref={pageAuthorRef}>{memoPageAuthor}</View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollAvoidingView>
    </InstanceModal>
  )

}
