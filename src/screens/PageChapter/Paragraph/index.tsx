import React, { useState, useRef } from 'react';
import { View, ScrollView, TextLayoutEvent, TextLayoutLine } from 'react-native';

import { runAfterInteractions } from '@/utils/app';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';

type TParagraphProps = { title: string, content: string, onPressPage: Function };

export const Paragraph: React.FC<TParagraphProps> = ({ title, content, onPressPage }) => {
  const fontSize = 18;
  const lineHeight = 2.2;
  const color = '#000000';
  const textStyle = { ...styles.content, fontSize, lineHeight: (fontSize * lineHeight), color };

  const [items, setPages] = useState<string[]>([]);

  const isShowPageRef = useRef(true);

  const viewRef = useRef<View>(null);

  const scrollViewRef = useRef<ScrollView>(null);

  const _onPressPage = () => {
    isShowPageRef.current = !isShowPageRef.current;
    onPressPage?.(!isShowPageRef.current ? 0 : 1);
  }

  const _onScroll = () => {
    if (!isShowPageRef.current) return;

    onPressPage?.(0);
    isShowPageRef.current = false;
  }

  const _loadPageHeight = async () => {
    const pageInfo: any = await new Promise(resolve => viewRef?.current?.measureInWindow?.((left, top, width, height) => { resolve({ left, top, width, height }) }));
    return pageInfo?.height;
  }

  const _onTextLayout = async (event: TextLayoutEvent) => {
    const lines = event?.nativeEvent?.lines ?? [];
    const pageHeight = await _loadPageHeight();
    const LIMIT_HEIGHT = (pageHeight - (((fontSize * lineHeight) * 1) + 80));

    const pages: TextLayoutLine[][] = [];

    let pageIndex = 0;

    for (const line of lines) {
      if (!pages?.[pageIndex]) pages[pageIndex] = [];

      const currentHeight = (pages[pageIndex]?.reduce((a: number, b: TextLayoutLine) => (a + b?.height), 0) ?? 0) + (line?.height ?? 0);

      pages[pageIndex].push(line);

      if (currentHeight >= LIMIT_HEIGHT) pageIndex = pageIndex + 1;
    }

    setPages([...pages?.map?.(lines => lines?.map?.(line => line.text)?.join?.(''))]);

    runAfterInteractions(() => scrollViewRef.current?.scrollTo?.({ x: 0, y: 0, animated: false }), 0);
  }

  const _renderItem = (item: string, index: number) => {
    const paragraph = !!index ? item : item?.replace?.(title, '');

    return (
      <TouchableView style={styles.pageMain} activeOpacity={1} onPress={_onPressPage} key={index}>
        <TextBase allowFontScaling={false}>{!index && <TextBase style={[styles.title, { color }]}>{title}</TextBase>}<TextBase style={textStyle}>{paragraph}</TextBase></TextBase>
      </TouchableView>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.view} ref={viewRef}>
        <View style={styles.pageSub} pointerEvents='none'><TextBase allowFontScaling={false} onTextLayout={_onTextLayout}><TextBase style={styles.title}>{title}</TextBase><TextBase>{'\n\n'}</TextBase><TextBase style={textStyle}>{content}</TextBase></TextBase></View>
        <ScrollView contentContainerStyle={styles.scroll} horizontal={true} pagingEnabled={true} bounces={false} showsHorizontalScrollIndicator={false} onScroll={_onScroll} scrollEventThrottle={16} ref={scrollViewRef}>{items?.map?.(_renderItem)}</ScrollView>
      </View>
    </View>
  )

}
