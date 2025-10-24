import React from 'react';
import { View } from 'react-native';

import { IEditSVG } from '@/assets/svg';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';

export const StoryComment: React.FC<{}> = () => {

  const _onPressReview = () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableView style={styles.inputView} onPress={_onPressReview}>
          <View style={styles.icon}><IEditSVG /></View>
          <TextBase style={styles.text}>Viết đánh giá</TextBase>
        </TouchableView>
      </View>
    </View>
  )

}
