import React from 'react';
import { View } from 'react-native';

import { TStory } from '@/models/types';
import { ITotalViewSVG, ITotalChapterSVG } from '@/assets/svg';

import { TextBase } from '@/components/TextBase';
import { StoryThumbnail } from '@/components/StoryThumbnail';

import { styles } from './styles';

type TStoryItemProps = { item: TStory, isHorizon?: boolean };

export const StoryItem: React.FC<TStoryItemProps> = ({ item, isHorizon = false }) => {

  const thumbSize = !!isHorizon ? 180 : 152;

  const itemStyle = [styles.container, !!isHorizon ? { width: 135, height: 260 } : { flex: 1, height: 232 }];

  return (
    <View style={itemStyle}>
      <StoryThumbnail item={item} thumbSize={thumbSize}/>
      <View style={styles.view}>
        <TextBase style={styles.label} numberOfLines={2}>{item?.title}</TextBase>
        <View style={styles.summary}>
          <View style={styles.summaryItem}><ITotalChapterSVG /><TextBase style={styles.summaryLabel}>{item?.total_chapters}</TextBase></View>
          <View style={styles.summaryItem}><ITotalViewSVG /><TextBase style={styles.summaryLabel}>{item?.total_views}</TextBase></View>
        </View>
      </View>
    </View>
  )

}
