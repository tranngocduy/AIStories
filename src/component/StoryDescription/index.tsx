import React, { useState, useRef } from 'react';
import { View, Text, LayoutChangeEvent, TextLayoutEvent } from 'react-native';
import Animated, { withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

import styles from './styles';

type StoryDescriptionProps = { description?: string };

const StoryDescription: React.FC<StoryDescriptionProps> = ({ description }) => {
  const numberOfLines = 5;

  const [lines, setLines] = useState({ value: '', hasMore: false });

  const shortLineRef = useRef('');

  const heightFullRef = useRef(0);

  const hasMoreRef = useRef(false);

  const viewFullRef = useRef<View>(null);

  const viewShortRef = useRef<View>(null);

  const sharedValue = useSharedValue(0);

  const _onPressSeeMore = () => {
    viewFullRef.current?.setNativeProps?.({ opacity: 1 });
    viewShortRef.current?.setNativeProps?.({ opacity: 0 });
    sharedValue.value = withTiming(+heightFullRef.current);
  }

  const _onLayoutFull = (event: LayoutChangeEvent) => heightFullRef.current = event?.nativeEvent?.layout?.height;

  const _onLayoutShort = (event: LayoutChangeEvent) => sharedValue.value = withTiming(event?.nativeEvent?.layout?.height);

  const _onTextLayout = (event: TextLayoutEvent) => {
    const lines = [...event.nativeEvent.lines];

    if ((lines.length || 0) <= numberOfLines) return null;

    if (!!lines[numberOfLines].text) hasMoreRef.current = true;

    const lastLine = lines[(numberOfLines - 1)].text?.split(' ')?.filter?.((_, index) => (index < 5))?.join(' ');

    const shortLine = lines.filter((_, index) => (index < (numberOfLines - 1)))?.map?.(element => element.text)?.join('') + lastLine;

    shortLineRef.current = shortLine;

    setLines({ value: shortLineRef.current, hasMore: hasMoreRef.current });
  }

  const containerStyle = useAnimatedStyle(() => ({ height: sharedValue.value }));

  if (!description) return <View />;

  const _renderSeeMore = () => {
    if (!lines?.hasMore) return '';
    return <Text>... <Text style={styles.seeMore} allowFontScaling={false} onPress={_onPressSeeMore}>Xem thêm</Text></Text>;
  }

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <View style={[styles.view, { opacity: 0 }]} ref={viewFullRef}>
        <View onLayout={_onLayoutFull}><Text style={styles.description} allowFontScaling={false} onTextLayout={_onTextLayout}>{description}</Text></View>
      </View>

      <View style={[styles.view, { opacity: 1 }]} ref={viewShortRef}>
        <View onLayout={_onLayoutShort}><Text style={styles.description} allowFontScaling={false}>{lines?.value}{_renderSeeMore()}</Text></View>
      </View>
    </Animated.View>
  )

}

export default StoryDescription;
