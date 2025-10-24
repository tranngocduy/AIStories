import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';

export const Loading = () => {

  return <View style={styles.container}><View style={styles.view}><ActivityIndicator size='large' color='#FFFFFF' /></View></View>;

}
