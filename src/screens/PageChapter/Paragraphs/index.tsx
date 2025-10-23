import React, { useState, useRef } from 'react';
import { View, ScrollView, TextLayoutEvent, TextLayoutLine } from 'react-native';

import { useIStore } from '@/store';
import { decimal } from '@/utils/decimal';
import { runAfterInteractions } from '@/utils/app';
import { CHAPTER_FONT_SIZE, CHAPTER_LINE_HEIGHT, CHAPTER_COLORS } from '@/constants';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';

import styles from './styles';

type TParagraphsProps = { content: string };

export const Paragraphs: React.FC<TParagraphsProps> = ({ content }) => {
  const _color = CHAPTER_COLORS[0];
  const _fontSize = CHAPTER_FONT_SIZE[3];
  const _lineHeight = CHAPTER_LINE_HEIGHT[2];

  const fontSize = (useIStore(state => state.storeGlobal?.chapterSettings?.fontSize) || _fontSize);
  const lineHeight = (useIStore(state => state.storeGlobal?.chapterSettings?.lineHeight) || _lineHeight);
  const color = (useIStore(state => state.storeGlobal?.chapterSettings?.mapColors?.text) || _color.text);
  const textStyle = ({ ...styles.content, fontSize, lineHeight: +decimal(fontSize).mul(lineHeight), color });

  const [items, setPages] = useState<string[]>([]);

  const viewRef = useRef<View>(null);

  const scrollViewRef = useRef<ScrollView>(null);

  const _onPressPage = () => {

  }

  const _loadPageHeight = async () => {
    const ref = viewRef.current;

    const pageInfo = await new Promise<{ left: number, top: number, width: number, height: number }>((resolve) => {
      ref?.measureInWindow?.((left: number, top: number, width: number, height: number) => resolve({ left, top, width, height }));
    });

    return pageInfo.height;
  }

  const _onTextLayout = async (event: TextLayoutEvent) => {
    const lines = event?.nativeEvent?.lines;

    const pageHeight = await _loadPageHeight();

    const LIMIT_HEIGHT = (pageHeight - (((fontSize * lineHeight) * 1) + 80));

    const pages: TextLayoutLine[][] = [];

    let pageIndex = 0;

    for (const line of lines) {
      if (!pages?.[pageIndex]) pages[pageIndex] = [];

      const currentHeight = pages[pageIndex]?.reduce((a, b) => (a + b?.height), 0) + line?.height;

      pages[pageIndex].push(line);

      if (currentHeight >= LIMIT_HEIGHT) pageIndex = pageIndex + 1;
    }

    setPages([...pages?.map?.(lines => lines?.map?.(line => line.text)?.join?.(''))]);

    runAfterInteractions(() => scrollViewRef.current?.scrollTo?.({ x: 0, y: 0, animated: false }), 0);
  }

  const _renderItem = (item: string, index: number) => {
    return (
      <TouchableView style={styles.pageMain} activeOpacity={1} onPress={_onPressPage} key={index}>
        <TextBase allowFontScaling={false}><TextBase style={textStyle}>{item}</TextBase></TextBase>
      </TouchableView>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.view} ref={viewRef}>
        <View style={styles.pageSub} pointerEvents='none'><TextBase allowFontScaling={false} onTextLayout={_onTextLayout}><TextBase>{'\n'}</TextBase><TextBase style={textStyle}>{content}</TextBase></TextBase></View>
        <ScrollView contentContainerStyle={styles.scroll} horizontal={true} pagingEnabled={true} bounces={false} showsHorizontalScrollIndicator={false} scrollEventThrottle={16} ref={scrollViewRef}>{items?.map?.(_renderItem)}</ScrollView>
      </View>
    </View>
  )

}
