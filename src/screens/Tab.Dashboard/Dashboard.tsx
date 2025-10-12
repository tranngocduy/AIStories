import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { ServiceAPI } from '@/api';
import { runAfterInteractions } from '@/utils/app';

import { TStateData } from './types';

import styles from './Dashboard.styles';

const Dashboard: React.FC<{}> = () => {

  const [data, setData] = useState<TStateData>(null);

  const _loadData = async () => {
    const result = await ServiceAPI.storiesDashboard();

    const hotStories = result?.data?.hot_stories || [];

    const newestStories = result?.data?.newest_stories || [];

    const recommendedStories = result?.data?.recommended_stories || [];

    setData({ hotStories, newestStories, recommendedStories });
  }

  useEffect(() => { runAfterInteractions(_loadData); }, []);

  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  )

}

export default Dashboard;
