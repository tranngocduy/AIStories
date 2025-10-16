import React from 'react';
import { View, ScrollView } from 'react-native';

import { TextInputSearch } from '@/components/TextInputSearch';

import { styles } from './styles';

export const PageAuthor: React.FC<{}> = () => {

  return (
    <View style={styles.container}>
      <View style={styles.searchView}><TextInputSearch placeholder='Tìm kiếm tác giả...'/></View>

      <ScrollView contentContainerStyle={styles.scroll}>

      </ScrollView>
    </View>
  )

}
