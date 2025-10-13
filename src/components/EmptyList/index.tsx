import React, { memo } from 'react';
import { View } from 'react-native';

import { IEmptySVG } from '@/assets/svg';

import { TextBase } from '@/components/TextBase';

import styles from './styles';

export const EmptyList: React.FC<{}> = memo(() => {

  return (
    <View style={styles.container}>
      <IEmptySVG />
      <TextBase style={styles.text}>Danh sách trống</TextBase>
    </View>
  )

}, () => true);
