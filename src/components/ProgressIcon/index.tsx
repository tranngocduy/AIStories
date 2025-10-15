import React, { memo } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';

type TProgressIconProps = { size?: 'small' | 'large' }

export const ProgressIcon: React.FC<TProgressIconProps> = memo(({ size }) => {

  const sizeIndicator = (size || 'large');

  return <View style={styles.container} pointerEvents='none'><ActivityIndicator size={sizeIndicator} color='#000000' /></View>;

}, () => true);
