import React from 'react';
import { View, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { ITabDashboardSVG, ITabDashboardActiveSVG, ITabLibrarySVG, ITabLibraryActiveSVG, ITabSavedStoriesSVG, ITabSavedStoriesActiveSVG, ITabUserProfileSVG, ITabUserProfileActiveSVG } from '@/assets/svg';

import styles from './styles';

type TTabItem = { label: string, page: string, blur: React.FC<SvgProps>, focus: React.FC<SvgProps> };

const TabNavigator: React.FC<BottomTabBarProps> = ({ ...props }) => {

  const TAB_ITEMS: TTabItem[] = [
    { label: 'Trang chủ', page: 'Dashboard', blur: ITabDashboardSVG, focus: ITabDashboardActiveSVG },
    { label: 'Thư viện', page: 'Library', blur: ITabLibrarySVG, focus: ITabLibraryActiveSVG },
    { label: 'Truyện đã lưu', page: 'SavedStories', blur: ITabSavedStoriesSVG, focus: ITabSavedStoriesActiveSVG },
    { label: 'Tài khoản', page: 'UserProfile', blur: ITabUserProfileSVG, focus: ITabUserProfileActiveSVG }
  ];

  const _onPress = () => { }

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
      <View style={styles.view}>{TAB_ITEMS?.map?.(_renderItem)}</View>
    </View>
  )

}

export default TabNavigator;
