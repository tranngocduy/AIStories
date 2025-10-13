import React, { memo } from 'react';
import { View } from 'react-native';

import { ProgressSkeleton } from '@/components/ProgressSkeleton';

import { styles } from './styles';

type TStoryItemProps = { isHorizon?: boolean };

export const StorySkeleton: React.FC<TStoryItemProps> = memo(({ isHorizon }) => {

  const thumbSize = !!isHorizon ? 180 : 152;

  const itemStyle = [styles.container, !!isHorizon ? { width: 135, height: 260 } : { flex: 1, height: 232 }];

  return (
    <View style={itemStyle}>
      <View style={{ height: thumbSize }}><ProgressSkeleton /></View>
      <View style={styles.view}>
        <View style={styles.textShort}><ProgressSkeleton /></View>
        <View style={styles.textLong}><ProgressSkeleton /></View>
      </View>
    </View>
  )

}, () => true);
