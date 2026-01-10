import React, { memo } from 'react';
import { View } from 'react-native';

import { IEmptySVG } from '@/assets/svg';

import TextBase from '@/component/TextBase';

import styles from './styles';

const EmptyList: React.FC<{}> = () => {

  return (
    <View style={styles.container}>
      <IEmptySVG />
      <TextBase style={styles.text}>Danh sách trống</TextBase>
    </View>
  )

};

export default memo(EmptyList, () => true);
