import React, { memo } from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './styles';

type ProgressIconProps = { size?: 'small' | 'large' }

export const ProgressIcon: React.FC<ProgressIconProps> = ({ size }) => {

  const sizeIndicator = (size || 'large');

  return <View style={styles.container} pointerEvents='none'><ActivityIndicator size={sizeIndicator} color='#000000' /></View>;

};

export default memo(ProgressIcon, () => true);
