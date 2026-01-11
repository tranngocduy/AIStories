import React from 'react';
import { View } from 'react-native';

import { useIStore } from '@/store';
import { useThemePage } from '@/useHooks/useThemePage';
import { useStoryChapter } from '@/useQuery/useStoryChapter';
import { useStackNavigation } from '@/useHooks/useNavigation';
import { IArrowFullSVG, IPageSVG, IPageSettingSVG, IStorySpeechSVG } from '@/assets/svg';
import type { TStory } from '@/models/types';

import TextBase from '@/component/TextBase';
import TouchableView from '@/component/TouchableView';

import { StoryChaptersInstance } from '@/instance';

import styles from './styles';

type PageSettingProps = { story: TStory, chapterId: number, chapterIndex: number }

const PageSetting: React.FC<PageSettingProps> = ({ story, chapterId, chapterIndex }) => {

  const { navigate, setParams } = useStackNavigation();

  const { pageColor, settingColor, settingBackground } = useThemePage();

  const totalChapters = useIStore(state => state.storeStory?.totalChapters);

  const translateVersionId = useIStore(state => (state.storeStory?.translateVersionId || 0));

  const queryStoryChapter = useStoryChapter({ chapterId, chapterIndex, translateVersionId });

  const prevChapter = queryStoryChapter.data?.prevChapter;

  const nextChapter = queryStoryChapter.data?.nextChapter;

  const _onPressSetting = () => navigate('PageSetting');

  const _onPressSpeech = () => navigate('StorySpeech', { story, translateVersionId, chapterIndex });

  const _onPressPrev = () => setParams({ chapter: { ...prevChapter, chapter_index: (chapterIndex - 1), translateVersionId } });

  const _onPressNext = () => setParams({ chapter: { ...nextChapter, chapter_index: (chapterIndex + 1), translateVersionId } });

  const _onPressChapter = async () => {
    const result = await new Promise(resolve => StoryChaptersInstance.show({ translateVersionId, chapterIndex, resolve }));

    if (!!result) setParams({ chapter: { ...result, translateVersionId } });
  }

  const _renderPrevButton = () => {
    const color = !!prevChapter ? settingColor.active : settingColor.inactive;
    const backgroundColor = !!prevChapter ? settingBackground.active : settingBackground.inactive;

    return (
      <TouchableView disabled={!prevChapter} style={styles.button} onPress={_onPressPrev}>
        <View style={[styles.bgButton, { backgroundColor }]} />
        <View style={styles.prvIcon}><IArrowFullSVG fill={color} /></View>
        <TextBase style={[styles.labelButton, { color }]}>Trước</TextBase>
      </TouchableView>
    )
  }

  const _renderNextButton = () => {
    const color = !!nextChapter ? settingColor.active : settingColor.inactive;
    const backgroundColor = !!nextChapter ? settingBackground.active : settingBackground.inactive;

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

        <TouchableView style={[styles.pages, { borderColor: pageColor }]} onPress={_onPressChapter}>
          <IPageSVG fill={pageColor} />
          <TextBase style={[styles.pagesText, { color: pageColor }]}>{(chapterIndex + 1)}/{totalChapters}</TextBase>
        </TouchableView>

        {_renderNextButton()}

        <View style={styles.space} />

        <TouchableView style={[styles.option, { borderColor: pageColor }]} onPress={_onPressSpeech}><IStorySpeechSVG fill={pageColor} /></TouchableView>

        <TouchableView style={[styles.option, { borderColor: pageColor }]} onPress={_onPressSetting}><IPageSettingSVG fill={pageColor} /></TouchableView>
      </View>
    </View>
  )

}

export default PageSetting;
