import React, { useMemo } from 'react';
import { View, FlatList } from 'react-native';

import { TStory } from '@/models/types';
import { NUM_COLUMNS } from '@/constants';
import { useStoryMarked } from '@/useQuery/useStoryMarked';

import { TextBase } from '@/components/TextBase';
import { StoryItem } from '@/components/StoryItem';
import { EmptyList } from '@/components/EmptyList';
import { Authenticate } from '@/components/Authenticate';
import { ScrollRefresh } from '@/components/ScrollRefresh';
import { StorySkeleton } from '@/components/StorySkeleton';

import { styles } from './styles';

export const SavedStory: React.FC<{}> = () => {

  const queryStoryMarked = useStoryMarked();

  const data = queryStoryMarked?.data || [];

  const totalFill = !(data?.length % NUM_COLUMNS) ? NUM_COLUMNS : (data?.length % NUM_COLUMNS);

  const items = !queryStoryMarked?.isSuccess ? new Array(9).fill('') : [...data, ...(new Array(NUM_COLUMNS - totalFill).fill(''))];

  const _onRefresh = async () => await queryStoryMarked.refetch?.();

  const _viewsEmpty = useMemo(() => <EmptyList />, []);

  const _keyExtractor = (item: TStory, index: number) => `${item?.id || index}`;

  const _renderItem = ({ item }: { item: TStory }) => {
    if (!item && !!data?.[0]) return <StorySkeleton isEmpty={true} />;

    if (!item && !data?.[0]) return <StorySkeleton isEmpty={false} />;

    return <StoryItem item={item} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleView}><TextBase style={styles.title}>Truyện đã lưu</TextBase></View>

      <Authenticate>
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
          />
        </View>
      </Authenticate>
    </View>
  )

}
