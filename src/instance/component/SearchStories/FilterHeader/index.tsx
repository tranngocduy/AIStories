import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View } from 'react-native';
import Animated, { FadeInRight, FadeInUp, FadeOutRight, FadeOutUp } from 'react-native-reanimated';

import { IBackStackSVG, ICloseModalSVG } from '@/assets/svg';

import TextBase from '@/component/TextBase';
import TouchableView from '@/component/TouchableView';

import styles from './styles';
import { FilterHeaderProps, FilterHeaderRefs, TypeFilterState } from '../types';

export const FilterHeader = forwardRef<FilterHeaderRefs, FilterHeaderProps>(({ onGenerateQuery, onBack, onClose }, ref) => {

  const [typeFilter, setTypeFilter] = useState<TypeFilterState>('');

  const _onBack = () => onBack();

  const _onClose = () => onClose();

  const _onGenerateQuery = () => onGenerateQuery();

  const _setTypeFilter = (type: TypeFilterState) => setTypeFilter(type);

  useImperativeHandle(ref, () => ({ setTypeFilter: _setTypeFilter }));

  let label = 'Bộ lọc';

  if (typeFilter === 'author') label = 'Tác giả';

  if (typeFilter === 'sort') label = 'Sắp xếp';

  if (typeFilter === 'votes') label = 'Lượt vote';

  if (typeFilter === 'chapters') label = 'Số chương';

  if (typeFilter === 'rating') label = 'Cho điểm';

  if (typeFilter === 'status') label = 'Trạng thái';

  if (typeFilter === 'category') label = 'Thể loại';

  const closeIcon = <ICloseModalSVG width={16} height={16} />;

  const backIcon = <IBackStackSVG width={16} height={16} fill='#000000' />;

  return (
    <View>
      <View style={styles.view}>
        <Animated.View entering={FadeInRight} exiting={FadeOutRight} key={label}><TextBase style={styles.title}>{label}</TextBase></Animated.View>

        {!!typeFilter &&
          <Animated.View style={styles.button} entering={FadeInUp} exiting={FadeOutUp}><TouchableView hitSlop={16} onPress={_onBack}>{backIcon}</TouchableView></Animated.View>
        }

        {!typeFilter &&
          <Animated.View style={styles.button} entering={FadeInUp} exiting={FadeOutUp}><TouchableView hitSlop={16} onPress={_onClose}>{closeIcon}</TouchableView></Animated.View>
        }

        {!typeFilter &&
          <Animated.View style={styles.apply} entering={FadeInUp} exiting={FadeOutUp}>
            <TouchableView hitSlop={16} onPress={_onGenerateQuery}><TextBase style={styles.labelApply}>Áp dụng</TextBase></TouchableView>
          </Animated.View>
        }
      </View>

      <View style={styles.separator} />
    </View>
  )

});
