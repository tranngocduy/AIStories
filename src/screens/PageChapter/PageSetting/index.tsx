import React from 'react';
import { View } from 'react-native';

import { IArrowFullSVG } from '@/assets/svg';
import { useStoryChapter } from '@/useQuery/useStoryChapter';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';

type TPageSettingProps = { chapterId: number, chapterIndex: number }

export const PageSetting: React.FC<TPageSettingProps> = ({ chapterId, chapterIndex }) => {

  return (
    <View style={styles.container}>
      <View style={styles.view}>

      </View>
    </View>
  )

}
