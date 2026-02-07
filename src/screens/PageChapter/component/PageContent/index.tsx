import React, { useEffect, useMemo, useRef } from 'react';
import { View } from 'react-native';

import { useIStore } from '@/store';
import { useGetChapterContent } from '@/useQuery/useGetChapterContent';

import Paragraphs from '@/component/Paragraphs';
import PageIndicator, { PageIndicatorRefs } from '@/component/PageIndicator';

import styles from './styles';

type PageContentProps = { chapterId: number };

const PageContent: React.FC<PageContentProps> = ({ chapterId }) => {

  const translateVersionId = useIStore(state => state.storeStory?.translateVersionId);

  const queryGetChapterContent = useGetChapterContent({ chapterId, translateVersionId });

  const contentRef = useRef<string>('');

  const pageIndicatorRef = useRef<PageIndicatorRefs>(null);

  const content = queryGetChapterContent?.data?.content || contentRef.current || '';

  const _onCacheContent = () => {
    if (!queryGetChapterContent?.data?.content) return null;

    contentRef.current = queryGetChapterContent?.data?.content;
  }

  const _onProgressChange = () => {
    if (!!queryGetChapterContent?.isSuccess) pageIndicatorRef.current?.setPercent(1);

    if (!!queryGetChapterContent?.isLoading) pageIndicatorRef.current?.setPercent(0.8);
  }

  useEffect(() => { _onCacheContent(); }, [queryGetChapterContent?.data?.content]);

  useEffect(() => { _onProgressChange(); }, [JSON.stringify(queryGetChapterContent)]);

  const memoParagraphs = useMemo(() => <Paragraphs content={content} />, [content]);

  const memoPageIndicator = useMemo(() => <PageIndicator ref={pageIndicatorRef} />, []);

  return (
    <View style={styles.container}>
      <View style={styles.view}>{memoParagraphs}</View>
      {memoPageIndicator}
    </View>
  )

}

export default PageContent;
