import React, { useState, useMemo, useCallback, memo } from 'react';
import { View, ImageBackground, ImageProps } from 'react-native';

import { runAfterInteractions } from '@/utils/app';

import ProgressSkeleton from '@/component/ProgressSkeleton';

import styles from './styles';

const ImageView: React.FC<ImageProps> = ({ source, ...props }) => {

  const [isLoaded, setIsLoaded] = useState(false);

  const _onLoadEnd = useCallback(() => runAfterInteractions(() => setIsLoaded(true), 350), []);

  const memoLoading = useMemo(() => <View style={styles.thumbnail}><ProgressSkeleton /></View>, []);

  const memoImageBackground = useMemo(() => <ImageBackground {...props} source={source} style={styles.image} onLoadEnd={_onLoadEnd} />, []);

  return <View style={styles.container}>{!isLoaded && memoLoading}{memoImageBackground}</View>;

}

export default memo(ImageView, () => true);
