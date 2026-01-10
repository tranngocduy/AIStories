import React, { useState, useMemo, useRef } from 'react';
import { View, ScrollView, Keyboard } from 'react-native';

import { runAfterInteractions } from '@/utils/app';
import { TOptionFilterState } from '@/models/types';
import { FILTER_OPTION_AUTHOR, FILTER_OPTION_SORT, FILTER_OPTION_VOTES, FILTER_OPTION_CHAPTERS, FILTER_OPTION_RATING, FILTER_OPTION_STATUS, FILTER_OPTION_CATEGORY } from '@/constants';

import { ScrollAvoidingView } from '@/component/ScrollAvoidingView';
import InstanceModal, { InstanceModalRefs } from '@/component/InstanceModal';

import { FilterHeader } from './FilterHeader';
import { FilterQuery } from './FilterQuery';
import { PageAuthor } from './PageAuthor';
import { PageSort } from './PageSort';
import { PageVotes } from './PageVotes';
import { PageChapters } from './PageChapters';
import { PageRating } from './PageRating';
import { PageStatus } from './PageStatus';
import { PageCategory } from './PageCategory';

import styles from './styles';
import { SearchStoriesProps, FilterHeaderRefs, TypeFilterState, OptionQuery } from './types';

export const SearchStories: React.FC<SearchStoriesProps> = ({ query, resolve, onHide }) => {

  const [optionFilter, setOptionFilter] = useState<TOptionFilterState>({
    author: query?.author || FILTER_OPTION_AUTHOR[0],
    sort: query?.sort || FILTER_OPTION_SORT[0],
    votes: query?.votes || FILTER_OPTION_VOTES[0],
    chapters: query?.chapters || FILTER_OPTION_CHAPTERS[0],
    rating: query?.rating || FILTER_OPTION_RATING[0],
    status: query?.status || FILTER_OPTION_STATUS[0],
    category: query?.category || FILTER_OPTION_CATEGORY[0]
  });

  const pageAuthorRef = useRef<View>(null);

  const pageSortRef = useRef<View>(null);

  const pageVotesRef = useRef<View>(null);

  const pageChaptersRef = useRef<View>(null);

  const pageRatingRef = useRef<View>(null);

  const pageStatusRef = useRef<View>(null);

  const pageCategoryRef = useRef<View>(null);

  const scrollViewRef = useRef<ScrollView>(null);

  const filterHeaderRef = useRef<FilterHeaderRefs>(null);

  const instanceModalRef = useRef<InstanceModalRefs>(null);

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
      pageSortRef.current?.setNativeProps?.({ ..._loadSettingPage(false) });
      pageVotesRef.current?.setNativeProps?.({ ..._loadSettingPage(false) });
      pageChaptersRef.current?.setNativeProps?.({ ..._loadSettingPage(false) });
      pageRatingRef.current?.setNativeProps?.({ ..._loadSettingPage(false) });
      pageStatusRef.current?.setNativeProps?.({ ..._loadSettingPage(false) });
      pageCategoryRef.current?.setNativeProps?.({ ..._loadSettingPage(false) });
    }, 350);
  };

  const _onPressFilter = (type: TypeFilterState) => {
    pageAuthorRef.current?.setNativeProps?.({ ..._loadSettingPage((type === 'author')) });
    pageSortRef.current?.setNativeProps?.({ ..._loadSettingPage((type === 'sort')) });
    pageVotesRef.current?.setNativeProps?.({ ..._loadSettingPage((type === 'votes')) });
    pageChaptersRef.current?.setNativeProps?.({ ..._loadSettingPage((type === 'chapters')) });
    pageRatingRef.current?.setNativeProps?.({ ..._loadSettingPage((type === 'rating')) });
    pageStatusRef.current?.setNativeProps?.({ ..._loadSettingPage((type === 'status')) });
    pageCategoryRef.current?.setNativeProps?.({ ..._loadSettingPage((type === 'category')) });

    runAfterInteractions(() => {
      filterHeaderRef.current?.setTypeFilter?.(type);
      scrollViewRef.current?.scrollTo?.({ x: styles.pageMain.width, y: 0 });
    }, 50);
  }

  const _onPressRest = () => {
    const author = FILTER_OPTION_AUTHOR[0];
    const sort = FILTER_OPTION_SORT[0];
    const votes = FILTER_OPTION_VOTES[0];
    const chapters = FILTER_OPTION_CHAPTERS[0];
    const rating = FILTER_OPTION_RATING[0];
    const status = FILTER_OPTION_STATUS[0];
    const category = FILTER_OPTION_CATEGORY[0];
    setOptionFilter({ author, sort, votes, chapters, rating, status, category });
  }

  const _onGenerateQuery = () => instanceModalRef.current?.onClose?.(() => resolve?.(optionFilter));

  const _onChangeFilter = (option: OptionQuery) => _onBack(() => setOptionFilter(prevState => ({ ...prevState, [option.type]: { label: option.label, value: option.value } })));

  const memoFilterHeader = useMemo(() => <FilterHeader onGenerateQuery={_onGenerateQuery} onBack={_onBack} onClose={_onClose} ref={filterHeaderRef} />, [JSON.stringify(optionFilter)]);

  const memoFilterQuery = useMemo(() => <FilterQuery query={optionFilter} onPressFilter={_onPressFilter} onPressRest={_onPressRest} />, [JSON.stringify(optionFilter)]);

  const memoPageAuthor = useMemo(() => <PageAuthor query={optionFilter?.author} onChangeFilter={_onChangeFilter} />, [JSON.stringify(optionFilter.author)]);

  const memoPageSort = useMemo(() => <PageSort query={optionFilter?.sort} onChangeFilter={_onChangeFilter} />, [JSON.stringify(optionFilter.sort)]);

  const memoPageVotes = useMemo(() => <PageVotes query={optionFilter?.votes} onChangeFilter={_onChangeFilter} />, [JSON.stringify(optionFilter.votes)]);

  const memoPageChapters = useMemo(() => <PageChapters query={optionFilter?.chapters} onChangeFilter={_onChangeFilter} />, [JSON.stringify(optionFilter.chapters)]);

  const memoPageRating = useMemo(() => <PageRating query={optionFilter?.rating} onChangeFilter={_onChangeFilter} />, [JSON.stringify(optionFilter.rating)]);

  const memoPageStatus = useMemo(() => <PageStatus query={optionFilter?.status} onChangeFilter={_onChangeFilter} />, [JSON.stringify(optionFilter.status)]);

  const memoPageCategory = useMemo(() => <PageCategory query={optionFilter?.category} onChangeFilter={_onChangeFilter} />, [JSON.stringify(optionFilter.category)]);

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
                <View style={styles.pageSub} pointerEvents='none' ref={pageSortRef}>{memoPageSort}</View>
                <View style={styles.pageSub} pointerEvents='none' ref={pageVotesRef}>{memoPageVotes}</View>
                <View style={styles.pageSub} pointerEvents='none' ref={pageChaptersRef}>{memoPageChapters}</View>
                <View style={styles.pageSub} pointerEvents='none' ref={pageRatingRef}>{memoPageRating}</View>
                <View style={styles.pageSub} pointerEvents='none' ref={pageStatusRef}>{memoPageStatus}</View>
                <View style={styles.pageSub} pointerEvents='none' ref={pageCategoryRef}>{memoPageCategory}</View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollAvoidingView>
    </InstanceModal>
  )

}
