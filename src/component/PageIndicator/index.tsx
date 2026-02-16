import React, { useRef, memo, forwardRef, useImperativeHandle } from 'react';
import { View } from 'react-native';
import Animated, { withTiming, useSharedValue, useAnimatedStyle, interpolate, cancelAnimation } from 'react-native-reanimated';

import { runAfterInteractions } from '@/utils/app';
import { useThemePage } from '@/useHooks/useThemePage';

import styles from './styles';

export type PageIndicatorRefs = { setPercent: (percent: number) => void };

const PageIndicator = forwardRef<PageIndicatorRefs, {}>((_, ref) => {

  const { color } = useThemePage();

  const sharedValue = useSharedValue(0);

  const indicatorRef = useRef<View>(null);

  const _onSetPercent = (percent: number) => {
    cancelAnimation(sharedValue);

    const pointerEvents = (percent >= 1) ? 'none' : 'auto';

    sharedValue.value = withTiming(percent, { duration: 500 });

    runAfterInteractions(() => {
      if (percent >= 1) sharedValue.value = 0;

      indicatorRef.current?.setNativeProps({ pointerEvents });

    }, ((percent >= 1) ? 650 : 0));
  }

  useImperativeHandle(ref, () => ({ setPercent: _onSetPercent }));

  const loadingStyle = useAnimatedStyle(() => {
    const percent = interpolate(sharedValue.value, [0, 1], [0, 100]);
    return { width: `${percent}%` }
  }, []);

  return (
    <View style={styles.container} pointerEvents='auto' ref={indicatorRef}>
      <View style={styles.view}><Animated.View style={[styles.loading, loadingStyle, { backgroundColor: color }]} /></View>
    </View>
  );

});

export default memo(PageIndicator, () => true);
