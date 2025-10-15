import React, { useState } from 'react';
import { View } from 'react-native';

import { IStoryMarkSVG } from '@/assets/svg';

import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';

type TStoryMarkProps = { storyId?: number };

export const StoryMark: React.FC<TStoryMarkProps> = ({ storyId }) => {

  const [isMarked, setMarked] = useState(false);

  const _onPress = () => setMarked(!isMarked);

  return (
    <View>
      {!!isMarked && <View style={styles.bookMark} pointerEvents='none' />}
      <TouchableView hitSlop={16} onPress={_onPress}><IStoryMarkSVG fill={(!isMarked ? '#555555' : '#F2C422')} /></TouchableView>
    </View>
  )

}
