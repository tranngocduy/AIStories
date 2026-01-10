import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import { TOptionFilter } from '@/models/types';
import { FILTER_OPTION_SORT } from '@/constants';

import TextBase from '@/component/TextBase';
import OptionFilter from '@/component/OptionFilter';
import TouchableView from '@/component/TouchableView';

import styles from './styles';
import { PageFilterProps } from '../types';

export const PageSort: React.FC<PageFilterProps> = ({ query, onChangeFilter }) => {

  const items = [...FILTER_OPTION_SORT];

  const [selected, setSelected] = useState<TOptionFilter>(query || items[0]);

  const _onSelect = (value: TOptionFilter) => setSelected(value);

  const _onPressApply = () => onChangeFilter({ type: 'sort', ...selected });

  const _renderItem = (option: TOptionFilter, index: number) => {
    const isActive = (option.value === selected.value);

    return <OptionFilter option={option} isActive={isActive} onSelect={_onSelect} key={index} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.view}><ScrollView contentContainerStyle={styles.scroll}>{items.map(_renderItem)}</ScrollView></View>

      <View style={styles.bottom}><TouchableView hitSlop={12} onPress={_onPressApply}><TextBase style={styles.bottomText}>Áp dụng điều kiện lọc</TextBase></TouchableView></View>
    </View>
  )

}
