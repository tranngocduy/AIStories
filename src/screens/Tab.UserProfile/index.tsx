import React from 'react';
import { View } from 'react-native';

import { useAuthenticate } from '@/useHooks/useAuthenticate';

import { TextBase } from '@/components/TextBase';
import { Authenticate } from '@/components/Authenticate';

import { styles } from './styles';

export const UserProfile: React.FC<{}> = () => {

  useAuthenticate();

  return (
    <View style={styles.container}>
      <View style={styles.titleView}><TextBase style={styles.title}>Tài khoản</TextBase></View>

      <Authenticate>
        <View style={styles.view}>

        </View>
      </Authenticate>
    </View>
  )

}
