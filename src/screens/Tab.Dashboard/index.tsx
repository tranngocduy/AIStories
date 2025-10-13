import React, { useState, useEffect, useMemo } from 'react';
import { View, ScrollView } from 'react-native';

import { ServiceAPI } from '@/apis';
import { runAfterInteractions } from '@/utils/app';

import { Group } from './Group';
import { styles } from './styles';
import { TDataState } from './types';

export const Dashboard: React.FC<{}> = () => {

  const [data, setData] = useState<TDataState>(null);

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
        <ScrollView contentContainerStyle={styles.scroll}>

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
