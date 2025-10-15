import React, { useState, useMemo, useRef } from 'react';
import { View, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { useStoryDetail } from '@/useQuery/useStoryDetail';
import { useRouteNavigation } from '@/useHooks/useNavigation';

import { HeaderStack } from '@/components/HeaderStack';

import { Overview } from './Overview';
import { StoryInfo } from './StoryInfo';
import { TabStoryPages } from './TabStoryPages';

import { styles } from './styles';
import { TTabStoryPagesRef } from './types';

export const StoryDetail: React.FC<{}> = () => {
  const { params } = useRouteNavigation('StoryDetail');

  const [activeIndex, setActiveIndex] = useState(0);

  const queryStoryDetail = useStoryDetail({ storyId: params?.story?.id });

  const chaptersRef = useRef(null);

  const tabStoryPagesRef = useRef<TTabStoryPagesRef>(null);

  const _onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const paddingBottom = 20;
    const offsetY = event?.nativeEvent?.contentOffset?.y;
    const layoutHeight = event?.nativeEvent?.layoutMeasurement?.height;
    const contentHeight = (event?.nativeEvent?.contentSize?.height - paddingBottom);
    if ((layoutHeight + offsetY) >= contentHeight) { }
  }

  const _onChangeTab = (tabPageIndex: number) => {
    setActiveIndex(tabPageIndex);
    tabStoryPagesRef.current?.onScroll?.(tabPageIndex);
  }

  const memoOverview = useMemo(() => <Overview detail={queryStoryDetail?.data} />, [JSON.stringify(queryStoryDetail?.data)]);

  const memoStoryInfo = useMemo(() => <StoryInfo story={params?.story} detail={queryStoryDetail?.data} />, [JSON.stringify(queryStoryDetail?.data)]);

  const memoTabStoryPages = useMemo(() => <TabStoryPages onChangeTab={_onChangeTab} ref={tabStoryPagesRef} />, []);

  return (
    <View style={styles.container}>
      <HeaderStack />
      <View style={styles.view}>
        <ScrollView contentContainerStyle={styles.scroll} scrollEventThrottle={16} onScroll={_onScroll}>
          {memoStoryInfo}
          {memoTabStoryPages}
          {(activeIndex === 0) && <Animated.View style={styles.view} entering={FadeInDown}>{memoOverview}</Animated.View>}
        </ScrollView>
      </View>
    </View>
  )

}
