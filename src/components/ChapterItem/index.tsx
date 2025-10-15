import React, { memo } from 'react';
import { View } from 'react-native';

import { IPlayCircleSVG } from '@/assets/svg';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';

type TChapterItemProps = { item?: any, chapterIndex?: number, onPressChapter?: Function }

export const ChapterItem: React.FC<TChapterItemProps> = memo(({ item, chapterIndex, onPressChapter }) => {

  const _onPressChapter = () => onPressChapter?.({ ...item, chapterIndex });

  return (
    <View>
      <TouchableView style={styles.view} onPress={_onPressChapter}>
        <IPlayCircleSVG fill='#A3A3A3' />
        <View style={styles.detail}><TextBase style={styles.label} numberOfLines={1}>{item?.title}</TextBase></View>
      </TouchableView>

      <View style={styles.separator} />
    </View>
  )

}, () => true);
