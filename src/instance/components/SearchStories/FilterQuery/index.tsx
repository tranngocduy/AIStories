import React from 'react';
import { View } from 'react-native';

import { IArrowFullSVG } from '@/assets/svg';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';
import { TFilterQueryProps } from '../types';

export const FilterQuery: React.FC<TFilterQueryProps> = ({ onPressFilter }) => {

  const _onPressAuthor = () => onPressFilter?.('author');

  return (
    <View>
      <View>
        <TouchableView style={styles.item} onPress={_onPressAuthor}>
          <TextBase style={styles.label}>Tác giả</TextBase>
          <View style={styles.selectView}>
            <TextBase style={styles.selectLabel} numberOfLines={1}>Tất cả</TextBase>
            <View style={styles.selectIcon}><IArrowFullSVG /></View>
          </View>
        </TouchableView>
        <View style={styles.separator} />
      </View>

      <View>
        <TouchableView style={styles.item}>
          <TextBase style={styles.label}>Sắp xếp theo</TextBase>
          <View style={styles.selectView}>
            <TextBase style={styles.selectLabel}></TextBase>
            <View style={styles.selectIcon}><IArrowFullSVG /></View>
          </View>
        </TouchableView>
        <View style={styles.separator} />
      </View>

      <View>
        <TouchableView style={styles.item}>
          <TextBase style={styles.label}>Lượt vote</TextBase>
          <View style={styles.selectView}>
            <TextBase style={styles.selectLabel}></TextBase>
            <View style={styles.selectIcon}><IArrowFullSVG /></View>
          </View>
        </TouchableView>
        <View style={styles.separator} />
      </View>

      <View>
        <TouchableView style={styles.item}>
          <TextBase style={styles.label}>Số chương</TextBase>
          <View style={styles.selectView}>
            <TextBase style={styles.selectLabel}></TextBase>
            <View style={styles.selectIcon}><IArrowFullSVG /></View>
          </View>
        </TouchableView>
        <View style={styles.separator} />
      </View>

      <View>
        <TouchableView style={styles.item}>
          <TextBase style={styles.label}>Cho điểm</TextBase>
          <View style={styles.selectView}>
            <TextBase style={styles.selectLabel}></TextBase>
            <View style={styles.selectIcon}><IArrowFullSVG /></View>
          </View>
        </TouchableView>
        <View style={styles.separator} />
      </View>

      <View>
        <TouchableView style={styles.item}>
          <TextBase style={styles.label}>Trạng thái</TextBase>
          <View style={styles.selectView}>
            <TextBase style={styles.selectLabel}></TextBase>
            <View style={styles.selectIcon}><IArrowFullSVG /></View>
          </View>
        </TouchableView>
        <View style={styles.separator} />
      </View>

      <View>
        <TouchableView style={styles.item}>
          <TextBase style={styles.label}>Thể loại</TextBase>
          <View style={styles.selectView}>
            <TextBase style={styles.selectLabel}></TextBase>
            <View style={styles.selectIcon}><IArrowFullSVG /></View>
          </View>
        </TouchableView>
        <View style={styles.separator} />
      </View>

      <View>
        <TouchableView style={styles.reset}>
          <TextBase style={styles.resetText}>Đặt lại bộ lọc</TextBase>
        </TouchableView>
      </View>
    </View>
  )

}
