import React, { memo } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import { skeletonJSON } from '@/assets/files';

import styles from './styles';

type TProgressSkeletonProps = { width?: number, height?: number, radius?: number }

export const ProgressSkeleton: React.FC<TProgressSkeletonProps> =({ width, height, radius }) => {
  const containerStyle = (!!width || !!height) ? ({ width, height }) : ({ flex: 1 });

  return (
    <View style={[containerStyle, { borderRadius: (radius || 0), overflow: 'hidden' }]}>
      <LottieView source={skeletonJSON} style={styles.view} autoPlay={true} loop={true} resizeMode='cover' />
    </View>
  )

};

export default memo(ProgressSkeleton, () => true);
