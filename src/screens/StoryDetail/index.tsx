import React, { useMemo } from 'react';
import { View } from 'react-native';

import { useStoryDetail } from '@/useQuery/useStoryDetail';
import { useRouteNavigation } from '@/useHooks/useNavigation';

import { HeaderStack } from '@/components/HeaderStack';

import { StoryInfo } from './StoryInfo';

import { styles } from './styles';

export const StoryDetail: React.FC<{}> = () => {
  const { params } = useRouteNavigation('StoryDetail');

  const queryStoryDetail = useStoryDetail({ storyId: params?.story?.id });

  const memoStoryInfo = useMemo(() => <StoryInfo story={params?.story} detail={queryStoryDetail?.data} />, [JSON.stringify(queryStoryDetail?.data)]);

  return (
    <View style={styles.container}>
      <HeaderStack />
      <View style={styles.view}>
        {memoStoryInfo}
      </View>
    </View>
  )

}
