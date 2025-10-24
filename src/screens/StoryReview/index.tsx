import React, { useMemo } from 'react';
import { View, FlatList } from 'react-native';

import { TComment } from '@/models/types';
import { useRouteNavigation } from '@/useHooks/useNavigation';
import { useGetStoryRateReviews } from '@/useQuery/useGetStoryRateReviews';

import { HeaderStack } from '@/components/HeaderStack';
import { StoryComment } from '@/components/StoryComment';
import { ScrollAvoidingView } from '@/components/ScrollAvoidingView';

import { ItemMain } from './ItemMain';
import { ItemSub } from './ItemSub';

import { styles } from './styles';

export const StoryReview: React.FC<{}> = () => {

  const { params } = useRouteNavigation('StoryReview');

  const ratingId = params.review.id;

  const queryGetStoryRateReviews = useGetStoryRateReviews({ ratingId });

  const data = queryGetStoryRateReviews?.data || [];

  const _viewsHeader = useMemo(() => <ItemMain data={params.review} />, []);

  const _keyExtractor = (item: TComment) => `${item?.id}`;

  const _renderItem = ({ item }: { item: TComment }) => <ItemSub data={item} />;

  return (
    <View style={styles.container}>
      <HeaderStack label='Chi tiết bình luận' />

      <ScrollAvoidingView>
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={_keyExtractor}
          ListHeaderComponent={_viewsHeader}
          contentContainerStyle={styles.scroll}
        />

        <StoryComment />
      </ScrollAvoidingView>
    </View>
  )

}
