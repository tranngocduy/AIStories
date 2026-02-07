import React, { memo, forwardRef, useImperativeHandle } from 'react';
import { View } from 'react-native';
import Animated, { withTiming, useSharedValue, useAnimatedStyle, interpolate, cancelAnimation } from 'react-native-reanimated';

import { runAfterInteractions } from '@/utils/app';
import { useThemePage } from '@/useHooks/useThemePage';

import styles from './styles';

export type PageIndicatorRefs = { setPercent: (percent: number) => void };

const PageIndicator = forwardRef<PageIndicatorRefs, {}>((_, ref) => {

  const { color } = useThemePage();

  const sharedValue = useSharedValue(0);

  const _onSetPercent = (percent: number) => {
    cancelAnimation(sharedValue);

    sharedValue.value = withTiming(percent, { duration: 500 });

    if (percent >= 1) runAfterInteractions(() => { sharedValue.value = 0; }, 600);
  }

  useImperativeHandle(ref, () => ({ setPercent: _onSetPercent }));

  const viewStyle = useAnimatedStyle(() => {
    const percent = interpolate(sharedValue.value, [0, 1], [0, 100]);
    return { width: `${percent}%` }
  }, []);

  return <View style={styles.container} pointerEvents='none'><Animated.View style={[styles.view, viewStyle, { backgroundColor: color }]} /></View>;

});

export default memo(PageIndicator, () => true);
