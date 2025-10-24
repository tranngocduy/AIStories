import React, { useMemo } from 'react';
import { View, FlatList } from 'react-native';

import { useRouteNavigation } from '@/useHooks/useNavigation';

import { HeaderStack } from '@/components/HeaderStack';
import { ScrollAvoidingView } from '@/components/ScrollAvoidingView';

import { ItemMain } from './ItemMain';

import { styles } from './styles';

export const StoryReview: React.FC<{}> = () => {

  const { params } = useRouteNavigation('StoryReview');

  const id = params.review.id;

  const content = params.review.content;

  const _viewsHeader = useMemo(() => <ItemMain data={params.review} />, []);

  return (
    <View style={styles.container}>
      <HeaderStack label='Chi tiết bình luận' />

      <ScrollAvoidingView>
        <FlatList
          ListHeaderComponent={_viewsHeader}
          contentContainerStyle={styles.scroll}
        />
      </ScrollAvoidingView>
    </View>
  )

}
