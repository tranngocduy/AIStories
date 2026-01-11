import React, { useState, useMemo, useRef } from 'react';
import { View, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { useStoryDetail } from '@/useQuery/useStoryDetail';
import { useRouteNavigation } from '@/useHooks/useNavigation';
import { useTranslateVersions } from '@/useQuery/useTranslateVersions';

import HeaderStack from '@/component/HeaderStack';

import StoryInfo from './component/StoryInfo';
import TabStory, { TabStoryRefs } from './component/TabStory';

import styles from './styles';

const StoryDetail: React.FC = () => {

  const { params } = useRouteNavigation('StoryDetail');

  const [activeIndex, setActiveIndex] = useState(0);

  const queryStoryDetail = useStoryDetail({ storyId: params?.story?.id });

  const queryTranslateVersion = useTranslateVersions({ storyId: params?.story?.id });

  const translateVersionId = (queryTranslateVersion?.data?.[0]?.id || null);

  const chaptersRef = useRef(null);

  const tabStoryRef = useRef<TabStoryRefs>(null);

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

  const memoTabStory = useMemo(() => <TabStory onChangeTab={_onChangeTab} ref={tabStoryRef} />, []);

  const memoStoryInfo = useMemo(() => <StoryInfo story={params?.story} detail={queryStoryDetail?.data} />, [JSON.stringify(queryStoryDetail?.data)]);

  return (
    <View style={styles.container}>
      <HeaderStack />
      <View style={styles.view}>
        <ScrollView contentContainerStyle={styles.scroll} scrollEventThrottle={16} stickyHeaderIndices={[1]} onScroll={_onScroll}>
          {memoStoryInfo}
          {memoTabStory}
          <View style={styles.page}>

          </View>
        </ScrollView>

      </View>
    </View>
  )

}

export default StoryDetail;
