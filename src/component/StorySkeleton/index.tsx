import React, { memo } from 'react';
import { View } from 'react-native';

import ProgressSkeleton from '@/component/ProgressSkeleton';

import styles from './styles';

type TStoryItemProps = { isEmpty?: boolean, isHorizon?: boolean };

export const StorySkeleton: React.FC<TStoryItemProps> = ({ isEmpty, isHorizon }) => {

  const thumbSize = !!isHorizon ? 180 : 152;

  const itemStyle = [styles.container, !!isHorizon ? { width: 135, height: 260 } : { flex: 1, height: 232 }];

  if (!!isEmpty) return <View style={[itemStyle, { backgroundColor: 'transparent' }]} />;

  return (
    <View style={itemStyle}>
      <View style={{ height: thumbSize }}><ProgressSkeleton /></View>
      <View style={styles.view}>
        <View style={styles.textShort}><ProgressSkeleton /></View>
        <View style={styles.textLong}><ProgressSkeleton /></View>
      </View>
    </View>
  )

};

export default memo(StorySkeleton, () => true);
