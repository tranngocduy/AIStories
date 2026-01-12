import React from 'react';
import { View, ScrollView } from 'react-native';

import { useThemePage } from '@/useHooks/useThemePage';
import { ICheckSVG, IPlusCircleSVG, ISubCircleSVG } from '@/assets/svg';
import { CHAPTER_COLORS, CHAPTER_FONT_SIZE, CHAPTER_LINE_HEIGHT } from '@/constants';
import { updateChapterSettings, mapLabelFontSize, mapLabelLineHeight } from '@/utils/service';

import TextBase from '@/component/TextBase';
import HeaderStack from '@/component/HeaderStack';
import TouchableView from '@/component/TouchableView';

import styles from './styles';

type MapColor = { text: string, background: string };

const PageSetting: React.FC<{}> = () => {

  const { fontSize, lineHeight, background } = useThemePage();

  const labelFontSize = mapLabelFontSize(fontSize);

  const labelLineHeight = mapLabelLineHeight(lineHeight);

  const _onPressBackground = (mapColors: MapColor) => updateChapterSettings({ mapColors });

  const _onPressPlusFontSize = () => {
    const fontSizeIndex = CHAPTER_FONT_SIZE.findIndex(element => (element === fontSize));
    if ((fontSizeIndex < (CHAPTER_FONT_SIZE.length - 1))) updateChapterSettings({ fontSize: CHAPTER_FONT_SIZE[fontSizeIndex + 1] });
  }

  const _onPressSubFontSize = () => {
    const fontSizeIndex = CHAPTER_FONT_SIZE.findIndex(element => (element === fontSize));
    if ((fontSizeIndex > 0)) updateChapterSettings({ fontSize: CHAPTER_FONT_SIZE[fontSizeIndex - 1] });
  }

  const _onPressPlusLineHeight = () => {
    const lineHeightIndex = CHAPTER_LINE_HEIGHT.findIndex(element => (element === lineHeight));
    if ((lineHeightIndex < (CHAPTER_LINE_HEIGHT.length - 1))) updateChapterSettings({ lineHeight: CHAPTER_LINE_HEIGHT[lineHeightIndex + 1] });
  }

  const _onPressSubLineHeight = () => {
    const lineHeightIndex = CHAPTER_LINE_HEIGHT.findIndex(element => (element === lineHeight));
    if ((lineHeightIndex > 0)) updateChapterSettings({ lineHeight: CHAPTER_LINE_HEIGHT[lineHeightIndex - 1] });
  }

  const _renderColors = (item: MapColor, index: number) => {
    const backgroundColor = item.background;
    const isActive = (background === backgroundColor);
    const borderWidth = (backgroundColor === '#FFFFFF') ? 1 : 0;
    const fillColor = ((index === 0) || (index === 1)) ? '#000000' : '#FFFFFF';

    return (
      <TouchableView hitSlop={12} activeOpacity={1} onPress={_onPressBackground.bind(this, item)} key={index}>
        <View style={[styles.backgroundItem, { borderWidth, backgroundColor }]} />
        {!!isActive && <View style={styles.backgroundActive}><ICheckSVG width={12} height={12} fill={fillColor} /></View>}
      </TouchableView>
    )
  }

  return (
    <View style={styles.container}>
      <HeaderStack label='Cài đặt' />
      <View style={styles.view}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <TextBase style={styles.title}>GIAO DIỆN ĐỌC TRUYỆN</TextBase>

          <View style={styles.itemView}>
            <TextBase style={styles.label}>Màu nền</TextBase>
            <View style={styles.background}>{CHAPTER_COLORS?.map?.(_renderColors)}</View>
          </View>

          <View style={styles.separator} />

          <View style={styles.itemView}>
            <TextBase style={styles.label}>Cỡ chữ</TextBase>
            <View style={styles.setting}>
              <TouchableView hitSlop={12} onPress={_onPressSubFontSize}><ISubCircleSVG /></TouchableView>
              <TextBase style={styles.settingLabel}>{labelFontSize}</TextBase>
              <TouchableView hitSlop={12} onPress={_onPressPlusFontSize}><IPlusCircleSVG /></TouchableView>
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.itemView}>
            <TextBase style={styles.label}>Giãn dòng</TextBase>
            <View style={styles.setting}>
              <TouchableView hitSlop={12} onPress={_onPressSubLineHeight}><ISubCircleSVG /></TouchableView>
              <TextBase style={styles.settingLabel}>{labelLineHeight}</TextBase>
              <TouchableView hitSlop={12} onPress={_onPressPlusLineHeight}><IPlusCircleSVG /></TouchableView>
            </View>
          </View>

        </ScrollView>
      </View>
    </View>
  )

}

export default PageSetting;
