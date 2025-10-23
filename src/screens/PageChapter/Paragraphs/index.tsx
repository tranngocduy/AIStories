import React, { useState, useCallback, useRef } from 'react';
import { View, ScrollView, TextLayoutEvent } from 'react-native';

import { useIStore } from '@/store';
import { decimal } from '@/utils/decimal';
import { CHAPTER_FONT_SIZE, CHAPTER_LINE_HEIGHT, CHAPTER_COLORS } from '@/constants';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';

import styles from './styles';

type TParagraphsProps = { title: string, content: string };

export const Paragraphs: React.FC<TParagraphsProps> = ({ content }) => {
  const _color = CHAPTER_COLORS[0];
  const _fontSize = CHAPTER_FONT_SIZE[3];
  const _lineHeight = CHAPTER_LINE_HEIGHT[2];

  const fontSize = (useIStore(state => state.storeGlobal?.chapterSettings?.fontSize) || _fontSize);
  const lineHeight = (useIStore(state => state.storeGlobal?.chapterSettings?.lineHeight) || _lineHeight);
  const color = (useIStore(state => state.storeGlobal?.chapterSettings?.mapColors?.text) || _color.text);
  const textStyle = ({ ...styles.content, fontSize, lineHeight: +decimal(fontSize).mul(lineHeight), color });

  const [items, setPages] = useState([]);

  const viewRef = useRef<View>(null);

  const scrollViewRef = useRef<ScrollView>(null);

  const _onPressPage = () => {

  }

  const _loadPageHeight = async () => {
 
  }

  const _onTextLayout = async (event: TextLayoutEvent) => {
   

  }

  const _renderItem = useCallback((item: string, index: number) => {
    <TouchableView style={styles.pageMain} activeOpacity={1} onPress={_onPressPage} key={index}>
      <TextBase allowFontScaling={false}><TextBase style={textStyle}>{item}</TextBase></TextBase>
    </TouchableView>
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.view} ref={viewRef}>
        <View style={styles.pageSub} pointerEvents='none'><TextBase allowFontScaling={false} onTextLayout={_onTextLayout}><TextBase style={textStyle}>{content}</TextBase></TextBase></View>
        <ScrollView contentContainerStyle={styles.scroll} horizontal={true} pagingEnabled={true} bounces={false} showsHorizontalScrollIndicator={false} scrollEventThrottle={16} ref={scrollViewRef}>{items?.map?.(_renderItem)}</ScrollView>
      </View>
    </View>
  )

}
