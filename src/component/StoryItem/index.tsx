import React from 'react';
import { View } from 'react-native';

import { useStackNavigation } from '@/useHooks/useNavigation';
import { ITotalViewSVG, ITotalChapterSVG } from '@/assets/svg';
import type { TStory } from '@/models/types';

import TextBase from '@/component/TextBase';
import TouchableView from '@/component/TouchableView';
import StoryThumbnail from '@/component/StoryThumbnail';

import styles from './styles';

type StoryItemProps = { item: TStory, isHorizon?: boolean };

const StoryItem: React.FC<StoryItemProps> = ({ item, isHorizon = false }) => {

  const navigation = useStackNavigation();

  const thumbSize = !!isHorizon ? 180 : 152;

  const itemStyle = [styles.container, !!isHorizon ? { width: 135, height: 260 } : { flex: 1, height: 232 }];

  const _onPressStoryItem = () => {
    const stackState = navigation.getState();
    if (stackState.type !== 'stack') navigation.navigate('StoryDetail', { story: item });
    if (stackState.type === 'stack') { }
  }

  return (
    <TouchableView style={itemStyle} onPress={_onPressStoryItem}>
      <StoryThumbnail item={item} thumbSize={thumbSize} isOverview={true} />
      <View style={styles.view}>
        <TextBase style={styles.label} numberOfLines={2}>{item?.title}</TextBase>
        <View style={styles.summary}>
          <View style={styles.summaryItem}><ITotalChapterSVG /><TextBase style={styles.summaryLabel}>{item?.total_chapters}</TextBase></View>
          <View style={styles.summaryItem}><ITotalViewSVG /><TextBase style={styles.summaryLabel}>{item?.total_views}</TextBase></View>
        </View>
      </View>
    </TouchableView>
  )

}

export default StoryItem;
