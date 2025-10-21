import React, { useState, useRef } from 'react';
import { View, FlatList } from 'react-native';

import { TStory } from '@/models/types';
import { IFilterSVG } from '@/assets/svg';
import { NUM_COLUMNS } from '@/constants';
import { runAfterInteractions } from '@/utils/app';
import { TOptionFilterState } from '@/models/types';
import { useStackIsFocused } from '@/useHooks/useNavigation';
import { useEffectAfterMount } from '@/useHooks/useEffectAfterMount';
import { useSearchStoriesByQuery } from '@/useQuery/useSearchStoriesByQuery';

import { TextBase } from '@/components/TextBase';
import { StoryItem } from '@/components/StoryItem';
import { ScrollRefresh } from '@/components/ScrollRefresh';
import { TouchableView } from '@/components/TouchableView';
import { StorySkeleton } from '@/components/StorySkeleton';
import { TextInputSearch } from '@/components/TextInputSearch';

import { SearchStoriesInstance } from '@/instance';

import { styles } from './styles';

export const Library: React.FC<{}> = () => {

  const { isFocused } = useStackIsFocused();

  const [searchOptions, setSearchOptions] = useState('');

  const querySearchStoriesByQuery = useSearchStoriesByQuery({ enabled: false });

  const queryRef = useRef<TOptionFilterState>({ author: null, sort: null, votes: null, chapters: null, rating: null, status: null, category: null });

  const data = querySearchStoriesByQuery?.data || [];

  const totalFill = !(data?.length % NUM_COLUMNS) ? NUM_COLUMNS : (data?.length % NUM_COLUMNS);

  const items = !querySearchStoriesByQuery?.isSuccess ? new Array(9).fill('') : [...data, ...(new Array(NUM_COLUMNS - totalFill).fill(''))];

  const isLoadMoreRef = useRef(true);

  const _onPressFilter = async () => {
    const query: typeof queryRef.current = await new Promise(resolve => SearchStoriesInstance.show({ query: queryRef.current, resolve }));

    if (!query) return null;

    queryRef.current = query;

    const options = JSON.parse(searchOptions);

    const keyword = options?.keyword;

    const author_id = query?.author?.value;

    const sort_by = query?.sort?.value;

    const min_votes = query?.votes?.value;

    const min_chapters = query?.chapters?.value?.[0];

    const max_chapters = query?.chapters?.value?.[1];

    const min_rating = query?.rating?.value;

    const status = query?.status?.value;

    const category_ids = [query?.category?.value];

    const params = { keyword, author_id, sort_by, min_votes, min_chapters, max_chapters, min_rating, status, category_ids, rank_by: null, time_range: 'all', tag_ids: [0] }
  }

  const _onRefresh = async () => await querySearchStoriesByQuery.refetch?.();

  const _onLoadMore = async () => {
    if (!!isLoadMoreRef.current && !!querySearchStoriesByQuery?.hasNextPage) {
      isLoadMoreRef.current = false;
      await querySearchStoriesByQuery.fetchNextPage();
      isLoadMoreRef.current = true;
    }
  }

  useEffectAfterMount(() => {
    if (!!isFocused) runAfterInteractions(querySearchStoriesByQuery.refetch, 350);
  }, [isFocused]);

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
        <TextInputSearch placeholder='Tìm kiếm truyện...' />
        <TouchableView style={styles.searchButton} onPress={_onPressFilter}><IFilterSVG /><TextBase style={styles.filterLabel}>Lọc</TextBase></TouchableView>
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

          refreshControl={<ScrollRefresh onRefresh={_onRefresh} />}

          onEndReached={_onLoadMore}
          onEndReachedThreshold={1}
        />
      </View>
    </View>
  )

}
