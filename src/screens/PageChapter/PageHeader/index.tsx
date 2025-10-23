import React from 'react';
import { View } from 'react-native';

import { IBackStackSVG } from '@/assets/svg';
import { useThemePage } from '@/useHooks/useThemePage';
import { useStackNavigation } from '@/useHooks/useNavigation';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';

type TPageHeaderProps = { title: string }

export const PageHeader: React.FC<TPageHeaderProps> = ({ title }) => {

  const { goBack } = useStackNavigation();

  const { color } = useThemePage();

  const _onPressBack = () => goBack?.();

  return (
    <View>
      <View style={styles.statusBar} />
      <View style={styles.view}>
        <TouchableView hitSlop={12} onPress={_onPressBack}><IBackStackSVG width={16} height={16} fill={color} /></TouchableView>
        <TextBase style={[styles.title, { color }]}>{title}</TextBase>
      </View>
    </View>
  )

}
