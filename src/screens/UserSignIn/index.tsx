import React from 'react';
import { View, ScrollView } from 'react-native';

import { logoIMG } from '@/assets/image';

import TextBase from '@/component/TextBase';
import ImageIcon from '@/component/ImageIcon';
import HeaderStack from '@/component/HeaderStack';
import ScrollAvoidingView from '@/component/ScrollAvoidingView';

import styles from './styles';

const UserSignIn: React.FC = () => {

  return (
    <View style={styles.container}>
      <HeaderStack />

      <ScrollAvoidingView>
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps='handled'>

          <View style={styles.logoView}>
            <ImageIcon source={logoIMG} style={styles.logoIcon} />
            <TextBase style={styles.logoTitle}>Truyện AI</TextBase>
          </View>

        </ScrollView>
      </ScrollAvoidingView>
    </View>
  )

}

export default UserSignIn;
