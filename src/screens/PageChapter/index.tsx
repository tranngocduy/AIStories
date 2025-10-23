import React, { useMemo } from 'react';
import { View } from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';

import { useIStore } from '@/store';
import { dayjs } from '@/utils/timeTz';
import { useRouteNavigation } from '@/useHooks/useNavigation';

import { PageHeader } from './PageHeader';

import { styles } from './styles';

export const PageChapter: React.FC<{}> = () => {

  const backgroundColor = useIStore(state => state?.storeGlobal?.chapterSettings?.mapColors?.background);

  const { params } = useRouteNavigation('PageChapter');

  const title = params?.chapter?.title;

  const chapterId = params?.chapter?.id;

  const content = params?.chapter?.content;

  const chapterIndex = params?.chapter?.chapter_index;

  const _onPressPage = () => { }

  const keyFrame = useMemo(() => dayjs().valueOf(), [chapterId]);

  const memoPageHeader = useMemo(() => <PageHeader title={title} />, [title]);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {memoPageHeader}

      <Animated.View style={styles.view} entering={FadeInDown} exiting={FadeOutDown} key={keyFrame}>

      </Animated.View>

    </View>
  )

}
