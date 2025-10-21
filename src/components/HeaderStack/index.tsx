import React, { memo } from 'react';
import { View } from 'react-native';

import { IBackStackSVG } from '@/assets/svg';
import { useStackNavigation } from '@/useHooks/useNavigation';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';

type THeaderStack = { label?: string };

export const HeaderStack: React.FC<THeaderStack> = memo(({ label }) => {

  const { goBack } = useStackNavigation();

  const _onPressGoBack = () => goBack?.();

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableView hitSlop={12} style={styles.back} onPress={_onPressGoBack}><IBackStackSVG /></TouchableView>
        <View style={styles.labelView}><TextBase style={styles.label} numberOfLines={1}>{label}</TextBase></View>
      </View>
    </View>
  )

}, () => true);
