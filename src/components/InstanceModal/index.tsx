import React, { forwardRef, useImperativeHandle } from 'react';
import { View, Modal } from 'react-native';
import Animated, { withTiming, useSharedValue, useAnimatedStyle, interpolate, runOnJS } from 'react-native-reanimated';

import { runAfterInteractions } from '@/utils/app';

import { styles } from './styles';

type TInstanceModalProps = { children: React.ReactNode, onHide: Function };

export type TInstanceModalRefs = { onFocus: Function, onBackground: Function, onClose: Function };

export const InstanceModal = forwardRef<TInstanceModalRefs, TInstanceModalProps>(({ children, onHide }, ref) => {

  const duration = 350;

  const sharedValue = useSharedValue(0);

  const _resolveLoadEnd = (resolve?: Function) => resolve?.();

  const _loadAnimation = async (toValue: number) => {
    await new Promise(resolve => {
      sharedValue.value = withTiming(toValue, { duration }, () => {
        runOnJS(_resolveLoadEnd)(resolve);
      });
    });
  }

  const _onFocus = async () => await _loadAnimation(1);

  const _onBackground = async () => await _loadAnimation(0);

  const _onClose = async (callback?: Function) => {
    await _loadAnimation(0);

    if (typeof (callback) === 'function') runAfterInteractions(callback);

    if (typeof (onHide) === 'function') runAfterInteractions(onHide, 100);
  }

  useImperativeHandle(ref, () => ({ onFocus: _onFocus, onBackground: _onBackground, onClose: _onClose }));

  const viewStyle = useAnimatedStyle(() => {
    const toValue = interpolate(sharedValue.value, [0, 1], [styles.page.height, 0]);
    return { transform: [{ translateY: toValue }] };
  });

  return (
    <Modal visible={true} transparent={true} animationType='fade'>
      <View style={styles.container}><Animated.View style={[styles.view, viewStyle]}><View style={styles.view}>{children}</View></Animated.View></View>
    </Modal>
  )

});
