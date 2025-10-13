import React from 'react';
import { View } from 'react-native';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';
import { TextInputSearch } from '@/components/TextInputSearch';

import { styles } from './styles';

export const Library: React.FC<{}> = () => {

  return (
    <View style={styles.container}>
      <View style={styles.titleView}><TextBase style={styles.title}>Thư viện truyện</TextBase></View>

      <View style={styles.searchView}>
        <TextInputSearch />
        <TouchableView style={styles.searchButton}></TouchableView>
      </View>
    </View>
  )

}
