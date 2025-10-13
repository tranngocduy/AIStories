import React from 'react';
import { View, FlatList } from 'react-native';

import { TStory } from '@/models/types';

import { TextBase } from '@/components/TextBase';
import { StoryItem } from '@/components/StoryItem';
import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';
import { TGroupProps } from '../types';

export const Group: React.FC<TGroupProps> = ({ label, data }) => {

  const items = data || new Array(10).fill('');

  const _onPressSeeAll = () => { }

  const _keyExtractor = (item: TStory, index: number) => `${item?.id || index}`;

  const _renderItem = ({ item }: { item: TStory }) => <StoryItem item={item} isHorizon={true} />;

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
        contentContainerStyle={styles.scroll}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )

}
