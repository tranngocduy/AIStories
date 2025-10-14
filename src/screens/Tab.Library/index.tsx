import React from 'react';
import { View, FlatList } from 'react-native';

import { TStory } from '@/models/types';
import { IFilterSVG } from '@/assets/svg';
import { NUM_COLUMNS } from '@/constants';
import { useSearchStoriesByQuery } from '@/useQuery/useSearchStoriesByQuery';

import { TextBase } from '@/components/TextBase';
import { StoryItem } from '@/components/StoryItem';
import { TouchableView } from '@/components/TouchableView';
import { StorySkeleton } from '@/components/StorySkeleton';
import { TextInputSearch } from '@/components/TextInputSearch';

import { styles } from './styles';

export const Library: React.FC<{}> = () => {

  const querySearchStoriesByQuery = useSearchStoriesByQuery();

  const data: TStory[] = querySearchStoriesByQuery?.data || [];

  const totalFill = !(data?.length % NUM_COLUMNS) ? NUM_COLUMNS : (data?.length % NUM_COLUMNS);

  const items = [...data, ...(new Array(NUM_COLUMNS - totalFill).fill(''))];

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
        />
      </View>
    </View>
  )

}
