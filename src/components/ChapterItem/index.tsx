import React, { memo } from 'react';
import { View } from 'react-native';

import { TChapter } from '@/models/types';
import { IPlayCircleSVG } from '@/assets/svg';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';

type TChapterItemProps = { item: TChapter, isActive?: boolean, chapterIndex: number, onPressChapter: Function }

export const ChapterItem: React.FC<TChapterItemProps> = memo(({ item, isActive, chapterIndex, onPressChapter }) => {

  const fill = !!isActive ? '#000000' : '#A3A3A3';

  const labelStyle = !!isActive ? styles.active : styles.label;

  const _onPressChapter = () => onPressChapter?.({ ...item, chapter_index: chapterIndex });

  return (
    <View>
      <TouchableView style={styles.view} onPress={_onPressChapter}>
        <IPlayCircleSVG fill={fill} />
        <View style={styles.detail}><TextBase style={labelStyle} numberOfLines={1}>{item?.title}</TextBase></View>
      </TouchableView>

      <View style={styles.separator} />
    </View>
  )

}, () => true);
