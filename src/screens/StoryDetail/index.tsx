import React from 'react';
import { View } from 'react-native';

import { useStoryDetail } from '@/useQuery/useStoryDetail';
import { useRouteNavigation } from '@/useHooks/useNavigation';

export const StoryDetail: React.FC<{}> = () => {
  const { params } = useRouteNavigation('StoryDetail');

  const story = params?.story;

  const queryStoryDetail = useStoryDetail({ storyId: story?.id });

  return (
    <View>

    </View>
  )

}
