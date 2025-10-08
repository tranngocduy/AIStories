import React from 'react';
import { View, ScrollView } from 'react-native';

import ScrollRefresh from '@app-component/ScrollRefresh';

import Group from './component/Group';

import styles from './styles';

const Dashboard = () => {

  const _onRefresh = async () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <ScrollView contentContainerStyle={styles.scroll} refreshControl={<ScrollRefresh onRefresh={_onRefresh} />}>

          <View style={styles.separator} />

          <View style={styles.separator} />

        </ScrollView>
      </View>
    </View>
  )

}

export default Dashboard;
