import React from 'react';
import { View } from 'react-native';
import Animated, { withTiming, useSharedValue, useAnimatedStyle, interpolate, Easing } from 'react-native-reanimated';

import { useIStore } from '@/store';
import { useStoryChapter } from '@/useQuery/useStoryChapter';
import { useStackNavigation } from '@/useHooks/useNavigation';
import { IArrowFullSVG, IPageSVG, IPageSettingSVG } from '@/assets/svg';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';

type TPageSettingProps = { chapterId: number, chapterIndex: number }

export const PageSetting: React.FC<TPageSettingProps> = ({ chapterId, chapterIndex }) => {
  const { navigate, setParams } = useStackNavigation();

  const totalChapters = useIStore(state => state.storeStory?.totalChapters);

  const translateVersionId = useIStore(state => (state.storeStory?.translateVersionId || 0));

  const queryStoryChapter = useStoryChapter({ chapterId, chapterIndex, translateVersionId });

  const prevChapter = queryStoryChapter.data?.prevChapter;

  const nextChapter = queryStoryChapter.data?.nextChapter;

  const sharedValue = useSharedValue(1);

  const _onPressPrev = () => setParams({ ...prevChapter, chapterIndex: (chapterIndex - 1), translateVersionId });

  const _onPressNext = () => setParams({ ...nextChapter, chapterIndex: (chapterIndex + 1), translateVersionId });

  const _renderPrevButton = () => {
    const color = !prevChapter ? '#417584' : '#FFFFFF';
    const backgroundColor = !prevChapter ? 'rgba(65, 117, 132, 0.2)' : 'rgba(23, 53, 74, 1)';

    return (
      <TouchableView disabled={!prevChapter} style={styles.button} onPress={_onPressPrev}>
        <View style={[styles.bgButton, { backgroundColor }]} />
        <View style={styles.prvIcon}><IArrowFullSVG fill={color} /></View>
        <TextBase style={[styles.labelButton, { color }]}>Trước</TextBase>
      </TouchableView>
    )
  }

  const _renderNextButton = () => {
    const color = !nextChapter ? '#417584' : '#FFFFFF';
    const backgroundColor = !nextChapter ? 'rgba(65, 117, 132, 0.2)' : 'rgba(23, 53, 74, 1)';

    return (
      <TouchableView disabled={!nextChapter} style={styles.button} onPress={_onPressNext}>
        <View style={[styles.bgButton, { backgroundColor }]} />
        <TextBase style={[styles.labelButton, { color }]}>Kế tiếp</TextBase>
        <View style={styles.nextIcon}><IArrowFullSVG fill={color} /></View>
      </TouchableView>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        {_renderPrevButton()}

        <TouchableView style={styles.pages}>
          <IPageSVG />
          <TextBase style={styles.pagesText}>{(chapterIndex + 1)}/{totalChapters}</TextBase>
        </TouchableView>

        {_renderNextButton()}

        <View style={styles.space} />

        <TouchableView style={styles.option}><IPageSettingSVG /></TouchableView>
      </View>
    </View>
  )

}
