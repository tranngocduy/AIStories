import React, { useRef } from 'react';
import { View, FlatList } from 'react-native';

import { TStory } from '@/models/types';
import { IFilterSVG } from '@/assets/svg';
import { NUM_COLUMNS } from '@/constants';
import { runAfterInteractions } from '@/utils/app';
import { useStackIsFocused } from '@/useHooks/useNavigation';
import { useEffectAfterMount } from '@/useHooks/useEffectAfterMount';
import { useSearchStoriesByQuery } from '@/useQuery/useSearchStoriesByQuery';

import { TextBase } from '@/components/TextBase';
import { StoryItem } from '@/components/StoryItem';
import { ScrollRefresh } from '@/components/ScrollRefresh';
import { TouchableView } from '@/components/TouchableView';
import { StorySkeleton } from '@/components/StorySkeleton';
import { TextInputSearch } from '@/components/TextInputSearch';

import { styles } from './styles';

export const Library: React.FC<{}> = () => {

  const { isFocused } = useStackIsFocused();

  const querySearchStoriesByQuery = useSearchStoriesByQuery({ enabled: false });

  const data: TStory[] = querySearchStoriesByQuery?.data || [];

  const totalFill = !(data?.length % NUM_COLUMNS) ? NUM_COLUMNS : (data?.length % NUM_COLUMNS);

  const items = !querySearchStoriesByQuery?.isSuccess ? new Array(9).fill('') : [...data, ...(new Array(NUM_COLUMNS - totalFill).fill(''))];

  const isLoadMoreRef = useRef(true);

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

  const _renderItem = ({ item }: { item: TStory }) => {
    if (!item && !!data?.[0]) return <StorySkeleton isEmpty={true} />;

    if (!item && !data?.[0]) return <StorySkeleton isEmpty={false} />;

    return <StoryItem item={item} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleView}><TextBase style={styles.title}>Thư viện truyện</TextBase></View>

      <View style={styles.searchView}>
        <TextInputSearch />
        <TouchableView style={styles.searchButton}><IFilterSVG /><TextBase style={styles.filterLabel}>Lọc</TextBase></TouchableView>
      </View>

      <View style={styles.view}>
        <FlatList
          data={items}
          numColumns={3}
          renderItem={_renderItem}
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
