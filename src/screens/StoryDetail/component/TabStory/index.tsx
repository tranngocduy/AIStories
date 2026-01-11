import React, { forwardRef, useImperativeHandle } from 'react';
import { View } from 'react-native';
import Animated, { withTiming, useSharedValue, useAnimatedStyle, interpolate } from 'react-native-reanimated';

import TextBase from '@/component/TextBase';
import TouchableView from '@/component/TouchableView';

import styles from './styles';

type TabStoryProps = { onChangeTab: (index: number) => void };

export type TabStoryRefs = { onScroll: (tabPageIndex: number) => void };

const TabStory = forwardRef<TabStoryRefs, TabStoryProps>(({ onChangeTab }, ref) => {

  const sharedValue = useSharedValue(0);

  const _onPressOverview = () => onChangeTab?.(0);

  const _onPressChapters = () => onChangeTab?.(1);

  const _onPressReview = () => onChangeTab?.(2);

  const _onScroll = (tabPageIndex: number) => {
    sharedValue.value = withTiming((tabPageIndex < 0) ? 0 : (tabPageIndex > 2) ? 2 : tabPageIndex);
  }

  useImperativeHandle(ref, () => ({ onScroll: _onScroll }));

  const labelOverviewStyle = useAnimatedStyle(() => {
    const opacity = interpolate(sharedValue.value, [0, 1, 2], [0, 1, 1])
    return { opacity };
  }, []);

  const labelActiveOverviewStyle = useAnimatedStyle(() => {
    const opacity = interpolate(sharedValue.value, [0, 1, 2], [1, 0, 0])
    return { opacity };
  }, []);

  const labelChaptersStyle = useAnimatedStyle(() => {
    const opacity = interpolate(sharedValue.value, [0, 1, 2], [1, 0, 1])
    return { opacity };
  }, []);

  const labelActiveChaptersStyle = useAnimatedStyle(() => {
    const opacity = interpolate(sharedValue.value, [0, 1, 2], [0, 1, 0])
    return { opacity };
  }, []);

  const labelReviewStyle = useAnimatedStyle(() => {
    const opacity = interpolate(sharedValue.value, [0, 1, 2], [1, 1, 0])
    return { opacity };
  }, []);

  const labelActiveReviewStyle = useAnimatedStyle(() => {
    const opacity = interpolate(sharedValue.value, [0, 1, 2], [0, 0, 1])
    return { opacity };
  }, []);

  const indicatorStyle = useAnimatedStyle(() => {
    const indicator = styles.indicator.width;
    const translateX = interpolate(sharedValue.value, [0, 1, 2], [0, indicator, (indicator * 2)])
    return { transform: [{ translateX }] };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableView style={styles.item} hitSlop={8} onPress={_onPressOverview}>
          <Animated.View style={labelOverviewStyle}><TextBase style={styles.label}>Tổng quan</TextBase></Animated.View>
          <Animated.View style={[styles.activeView, labelActiveOverviewStyle]}><TextBase style={styles.labelActive}>Tổng quan</TextBase></Animated.View>
        </TouchableView>

        <TouchableView style={styles.item} hitSlop={8} onPress={_onPressChapters}>
          <Animated.View style={labelChaptersStyle}><TextBase style={styles.label}>Chương tiết</TextBase></Animated.View>
          <Animated.View style={[styles.activeView, labelActiveChaptersStyle]}><TextBase style={styles.labelActive}>Chương tiết</TextBase></Animated.View>
        </TouchableView>

        <TouchableView style={styles.item} hitSlop={8} onPress={_onPressReview}>
          <Animated.View style={labelReviewStyle}><TextBase style={styles.label}>Đánh giá</TextBase></Animated.View>
          <Animated.View style={[styles.activeView, labelActiveReviewStyle]}><TextBase style={styles.labelActive}>Đánh giá</TextBase></Animated.View>
        </TouchableView>
      </View>

      <Animated.View style={[styles.indicator, indicatorStyle]} pointerEvents='none' />
    </View>
  )

});

export default TabStory;
