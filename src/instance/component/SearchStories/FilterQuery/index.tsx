import React from 'react';
import { View } from 'react-native';

import { IArrowFullSVG } from '@/assets/svg';

import TextBase from '@/component/TextBase';
import TouchableView from '@/component/TouchableView';

import styles from './styles';
import type { FilterQueryProps } from '../types';

export const FilterQuery: React.FC<FilterQueryProps> = ({ query, onPressFilter, onPressRest }) => {

  const _onPressAuthor = () => onPressFilter?.('author');

  const _onPressSort = () => onPressFilter?.('sort');

  const _onPressVotes = () => onPressFilter?.('votes');

  const _onPressChapters = () => onPressFilter?.('chapters');

  const _onPressRating = () => onPressFilter?.('rating');

  const _onPressStatus = () => onPressFilter?.('status');

  const _onPressCategory = () => onPressFilter?.('category');

  const _onPressRest = () => onPressRest?.();

  const authorLabel = query?.author?.label;

  const sortByLabel = query?.sort?.label;

  const voteByLabel = query?.votes?.label;

  const chaptersLabel = query?.chapters?.label;

  const ratingLabel = query?.rating?.label;

  const statusLabel = query?.status?.label;

  const categoryLabel = query?.category?.label;

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

      <TouchableView style={styles.item} onPress={_onPressSort}>
        <TextBase style={styles.label}>Sắp xếp</TextBase>
        <View style={styles.selectView}>
          <TextBase style={styles.selectLabel}>{sortByLabel}</TextBase>
          <View style={styles.selectIcon}><IArrowFullSVG /></View>
        </View>
      </TouchableView>

      <View style={styles.separator} />

      <TouchableView style={styles.item} onPress={_onPressVotes}>
        <TextBase style={styles.label}>Lượt vote</TextBase>
        <View style={styles.selectView}>
          <TextBase style={styles.selectLabel}>{voteByLabel}</TextBase>
          <View style={styles.selectIcon}><IArrowFullSVG /></View>
        </View>
      </TouchableView>

      <View style={styles.separator} />

      <TouchableView style={styles.item} onPress={_onPressChapters}>
        <TextBase style={styles.label}>Số chương</TextBase>
        <View style={styles.selectView}>
          <TextBase style={styles.selectLabel}>{chaptersLabel}</TextBase>
          <View style={styles.selectIcon}><IArrowFullSVG /></View>
        </View>
      </TouchableView>

      <View style={styles.separator} />

      <TouchableView style={styles.item} onPress={_onPressRating}>
        <TextBase style={styles.label}>Cho điểm</TextBase>
        <View style={styles.selectView}>
          <TextBase style={styles.selectLabel}>{ratingLabel}</TextBase>
          <View style={styles.selectIcon}><IArrowFullSVG /></View>
        </View>
      </TouchableView>

      <View style={styles.separator} />

      <TouchableView style={styles.item} onPress={_onPressStatus}>
        <TextBase style={styles.label}>Trạng thái</TextBase>
        <View style={styles.selectView}>
          <TextBase style={styles.selectLabel}>{statusLabel}</TextBase>
          <View style={styles.selectIcon}><IArrowFullSVG /></View>
        </View>
      </TouchableView>

      <View style={styles.separator} />

      <TouchableView style={styles.item} onPress={_onPressCategory}>
        <TextBase style={styles.label}>Thể loại</TextBase>
        <View style={styles.selectView}>
          <TextBase style={styles.selectLabel}>{categoryLabel}</TextBase>
          <View style={styles.selectIcon}><IArrowFullSVG /></View>
        </View>
      </TouchableView>

      <View>
        <TouchableView style={styles.bottom} onPress={_onPressRest}>
          <TextBase style={styles.bottomText}>Đặt lại bộ lọc</TextBase>
        </TouchableView>
      </View>
    </View>
  )

};
