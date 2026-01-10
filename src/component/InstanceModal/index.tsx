import React, { useEffect, forwardRef, useImperativeHandle } from 'react';
import { View } from 'react-native';
import Animated, { withTiming, useSharedValue, useAnimatedStyle, interpolate } from 'react-native-reanimated';

import { runAfterInteractions } from '@/utils/app';

import styles from './styles';

export type InstanceModalRefs = { onFocus: () => void, onBackground: () => void, onClose: (callback?: () => void) => void };

type InstanceModalProps = { children: React.ReactNode, isHideBG?: boolean, onHide?: () => void };

const InstanceModal = forwardRef<InstanceModalRefs, InstanceModalProps>(({ children, isHideBG, onHide }, ref) => {

  const duration = 350;

  const sharedValue = useSharedValue(0);

  const _loadAnimation = async (toValue: number) => {
    await new Promise<void>(resolve => {
      sharedValue.value = withTiming(toValue, { duration });
      runAfterInteractions(() => resolve?.(), duration);
    });
  }

  const _onFocus = async () => await _loadAnimation(1);

  const _onBackground = async () => await _loadAnimation(0);

  const _onClose = async (callback?: () => void) => {
    await _loadAnimation(0);

    if (typeof (callback) === 'function') runAfterInteractions(callback);

    if (typeof (onHide) === 'function') runAfterInteractions(onHide, 100);
  }

  useImperativeHandle(ref, () => ({ onFocus: _onFocus, onBackground: _onBackground, onClose: _onClose }));

  useEffect(() => { sharedValue.value = withTiming(1, { duration }); }, []);

  const bgView = useAnimatedStyle(() => {
    return { opacity: sharedValue.value }
  }, []);

  const viewStyle = useAnimatedStyle(() => {
    const toValue = interpolate(sharedValue.value, [0, 1], [styles.page.height, 0]);
    return { transform: [{ translateY: toValue }] };
  }, []);

  return (
    <View style={styles.container}>
      {!isHideBG && <Animated.View style={[styles.bg, bgView]} />}
      <Animated.View style={[styles.view, viewStyle]}><View style={styles.view}>{children}</View></Animated.View>
    </View>
  )

});

export default InstanceModal;
