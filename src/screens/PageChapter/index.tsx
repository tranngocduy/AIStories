import React, { useMemo } from 'react';
import { View } from 'react-native';

import { useThemePage } from '@/useHooks/useThemePage';
import { useRouteNavigation } from '@/useHooks/useNavigation';

import PageHeader from './component/PageHeader';
import PageContent from './component/PageContent';
import PageSetting from './component/PageSetting';

import styles from './styles';

const PageChapter: React.FC = () => {

  const { background } = useThemePage();

  const { params } = useRouteNavigation('PageChapter');

  const story = params?.story;

  const title = params?.chapter?.title;

  const chapterId = params?.chapter?.id;

  const chapterIndex = params?.chapter?.chapter_index;

  const memoPageHeader = useMemo(() => <PageHeader title={title} />, [title]);

  const memoPageContent = useMemo(() => <PageContent chapterId={chapterId} />, [chapterId]);

  const memoPageSetting = useMemo(() => <PageSetting story={story} chapterId={chapterId} chapterIndex={chapterIndex} />, [chapterId, chapterIndex]);

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      {memoPageHeader}

      {memoPageContent}

      {memoPageSetting}
    </View>
  )

}

export default PageChapter;
