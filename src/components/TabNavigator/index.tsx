import React from 'react';
import { View, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ITabDashboardSVG, ITabDashboardActiveSVG, ITabUserProfileSVG, ITabUserProfileActiveSVG } from '@/assets/svg';

import styles from './styles';

type TTabItem = { label: string, page: string, blur: React.FC<SvgProps>, focus: React.FC<SvgProps> };

const TabNavigator: React.FC<BottomTabBarProps> = ({ ...props }) => {

  const items: TTabItem[] = [
    { label: 'Trang chủ', page: 'Dashboard', blur: ITabDashboardSVG, focus: ITabDashboardActiveSVG },
    { label: 'Tài khoản', page: 'Dashboard', blur: ITabUserProfileSVG, focus: ITabUserProfileActiveSVG }
  ];

  const { bottom } = useSafeAreaInsets()

  const _onPress = () => {

  }

  const _renderItem = (item: TTabItem, index: number) => {
    return (
      <View style={styles.itemView} key={index}>
        <View style={styles.item} hitSlop={16}>
          <item.blur /><Text style={styles.label}>{item?.label}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.view}>{items?.map?.(_renderItem)}</View>
      <View style={{ height: bottom, backgroundColor: '#FFFFFF' }} />
    </View>
  )

}

export default TabNavigator;
