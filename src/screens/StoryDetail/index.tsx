import React, { useState, useMemo, useRef } from 'react';
import { View, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { useStoryDetail } from '@/useQuery/useStoryDetail';
import { useRouteNavigation } from '@/useHooks/useNavigation';
import { useTranslateVersions } from '@/useQuery/useTranslateVersions';

import { HeaderStack } from '@/components/HeaderStack';

import { Overview } from './Overview';
import { TabStory } from './TabStory';
import { Chapters } from './Chapters';
import { RateVote } from './RateVote';
import { StoryInfo } from './StoryInfo';

import { styles } from './styles';
import { TTabStoryRef } from './types';

export const StoryDetail: React.FC<{}> = () => {
  const { params } = useRouteNavigation('StoryDetail');

  const [activeIndex, setActiveIndex] = useState(0);

  const queryStoryDetail = useStoryDetail({ storyId: params?.story?.id });

  const queryTranslateVersion = useTranslateVersions({ storyId: params?.story?.id });

  const translateVersionId = (queryTranslateVersion?.data?.[0]?.id || null);

  const chaptersRef = useRef(null);

  const tabStoryRef = useRef<TTabStoryRef>(null);

  const _onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const paddingBottom = 20;
    const offsetY = event?.nativeEvent?.contentOffset?.y;
    const layoutHeight = event?.nativeEvent?.layoutMeasurement?.height;
    const contentHeight = (event?.nativeEvent?.contentSize?.height - paddingBottom);
    if ((layoutHeight + offsetY) >= contentHeight) { }
  }

  const _onChangeTab = (tabPageIndex: number) => {
    setActiveIndex(tabPageIndex);
    tabStoryRef.current?.onScroll?.(tabPageIndex);
  }

  const memoOverview = useMemo(() => <Overview detail={queryStoryDetail?.data} />, [JSON.stringify(queryStoryDetail?.data)]);

  const memoChapters = useMemo(() => <Chapters translateVersionId={translateVersionId} ref={chaptersRef} />, [translateVersionId]);

  const memoRateVote = useMemo(() => <RateVote story={params?.story} />, []);

  const memoStoryInfo = useMemo(() => <StoryInfo story={params?.story} detail={queryStoryDetail?.data} />, [JSON.stringify(queryStoryDetail?.data)]);

  const memoTabStory = useMemo(() => <TabStory onChangeTab={_onChangeTab} ref={tabStoryRef} />, []);

  return (
    <View style={styles.container}>
      <HeaderStack />
      <View style={styles.view}>
        <ScrollView contentContainerStyle={styles.scroll} scrollEventThrottle={16} stickyHeaderIndices={[1]} onScroll={_onScroll}>
          {memoStoryInfo}
          {memoTabStory}
          <View style={styles.page}>
            {(activeIndex === 0) && <Animated.View style={styles.view} entering={FadeInDown}>{memoOverview}</Animated.View>}
            {(activeIndex === 1) && <Animated.View style={styles.view} entering={FadeInDown}>{memoChapters}</Animated.View>}
            {(activeIndex === 2) && <Animated.View style={styles.view} entering={FadeInDown}>{memoRateVote}</Animated.View>}
          </View>
        </ScrollView>
      </View>
    </View>
  )

}
