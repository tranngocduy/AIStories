import React, { useMemo } from 'react';
import { View, ScrollView } from 'react-native';

import { FILTER_OPTION_SORT } from '@/constants';
import { useGetStoriesDashboard } from '@/useQuery/useGetStoriesDashboard';
import type { TStory } from '@/models/types';

import ScrollRefresh from '@/component/ScrollRefresh';

import GroupStories from './component/GroupStories';

import styles from './styles';

type DataStories = { hotStories: TStory[], newestStories: TStory[], recommendedStories: TStory[] };

const Dashboard: React.FC = () => {

  const queryStoriesDashboard = useGetStoriesDashboard();

  const data: DataStories = queryStoriesDashboard?.data || null;

  const _onRefresh = async () => await queryStoriesDashboard.refetch?.();

  const isEmptyHotStories = (!!data && !data?.hotStories?.length);

  const isEmptyNewestStories = (!!data && !data?.newestStories?.length);

  const isEmptyRecommendedStories = (!!data && !data?.recommendedStories?.length);

  const memoGroupHotStories = useMemo(() => <GroupStories data={data?.hotStories} label='Truyện hot' sort={FILTER_OPTION_SORT[2]} />, [data?.hotStories]);

  const memoGroupNewestStories = useMemo(() => <GroupStories data={data?.newestStories} label='Truyện mới cập nhật' sort={FILTER_OPTION_SORT[0]} />, [data?.newestStories]);

  const memoGroupRecommendedStories = useMemo(() => <GroupStories data={data?.recommendedStories} label='Truyện đề xuất' sort={FILTER_OPTION_SORT[3]} />, [data?.recommendedStories]);

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <ScrollView contentContainerStyle={styles.scroll} refreshControl={<ScrollRefresh onRefresh={_onRefresh} />}>

          {!isEmptyHotStories && memoGroupHotStories}

          {!isEmptyNewestStories && <View style={styles.separator} />}

          {!isEmptyNewestStories && memoGroupNewestStories}

          {!isEmptyRecommendedStories && <View style={styles.separator} />}

          {!isEmptyRecommendedStories && memoGroupRecommendedStories}

        </ScrollView>
      </View>
    </View>
  )

}

export default Dashboard;
