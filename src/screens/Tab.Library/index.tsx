import React, { useState, useMemo, useRef } from 'react';
import { View, FlatList } from 'react-native';

import { IFilterSVG } from '@/assets/svg';
import { runAfterInteractions } from '@/utils/app';
import { TStory, TOptionFilterState } from '@/models/types';
import { NUM_COLUMNS, FILTER_OPTION_SORT } from '@/constants';
import { useRouteNavigation } from '@/useHooks/useNavigation';
import { useEffectAfterMount } from '@/useHooks/useEffectAfterMount';
import { useSearchStoriesByQuery } from '@/useQuery/useSearchStoriesByQuery';

import { TextBase } from '@/components/TextBase';
import { StoryItem } from '@/components/StoryItem';
import { EmptyList } from '@/components/EmptyList';
import { ScrollRefresh } from '@/components/ScrollRefresh';
import { TouchableView } from '@/components/TouchableView';
import { StorySkeleton } from '@/components/StorySkeleton';
import { TextInputSearch, TTextInputSearchRef } from '@/components/TextInputSearch';

import { SearchStoriesInstance } from '@/instance';

import { styles } from './styles';

export const Library: React.FC<{}> = () => {

  const { params } = useRouteNavigation('Library');

  const [searchOptions, setSearchOptions] = useState('');

  const querySearchStoriesByQuery = useSearchStoriesByQuery({ searchOptions });

  const searchTextRef = useRef('');

  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const textInputSearchRef = useRef<TTextInputSearchRef>(null);

  const queryRef = useRef<TOptionFilterState>({ author: null, sort: null, votes: null, chapters: null, rating: null, status: null, category: null });

  const data = querySearchStoriesByQuery?.data || [];

  const totalFill = !(data?.length % NUM_COLUMNS) ? NUM_COLUMNS : (data?.length % NUM_COLUMNS);

  const items = !querySearchStoriesByQuery?.isSuccess ? new Array(9).fill('') : [...data, ...(new Array(NUM_COLUMNS - totalFill).fill(''))];

  const isLoadMoreRef = useRef(true);

  const _onChangeText = (value: string) => {
    searchTextRef.current = value;

    const timer = !!value ? 500 : 0;

    if (!!timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => { _onSearch(searchTextRef.current, queryRef.current) }, timer);
  }

  const _onPressFilter = async () => {
    const query: typeof queryRef.current = await new Promise(resolve => SearchStoriesInstance.show({ query: queryRef.current, resolve }));

    if (!query) return null;

    queryRef.current = query;

    _onSearch(searchTextRef.current, queryRef.current);
  }

  const _onSearch = (searchText: string, query: typeof queryRef.current) => {
    const keyword = searchText || '';

    const author_id = query?.author?.value;

    const sort_by = (query?.sort?.value !== FILTER_OPTION_SORT?.[0].value) ? query?.sort?.value : null;

    const min_votes = query?.votes?.value;

    const min_chapters = query?.chapters?.value?.[0];

    const max_chapters = query?.chapters?.value?.[1];

    const min_rating = query?.rating?.value;

    const status = query?.status?.value;

    const category_ids = !!query?.category?.value ? [query?.category?.value] : null;

    if (!keyword && !author_id && !sort_by && !min_votes && !min_chapters && !max_chapters && !min_rating && !status && !category_ids) setSearchOptions('');

    else setSearchOptions((JSON.stringify({ keyword, author_id, sort_by, min_votes, min_chapters, max_chapters, min_rating, status, category_ids })));
  }

  const _onRefresh = async () => await querySearchStoriesByQuery.refetch?.();

  const _onLoadMore = async () => {
    if (!!isLoadMoreRef.current && !!querySearchStoriesByQuery?.hasNextPage) {
      isLoadMoreRef.current = false;
      await querySearchStoriesByQuery.fetchNextPage();
      isLoadMoreRef.current = true;
    }
  }

  const _onFilter = () => {
    const filter = params?.filter;

    queryRef.current = filter;

    searchTextRef.current = '';

    textInputSearchRef.current?.clear?.();

    _onSearch(searchTextRef.current, queryRef.current);
  }

  useEffectAfterMount(() => { if (!!params.filter) runAfterInteractions(_onFilter); }, [params]);

  const _viewsEmpty = useMemo(() => <EmptyList />, []);

  const _keyExtractor = (item: TStory, index: number) => `${item?.id || index}`;

  const _renderItem = ({ item }: { item: TStory }) => {
    if (!item && !!data?.[0]) return <StorySkeleton isEmpty={true} />;

    if (!item && !data?.[0]) return <StorySkeleton isEmpty={false} />;

    return <StoryItem item={item} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleView}><TextBase style={styles.title}>Thư viện truyện</TextBase></View>

      <View style={styles.searchView}>
        <TextInputSearch placeholder='Tìm kiếm truyện...' onChangeText={_onChangeText} ref={textInputSearchRef} />
        <TouchableView style={styles.searchButton} onPress={_onPressFilter}>
          {!!searchOptions && <View style={styles.filtered} />}
          <IFilterSVG /><TextBase style={styles.filterLabel}>Lọc</TextBase>
        </TouchableView>
      </View>

      <View style={styles.view}>
        <FlatList
          data={items}
          numColumns={3}
          renderItem={_renderItem}
          keyExtractor={_keyExtractor}

          removeClippedSubviews={true}
          contentContainerStyle={styles.scroll}
          columnWrapperStyle={styles.wrapperStyle}

          ListEmptyComponent={_viewsEmpty}
          refreshControl={<ScrollRefresh onRefresh={_onRefresh} />}

          onEndReached={_onLoadMore}
          onEndReachedThreshold={1}
        />
      </View>
    </View>
  )

}
