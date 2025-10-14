import React, { useMemo } from 'react';
import { View, ScrollView } from 'react-native';

import { useGetStoriesDashboard } from '@/useQuery/useGetStoriesDashboard';

import { ScrollRefresh } from '@/components/ScrollRefresh';

import { Group } from './Group';
import { styles } from './styles';
import { TDataStories } from './types';

export const Dashboard: React.FC<{}> = () => {

  const queryStoriesDashboard = useGetStoriesDashboard();

  const data: TDataStories = queryStoriesDashboard?.data || null;

  const _onRefresh = async () => await queryStoriesDashboard.refetch?.();

  const memoGroupHotStories = useMemo(() => <Group data={data?.hotStories} label='Truyện hot' />, [data?.hotStories]);

  const memoGroupNewestStories = useMemo(() => <Group data={data?.newestStories} label='Truyện mới cập nhật' />, [data?.newestStories]);

  const memoGroupRecommendedStories = useMemo(() => <Group data={data?.recommendedStories} label='Truyện đề xuất' />, [data?.recommendedStories]);

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <ScrollView contentContainerStyle={styles.scroll} refreshControl={<ScrollRefresh onRefresh={_onRefresh} />}>

          {memoGroupHotStories}

          <View style={styles.separator} />

          {memoGroupNewestStories}

          <View style={styles.separator} />

          {memoGroupRecommendedStories}

        </ScrollView>
      </View>
    </View>
  )

}
