import React, { useMemo } from 'react';
import { View } from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';

import { dayjs } from '@/utils/timeTz';
import { useThemePage } from '@/useHooks/useThemePage';
import { useRouteNavigation } from '@/useHooks/useNavigation';

import { PageHeader } from './PageHeader';
import { Paragraphs } from './Paragraphs';
import { PageSetting } from './PageSetting';

import { styles } from './styles';

export const PageChapter: React.FC<{}> = () => {

  const { background } = useThemePage();

  const { params } = useRouteNavigation('PageChapter');

  const title = params?.chapter?.title;

  const chapterId = params?.chapter?.id;

  const content = params?.chapter?.content;

  const chapterIndex = params?.chapter?.chapter_index;

  const keyFrame = useMemo(() => dayjs().valueOf(), [chapterId]);

  const memoPageHeader = useMemo(() => <PageHeader title={title} />, [title]);

  const memoParagraphs = useMemo(() => <Paragraphs content={content} />, [content]);

  const memoPageSetting = useMemo(() => <PageSetting chapterId={chapterId} chapterIndex={chapterIndex} />, [chapterId, chapterIndex]);

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      {memoPageHeader}

      <Animated.View style={styles.view} entering={FadeInDown} exiting={FadeOutDown} key={keyFrame}>
        {memoParagraphs}
      </Animated.View>

      {memoPageSetting}
    </View>
  )

}
