import React, { memo } from 'react';
import { View } from 'react-native';

import { IPlayCircleSVG } from '@/assets/svg';
import type { TChapter } from '@/models/types';

import TextBase from '@/component/TextBase';
import TouchableView from '@/component/TouchableView';

import styles from './styles';

type ChapterItemProps = { item: TChapter, isActive?: boolean, chapterIndex: number, onPressChapter: Function }

const ChapterItem: React.FC<ChapterItemProps> = ({ item, isActive, chapterIndex, onPressChapter }) => {

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

};

export default memo(ChapterItem, (prevProps, nextProps) => (JSON.stringify(prevProps) === JSON.stringify(nextProps)));
