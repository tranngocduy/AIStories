import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View } from 'react-native';
import Animated, { FadeInRight, FadeInUp, FadeOutRight, FadeOutUp } from 'react-native-reanimated';

import { IBackStackSVG, ICloseModalSVG } from '@/assets/svg';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';
import { TTypeFilterProps, TTypeFilterRefs, TTypeFilterState } from '../types';

export const FilterHeader = forwardRef<TTypeFilterRefs, TTypeFilterProps>(({ onGenerateQuery, onBack, onClose }, ref) => {

  const [typeFilter, setTypeFilter] = useState<TTypeFilterState>('');

  const _onBack = () => onBack();

  const _onClose = () => onClose();

  const _onGenerateQuery = () => onGenerateQuery();

  const _setTypeFilter = (type: TTypeFilterState) => setTypeFilter(type);

  useImperativeHandle(ref, () => ({ setTypeFilter: _setTypeFilter }));

  let label = 'Bộ lọc';

  if (typeFilter === 'author') label = 'Tác giả';

  const backIcon = <IBackStackSVG width={16} height={16} />;

  const closeIcon = <ICloseModalSVG width={16} height={16} />;

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
