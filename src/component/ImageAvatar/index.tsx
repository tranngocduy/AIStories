import React, { memo } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { IUserAvatarSVG } from '@/assets/svg';

import styles from './styles';

const ImageAvatar = () => {

  return (
    <View style={styles.container}>
      <IUserAvatarSVG width={36} height={36} fill='#000000' />
      <LinearGradient style={styles.viewBG} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} colors={['rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 0.5)']} />
    </View>
  )

};

export default memo(ImageAvatar, () => true);
