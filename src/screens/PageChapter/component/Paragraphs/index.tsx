import React, { useState, useRef } from 'react';
import { View, ScrollView, TextLayoutEvent, TextLayoutLine } from 'react-native';

import { decimal } from '@/utils/decimal';
import { runAfterInteractions } from '@/utils/app';
import { useThemePage } from '@/useHooks/useThemePage';

import TextBase from '@/component/TextBase';
import TouchableView from '@/component/TouchableView';

import styles from './styles';

type ParagraphsProps = { content: string };

const Paragraphs: React.FC<ParagraphsProps> = ({ content }) => {

  const { fontSize, lineHeight, color } = useThemePage();

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
        <View style={styles.pageSub} pointerEvents='none'><TextBase allowFontScaling={false} onTextLayout={_onTextLayout}><TextBase style={textStyle}>{content}</TextBase></TextBase></View>
        <ScrollView contentContainerStyle={styles.scroll} horizontal={true} pagingEnabled={true} bounces={false} showsHorizontalScrollIndicator={false} scrollEventThrottle={16} ref={scrollViewRef}>{items?.map?.(_renderItem)}</ScrollView>
      </View>
    </View>
  )

}

export default Paragraphs;
