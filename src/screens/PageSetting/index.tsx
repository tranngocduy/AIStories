import React from 'react';
import { View, ScrollView } from 'react-native';

import { HeaderStack } from '@/components/HeaderStack';

import { styles } from './styles';

export const PageSetting: React.FC<{}> = () => {

  return (
    <View style={styles.container}>
      <HeaderStack label='Cài đặt' />
      <View style={styles.view}>
        <ScrollView contentContainerStyle={styles.scroll}>


        </ScrollView>
      </View>
    </View>
  )

}
