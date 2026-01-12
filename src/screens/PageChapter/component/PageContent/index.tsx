import React, { useEffect, useMemo, useRef } from 'react';
import { View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { useIStore } from '@/store';
import { useGetChapterContent } from '@/useQuery/useGetChapterContent';

import Paragraphs from '@/component/Paragraphs';
import ProgressIcon from '@/component/ProgressIcon';

import styles from './styles';

type PageContentProps = { chapterId: number };

const PageContent: React.FC<PageContentProps> = ({ chapterId }) => {

  const translateVersionId = useIStore(state => state.storeStory?.translateVersionId);

  const queryGetChapterContent = useGetChapterContent({ chapterId, translateVersionId });

  const isLoading = queryGetChapterContent?.isLoading;

  const contentRef = useRef<string>('');

  const content = queryGetChapterContent?.data?.content || contentRef.current || '';

  useEffect(() => {
    if (!!queryGetChapterContent?.data?.content) contentRef.current = queryGetChapterContent?.data?.content;
  }, [queryGetChapterContent?.data?.content]);

  const memoParagraphs = useMemo(() => <Paragraphs content={content} />, [content]);

  return (
    <View style={styles.container}>
      <View style={styles.view}>{memoParagraphs}</View>
      {!!isLoading && <Animated.View style={styles.loading} entering={FadeIn} exiting={FadeOut} pointerEvents='none'><ProgressIcon /></Animated.View>}
    </View>
  )

}

export default PageContent;
