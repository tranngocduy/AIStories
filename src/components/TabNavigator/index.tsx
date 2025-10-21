import React from 'react';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { useIStore } from '@/store/store';
import { ITabDashboardSVG, ITabDashboardActiveSVG, ITabLibrarySVG, ITabLibraryActiveSVG, ITabSavedStorySVG, ITabSavedStoryActiveSVG, ITabUserProfileSVG, ITabUserProfileActiveSVG } from '@/assets/svg';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';

type TTabItem = { label: string, page: string, blur: React.FC<SvgProps>, focus: React.FC<SvgProps> };

export const TabNavigator: React.FC<BottomTabBarProps> = ({ navigation, state }) => {

  const TAB_ITEMS: TTabItem[] = [
    { label: 'Trang chủ', page: 'Dashboard', blur: ITabDashboardSVG, focus: ITabDashboardActiveSVG },
    { label: 'Thư viện', page: 'Library', blur: ITabLibrarySVG, focus: ITabLibraryActiveSVG },
    { label: 'Truyện đã lưu', page: 'SavedStory', blur: ITabSavedStorySVG, focus: ITabSavedStoryActiveSVG },
    { label: 'Tài khoản', page: 'UserProfile', blur: ITabUserProfileSVG, focus: ITabUserProfileActiveSVG }
  ];

  const _onPress = (item: TTabItem) => {
    const isSigned = useIStore.getState().userProfile?.is_signed;

    if (['Dashboard', 'Library']?.includes?.(item?.page) || !!isSigned) navigation?.navigate?.(item.page);

    if (['SavedStory', 'UserProfile']?.includes?.(item?.page) && !isSigned) navigation?.navigate?.('UserSignIn');
  }

  const _renderItem = (item: TTabItem, index: number) => {
    const activeIndex = state.index;
    const isActive = (activeIndex === index);
    const Icon = !isActive ? item.blur : item.focus;
    const labelStyle = [styles.label, !!isActive && styles.active];

    return (
      <View style={styles.itemView} key={index}>
        <TouchableView style={styles.item} hitSlop={16} onPress={_onPress.bind(this, item)}>
          <Icon /><TextBase style={labelStyle}>{item?.label}</TextBase>
        </TouchableView>
      </View>
    )
  }

  return <View style={styles.container}><View style={styles.view}>{TAB_ITEMS?.map?.(_renderItem)}</View></View>;

}
