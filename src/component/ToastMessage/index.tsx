import React, { useEffect, useRef, memo } from 'react';
import { View } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { scheduleOnRN } from 'react-native-worklets';
import Animated, { withTiming, withSpring, useSharedValue, useAnimatedStyle, cancelAnimation, LinearTransition } from 'react-native-reanimated';

import { runAfterInteractions } from '@/utils/app';
import { IToastSuccessSVG, IToastErrorSVG, ICloseModalSVG } from '@/assets/svg';

import TextBase from '@/component/TextBase';
import TouchableView from '@/component/TouchableView';

import styles from './styles';

type ToastMessageProps = { item: { type?: 'success' | 'error' | 'notice', title?: string, message?: string }, onRemove: Function };

const ToastMessage: React.FC<ToastMessageProps> = ({ item, onRemove }) => {
  const DURATION = 5000;

  const type = item?.type;

  const title = item?.title;

  const message = item?.message;

  const maxSize = styles.size.width;

  const limitPanSize = ((maxSize - 200) / 3);

  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const contextValue = useSharedValue(0);

  const sharedValue = useSharedValue(maxSize);

  const bgColor = (type === 'error') ? '#FDECEC' : '#E5FCF1';

  const iconColor = (type === 'error') ? 'rgba(240, 67, 73, 0.1)' : 'rgba(1, 225, 123, 0.1)';

  const icon = (type === 'error') ? <IToastErrorSVG width={14} height={14} /> : <IToastSuccessSVG width={14} height={14} />;

  const _onRemove = () => onRemove?.(item);

  const _onPanRemove = () => runAfterInteractions(_onRemove, 100);

  const _onPressRemove = () => {
    runAfterInteractions(_onRemove, 200);
    sharedValue.value = withTiming(maxSize, { duration: 350 });
  }

  const _onStartTimeout = () => {
    timeoutRef.current = setTimeout(() => {
      if (!!timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = null;

      _onPressRemove();
    }, DURATION);
  }

  const _onStopTimeout = () => {
    if (!!timeoutRef.current) clearTimeout(timeoutRef.current);
  }

  const _onShowToast = () => sharedValue.value = withSpring(0, { damping: 75 });

  useEffect(() => {
    runAfterInteractions(_onShowToast, 50);
    runAfterInteractions(_onStartTimeout, 350);
  }, []);

  const tapGesture = Gesture.Pan()
    .onBegin(() => {
      scheduleOnRN(_onStopTimeout);
      cancelAnimation(sharedValue);
    })
    .onStart(() => {
      contextValue.value = sharedValue.value;
    })
    .onUpdate((event) => {
      sharedValue.value = event.translationX + contextValue.value;
    })
    .onEnd(() => {
      if (sharedValue.value < limitPanSize) sharedValue.value = withSpring(0, { damping: 15 });
      if (sharedValue.value >= limitPanSize) sharedValue.value = withSpring(maxSize, { damping: 15 });
    })
    .onFinalize(event => {
      if (event.translationX < limitPanSize) scheduleOnRN(_onStartTimeout);
      if (event.translationX >= limitPanSize) scheduleOnRN(_onPanRemove);
    });

  const viewStyle = useAnimatedStyle(() => ({ transform: [{ translateX: sharedValue.value }] }));

  return (
    <Animated.View layout={LinearTransition}>
      <GestureDetector gesture={tapGesture}>
        <Animated.View style={[styles.container, viewStyle]}>
          <View style={styles.view}>
            <View style={[styles.bgView, { backgroundColor: bgColor }]} pointerEvents='none' />

            <View style={styles.itemView}>
              <View><View style={[styles.iconView, { backgroundColor: iconColor }]}>{icon}</View></View>

              <View style={styles.messageView}>
                {!!title && <TextBase style={styles.title}>{title}</TextBase>}
                {!!message && <TextBase style={styles.message} numberOfLines={3}>{message}</TextBase>}
              </View>

              <View style={styles.closeView}><TouchableView hitSlop={16} onPress={_onPressRemove}><ICloseModalSVG /></TouchableView></View>
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
    </Animated.View>
  )

};

export default memo(ToastMessage, () => true);
