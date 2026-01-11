import React, { useMemo } from 'react';
import { View, FlatList } from 'react-native';

import { useRouteNavigation } from '@/useHooks/useNavigation';
import { useGetStoryRateReviews } from '@/useQuery/useGetStoryRateReviews';
import type { TComment } from '@/models/types';

import HeaderStack from '@/component/HeaderStack';
import StoryComment from '@/component/StoryComment';
import ScrollAvoidingView from '@/component/ScrollAvoidingView';

import ItemMain from './component/ItemMain';
import ItemSub from './component/ItemSub';

import styles from './styles';

const StoryReview: React.FC = () => {

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

        <StoryComment ratingId={ratingId} />
      </ScrollAvoidingView>
    </View>
  )

}

export default StoryReview;
