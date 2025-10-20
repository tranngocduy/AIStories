import React, { useMemo, useRef } from 'react';
import { View, ScrollView, Keyboard } from 'react-native';

import { runAfterInteractions } from '@/utils/app';

import { ScrollAvoidingView } from '@/components/ScrollAvoidingView';
import { InstanceModal, TInstanceModalRefs } from '@/components/InstanceModal';

import { FilterHeader } from './FilterHeader';
import { FilterQuery } from './FilterQuery';
import { PageAuthor } from './PageAuthor';

import { styles } from './styles';
import { TSearchStoriesProps, TFilterHeaderRefs, TFilterQueryRefs, TTypeFilterState, TOptionQuery } from './types';

export const SearchStories: React.FC<TSearchStoriesProps> = ({ resolve, onHide }) => {

  const pageAuthorRef = useRef<View>(null);

  const scrollViewRef = useRef<ScrollView>(null);

  const filterQueryRef = useRef<TFilterQueryRefs>(null);

  const filterHeaderRef = useRef<TFilterHeaderRefs>(null);

  const instanceModalRef = useRef<TInstanceModalRefs>(null);

  const _onClose = () => instanceModalRef.current?.onClose?.();

  const _loadSettingPage = (isActive: boolean) => {
    return { position: !!isActive ? 'relative' : 'absolute', opacity: !!isActive ? 1 : 0, pointerEvents: !!isActive ? 'auto' : 'none' };
  }

  const _onBack = (cb?: () => void) => {
    Keyboard.dismiss();

    filterHeaderRef.current?.setTypeFilter?.('');

    scrollViewRef.current?.scrollTo?.({ x: 0, y: 0 });

    if ((typeof cb) === 'function') cb();

    runAfterInteractions(() => {
      pageAuthorRef.current?.setNativeProps?.({ ..._loadSettingPage(false) });
    }, 350);
  };

  const _onPressFilter = (type: TTypeFilterState) => {
    pageAuthorRef.current?.setNativeProps?.({ ..._loadSettingPage((type === 'author')) });

    runAfterInteractions(() => {
      filterHeaderRef.current?.setTypeFilter?.(type);
      scrollViewRef.current?.scrollTo?.({ x: styles.pageMain.width, y: 0 });
    }, 50);
  }

  const _onChangeFilter = (option: TOptionQuery) => _onBack(() => filterQueryRef.current?.onChangeFilter?.(option));

  const _onGenerateQuery = () => { };

  const memoFilterHeader = useMemo(() => <FilterHeader onGenerateQuery={_onGenerateQuery} onBack={_onBack} onClose={_onClose} ref={filterHeaderRef} />, []);

  const memoFilterQuery = useMemo(() => <FilterQuery onPressFilter={_onPressFilter} ref={filterQueryRef} />, []);

  const memoPageAuthor = useMemo(() => <PageAuthor onChangeFilter={_onChangeFilter} />, []);

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
