import React from 'react';
import { View, FlatList } from 'react-native';

import { TStory } from '@/models/types';
import { useStackNavigation } from '@/useHooks/useNavigation';

import { TextBase } from '@/components/TextBase';
import { StoryItem } from '@/components/StoryItem';
import { EmptyList } from '@/components/EmptyList';
import { TouchableView } from '@/components/TouchableView';
import { StorySkeleton } from '@/components/StorySkeleton';

import { styles } from './styles';
import { TGroupProps } from '../types';

export const Group: React.FC<TGroupProps> = ({ label, data, sort }) => {

  const navigation = useStackNavigation();

  const items = data || new Array(10).fill('');

  const _onPressSeeAll = () => {
    if (!!sort) navigation.navigate('Library', { filter: { author: null, sort, votes: null, chapters: null, rating: null, status: null, category: null } });
  }

  const _viewsEmpty = <View style={styles.emptyView}><EmptyList /></View>;

  const _keyExtractor = (item: TStory, index: number) => `${item?.id || index}`;

  const _renderItem = ({ item }: { item: TStory }) => !!item ? <StoryItem item={item} isHorizon={true} /> : <StorySkeleton isHorizon={true} />;

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <TextBase style={styles.label}>{label}</TextBase>
        {!!data?.[0] && <TouchableView hitSlop={12} onPress={_onPressSeeAll}><TextBase style={styles.seeMore}>Xem tất cả</TextBase></TouchableView>}
      </View>

      <FlatList
        data={items}
        horizontal={true}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        ListEmptyComponent={_viewsEmpty}
        contentContainerStyle={styles.scroll}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )

}
