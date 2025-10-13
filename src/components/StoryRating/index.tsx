import React from 'react';
import { View, ViewStyle } from 'react-native';

import { IStarSVG } from '@/assets/svg';

import { TextBase } from '@/components/TextBase';

import { styles } from './styles';

type TStoryRatingProps = { score?: number, isHideScore?: boolean, style?: ViewStyle };

export const StoryRating: React.FC<TStoryRatingProps> = ({ score, isHideScore, style }) => {

  const displayStar = new Array(Math.ceil(score || 0)).fill('');

  if ((typeof (score) !== 'number')) return <View />;

  const _renderItem = (_: any, index: number) => <View key={index}><IStarSVG /></View>;

  return (
    <View style={[styles.container, style]}>
      {!isHideScore && <View style={styles.view}><TextBase style={styles.label}>{Number(score).toFixed(1)}</TextBase></View>}
      <View style={styles.star}>{displayStar?.map?.(_renderItem)}</View>
    </View>
  )

}
