import React from 'react';
import { View, ScrollView } from 'react-native';

import { useSearchAuthorByName } from '@/useQuery/useSearchAuthorByName';

import { TextInputSearch } from '@/components/TextInputSearch';

import { styles } from './styles';

export const PageAuthor: React.FC<{}> = () => {

  const querySearchAuthorByName = useSearchAuthorByName({ search: '' });

  return (
    <View style={styles.container}>
      <View style={styles.searchView}><TextInputSearch placeholder='Tìm kiếm tác giả...' /></View>

      <ScrollView contentContainerStyle={styles.scroll}>

      </ScrollView>
    </View>
  )

}
