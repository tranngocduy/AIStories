import React from 'react';
import { View } from 'react-native';

import { IBackStackSVG } from '@/assets/svg';
import { useThemePage } from '@/useHooks/useThemePage';
import { useStackNavigation } from '@/useHooks/useNavigation';

import TextBase from '@/component/TextBase';
import TouchableView from '@/component/TouchableView';

import styles from './styles';

type PageHeaderProps = { title: string }

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {

  const { goBack } = useStackNavigation();

  const { color, background } = useThemePage();

  const _onPressBack = () => goBack?.();

  return (
    <View style={styles.container}>
      <View style={[styles.view, { backgroundColor: background }]}>
        <TouchableView hitSlop={12} onPress={_onPressBack}><IBackStackSVG width={16} height={16} fill={color} /></TouchableView>
        <TextBase style={[styles.title, { color }]}>{title}</TextBase>
      </View>
    </View>
  )

}

export default PageHeader;
