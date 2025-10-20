import React, { useState } from 'react';
import { View } from 'react-native';

import { IArrowFullSVG } from '@/assets/svg';
import { FILTER_OPTION_AUTHOR, FILTER_OPTION_SORT, FILTER_OPTION_VOTES, FILTER_OPTION_CHAPTERS, FILTER_OPTION_RATING, FILTER_OPTION_STATUS, FILTER_OPTION_CATEGORY } from '@/constants';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';
import { TFilterQueryProps, TOptionFilter, TOptionFilterState } from '../types';

export const FilterQuery: React.FC<TFilterQueryProps> = ({ onPressFilter }) => {

  const query = {
    author: null,
    sort: null,
    votes: null,
    chapters: null,
    rating: null,
    status: null,
    category: null
  };

  const [optionFilter, setOptionFilter] = useState<TOptionFilterState>({
    author: query?.author || FILTER_OPTION_AUTHOR[0],
    sort: query?.sort || FILTER_OPTION_SORT[0],
    votes: query?.votes || FILTER_OPTION_VOTES[0],
    chapters: query?.chapters || FILTER_OPTION_CHAPTERS[0],
    rating: query?.rating || FILTER_OPTION_RATING[0],
    status: query?.status || FILTER_OPTION_STATUS[0],
    category: query?.category || FILTER_OPTION_CATEGORY[0]
  });

  const _onPressAuthor = () => onPressFilter?.('author');

  const authorLabel = optionFilter?.author?.label;

  const sortByLabel = optionFilter?.sort?.label;

  const voteByLabel = optionFilter?.votes?.label;

  const chaptersLabel = optionFilter?.chapters?.label;

  const ratingLabel = optionFilter?.rating?.label;

  const statusLabel = optionFilter?.status?.label;

  const categoryLabel = optionFilter?.category?.label;

  return (
    <View>
      <TouchableView style={styles.item} onPress={_onPressAuthor}>
        <TextBase style={styles.label}>Tác giả</TextBase>
        <View style={styles.selectView}>
          <TextBase style={styles.selectLabel} numberOfLines={1}>{authorLabel}</TextBase>
          <View style={styles.selectIcon}><IArrowFullSVG /></View>
        </View>
      </TouchableView>

      <View style={styles.separator} />

      <TouchableView style={styles.item}>
        <TextBase style={styles.label}>Sắp xếp theo</TextBase>
        <View style={styles.selectView}>
          <TextBase style={styles.selectLabel}>{sortByLabel}</TextBase>
          <View style={styles.selectIcon}><IArrowFullSVG /></View>
        </View>
      </TouchableView>

      <View style={styles.separator} />

      <TouchableView style={styles.item}>
        <TextBase style={styles.label}>Lượt vote</TextBase>
        <View style={styles.selectView}>
          <TextBase style={styles.selectLabel}>{voteByLabel}</TextBase>
          <View style={styles.selectIcon}><IArrowFullSVG /></View>
        </View>
      </TouchableView>

      <View style={styles.separator} />

      <TouchableView style={styles.item}>
        <TextBase style={styles.label}>Số chương</TextBase>
        <View style={styles.selectView}>
          <TextBase style={styles.selectLabel}>{chaptersLabel}</TextBase>
          <View style={styles.selectIcon}><IArrowFullSVG /></View>
        </View>
      </TouchableView>

      <View style={styles.separator} />

      <TouchableView style={styles.item}>
        <TextBase style={styles.label}>Cho điểm</TextBase>
        <View style={styles.selectView}>
          <TextBase style={styles.selectLabel}>{ratingLabel}</TextBase>
          <View style={styles.selectIcon}><IArrowFullSVG /></View>
        </View>
      </TouchableView>

      <View style={styles.separator} />

      <TouchableView style={styles.item}>
        <TextBase style={styles.label}>Trạng thái</TextBase>
        <View style={styles.selectView}>
          <TextBase style={styles.selectLabel}>{statusLabel}</TextBase>
          <View style={styles.selectIcon}><IArrowFullSVG /></View>
        </View>
      </TouchableView>

      <View style={styles.separator} />

      <TouchableView style={styles.item}>
        <TextBase style={styles.label}>Thể loại</TextBase>
        <View style={styles.selectView}>
          <TextBase style={styles.selectLabel}>{categoryLabel}</TextBase>
          <View style={styles.selectIcon}><IArrowFullSVG /></View>
        </View>
      </TouchableView>

      <View>
        <TouchableView style={styles.bottom}>
          <TextBase style={styles.bottomText}>Đặt lại bộ lọc</TextBase>
        </TouchableView>
      </View>
    </View>
  )

}
