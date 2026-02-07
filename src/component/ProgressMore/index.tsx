import React, { memo } from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './styles';

const ProgressMore: React.FC = () => {

  return <View style={styles.container} pointerEvents='none'><ActivityIndicator size='small' color='#000000' /></View>;

}

export default memo(ProgressMore, () => true);
