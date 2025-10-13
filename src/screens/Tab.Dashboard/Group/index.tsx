import React from 'react';
import { View } from 'react-native';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';
import { TGroupProps } from '../types';

export const Group: React.FC<TGroupProps> = ({ label, data }) => {

  const _onPressSeeAll = () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <TextBase style={styles.label}>{label}</TextBase>
        {!!data?.[0] && <TouchableView hitSlop={12} onPress={_onPressSeeAll}><TextBase style={styles.seeMore}>Xem tất cả</TextBase></TouchableView>}
      </View>

    </View>
  )

}
