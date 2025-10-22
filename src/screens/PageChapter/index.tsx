import React, { useMemo } from 'react';
import { View } from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';

import { dayjs } from '@/utils/timeTz';
import { useRouteNavigation } from '@/useHooks/useNavigation';

import { Paragraph } from './Paragraph';

import { styles } from './styles';

export const PageChapter: React.FC<{}> = () => {

  const { params } = useRouteNavigation('PageChapter');

  const title = params?.chapter?.title;

  const chapterId = params?.chapter?.id;

  const content = params?.chapter?.content;

  const chapterIndex = params?.chapter?.chapter_index;

  const _onPressPage = () => { }

  const keyFrame = useMemo(() => dayjs().valueOf(), [chapterId]);

  const memoParagraph = useMemo(() => <Paragraph title={title} content={content} onPressPage={_onPressPage} />, [title, content]);

  return (
    <View style={styles.container}>

      <Animated.View style={styles.view} entering={FadeInDown} exiting={FadeOutDown} key={keyFrame}>
        {memoParagraph}
      </Animated.View>

    </View>
  )

}
