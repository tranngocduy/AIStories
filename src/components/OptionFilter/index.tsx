import React from 'react';
import { View } from 'react-native';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';

type TOption = { label: string, value: any };

type TOptionFilterProps = { option: TOption, isActive: boolean, onSelect: Function };

export const OptionFilter: React.FC<TOptionFilterProps> = ({ option, isActive, onSelect }) => {

  const _onSelect = () => onSelect(option);

  return (
    <View style={styles.container}>
      {!!isActive && <View style={styles.viewBG} />}
      <TouchableView style={styles.view} activeOpacity={1} onPress={_onSelect}>
        <TextBase style={[styles.label, !!isActive && styles.active]}>{option?.label}</TextBase>
      </TouchableView>
    </View>
  )

}
