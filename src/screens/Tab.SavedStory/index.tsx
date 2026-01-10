import React from 'react';
import { View } from 'react-native';

import TextBase from '@/component/TextBase';
import Authenticate from '@/component/Authenticate';

import styles from './styles';

const SavedStory: React.FC = () => {

  return (
    <View style={styles.container}>
      <View style={styles.titleView}><TextBase style={styles.title}>Truyện đã lưu</TextBase></View>

      <Authenticate>
        
      </Authenticate>
    </View>
  )

}

export default SavedStory;
