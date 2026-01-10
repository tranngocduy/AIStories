import React from 'react';
import { View } from 'react-native';

import TextBase from '@/component/TextBase';
import TouchableView from '@/component/TouchableView';

import styles from './styles';

type Option = { label: string, value: any };

type OptionFilterProps = { option: Option, isActive: boolean, onSelect: Function };

const OptionFilter: React.FC<OptionFilterProps> = ({ option, isActive, onSelect }) => {

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

export default OptionFilter;
