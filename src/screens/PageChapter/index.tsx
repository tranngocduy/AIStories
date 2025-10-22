import React from 'react';
import { View } from 'react-native';

import { useRouteNavigation } from '@/useHooks/useNavigation';

import { styles } from './styles';

export const PageChapter: React.FC<{}> = () => {

  const { params } = useRouteNavigation('PageChapter');

  const title = params?.chapter?.title;

  const chapterId = params?.chapter?.id;

  const content = params?.chapter?.content;

  const chapterIndex = params?.chapter?.chapter_index;

  return (
    <View style={styles.container}>

    </View>
  )

}
