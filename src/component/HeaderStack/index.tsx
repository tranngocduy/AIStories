import React, { memo } from 'react';
import { View } from 'react-native';

import { IBackStackSVG } from '@/assets/svg';
import { useStackNavigation } from '@/useHooks/useNavigation';

import TextBase from '@/component/TextBase';
import TouchableView from '@/component/TouchableView';

import styles from './styles';

type HeaderStackProps = { label?: string };

const HeaderStack: React.FC<HeaderStackProps> = ({ label }) => {

  const { goBack } = useStackNavigation();

  const _onPressGoBack = () => goBack?.();

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableView hitSlop={12} style={styles.back} onPress={_onPressGoBack}><IBackStackSVG fill='#000000' /></TouchableView>
        <View style={styles.labelView}><TextBase style={styles.label} numberOfLines={1}>{label}</TextBase></View>
      </View>
    </View>
  )

};

export default memo(HeaderStack, () => true);
