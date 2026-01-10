import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import { FILTER_OPTION_CATEGORY } from '@/constants';
import { TCategory, TOptionFilter } from '@/models/types';
import { useGetAllCategory } from '@/useQuery/useGetAllCategory';

import TextBase from '@/component/TextBase';
import OptionFilter from '@/component/OptionFilter';
import TouchableView from '@/component/TouchableView';
import ProgressSkeleton from '@/component/ProgressSkeleton';

import styles from './styles';
import { PageFilterProps } from '../types';

export const PageCategory: React.FC<PageFilterProps> = ({ query, onChangeFilter }) => {

  const queryGetAllCategory = useGetAllCategory();

  const data = queryGetAllCategory?.data?.map?.((element: TCategory) => ({ label: element?.name, value: element?.id }));

  const items = [{ ...FILTER_OPTION_CATEGORY[0] }, ...(data || new Array(10).fill(''))];

  const [selected, setSelected] = useState<TOptionFilter>(query || items[0]);

  const _onSelect = (value: TOptionFilter) => setSelected(value);

  const _onPressApply = () => onChangeFilter({ type: 'category', ...selected });

  const _renderItem = (option: TOptionFilter, index: number) => {
    const isActive = (option.value === selected.value);

    if (!option) return <ProgressSkeleton width={60} height={37} radius={100} key={index} />;

    return <OptionFilter option={option} isActive={isActive} onSelect={_onSelect} key={index} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.view}><ScrollView contentContainerStyle={styles.scroll}>{items.map(_renderItem)}</ScrollView></View>

      <View style={styles.bottom}><TouchableView hitSlop={12} onPress={_onPressApply}><TextBase style={styles.bottomText}>Áp dụng điều kiện lọc</TextBase></TouchableView></View>
    </View>
  )

}
