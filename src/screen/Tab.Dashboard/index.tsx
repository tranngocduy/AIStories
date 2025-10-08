import React, { useState, useEffect, useMemo } from 'react';
import { View, ScrollView } from 'react-native';

import { ServiceAPI } from '@app-api';
import { runAfterInteractions } from '@app-util/app';

import ScrollRefresh from '@app-component/ScrollRefresh';
import { TDataStories } from '@app-screen/Tab.Dashboard/types';

import Group from './component/Group';

import styles from './styles';

const Dashboard = () => {
  const [data, setData] = useState<TDataStories>(null);

  const _onRefresh = async () => { }

  const _loadData = async () => {
    const result = await ServiceAPI.storiesDashboard();

    const hotStories = result?.data?.hot_stories || [];

    const newestStories = result?.data?.newest_stories || [];

    const recommendedStories = result?.data?.recommended_stories || [];

    setData({ hotStories, newestStories, recommendedStories });
  }

  useEffect(() => { runAfterInteractions(_loadData); }, []);

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

export default Dashboard;
