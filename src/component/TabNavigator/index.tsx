import React, { useEffect, useMemo } from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Animated, { withTiming, useSharedValue, useAnimatedStyle, interpolate, Easing } from 'react-native-reanimated';

import { tabDashboardIMG, tabLibraryIMG, tabSavedStoryIMG, tabUserProfileIMG } from '@/assets/image';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import TextBase from '@/component/TextBase';
import TouchableView from '@/component/TouchableView';

import styles from './styles';

const TabNavigator: React.FC<BottomTabBarProps> = ({ state, navigation }) => {

  const sharedValue = useSharedValue(0);

  const _onPressDashboard = () => navigation.navigate('Dashboard');

  const _onPressLibrary = () => navigation.navigate('Library');

  const _onPressSavedStory = () => navigation.navigate('SavedStory');

  const _onPressUserProfile = () => navigation.navigate('UserProfile');

  useEffect(() => { sharedValue.value = withTiming(state.index, { duration: 150, easing: Easing.linear }) }, [state.index])

  const viewStyle = useAnimatedStyle(() => {
    const TAB_SIZE = styles.tabSize.width;

    const inputValue = [0, 1, 2, 3];
    const outputValue = inputValue.map(i => ((i * TAB_SIZE - (i * 2))));
    const translateX = interpolate(sharedValue.value, inputValue, outputValue);

    return { transform: [{ translateX }] };
  }, []);

  const _renderItem = (label: string, source: ImageSourcePropType, isActive: boolean, onPress: () => void) => {
    const tintColor = !!isActive ? '#417584' : '#A3A3A3';

    return (
      <TouchableView style={styles.item} activeOpacity={1} onPress={onPress}>
        <Image source={source} tintColor={tintColor} style={styles.icon} resizeMode='stretch' />
        <View><TextBase style={[styles.label, { color: tintColor }]}>{label}</TextBase></View>
      </TouchableView>
    )
  }

  const memoDashboard = useMemo(() => _renderItem('Trang chủ', tabDashboardIMG, (state.index === 0), _onPressDashboard), [(state.index === 0)]);

  const memoLibrary = useMemo(() => _renderItem('Thư viện', tabLibraryIMG, (state.index === 1), _onPressLibrary), [(state.index === 1)]);

  const memoSavedStory = useMemo(() => _renderItem('Truyện đã lưu', tabSavedStoryIMG, (state.index === 2), _onPressSavedStory), [(state.index === 2)]);

  const memoUserProfile = useMemo(() => _renderItem('Tài khoản', tabUserProfileIMG, (state.index === 3), _onPressUserProfile), [(state.index === 3)]);

  const memoSelectedItem = useMemo(() => <Animated.View style={[styles.selectedItem, viewStyle]} />, []);

  const memoLinearGradient = useMemo(() => <LinearGradient style={styles.linearGradient} colors={['rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 1)']} />, []);

  return (
    <View style={styles.container}>

      <View style={styles.view}>
        <View style={styles.linear} pointerEvents='none'>{memoLinearGradient}</View>

        <View style={styles.tabView}>
          <View style={styles.selectedView} pointerEvents='none'>{memoSelectedItem}</View>

          {memoDashboard}

          {memoLibrary}

          {memoSavedStory}

          {memoUserProfile}
        </View>
      </View>
    </View>
  )

}

export default TabNavigator;
