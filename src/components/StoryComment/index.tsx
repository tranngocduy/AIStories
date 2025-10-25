import React from 'react';
import { View } from 'react-native';

import { IEditSVG } from '@/assets/svg';
import { useProtectAction } from '@/useHooks/useProtectAction';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';

import { StoryCommentInstance } from '@/instance';

import { styles } from './styles';

type TStoryCommentProps = { storyId?: number, ratingId?: number };

export const StoryComment: React.FC<TStoryCommentProps> = ({ storyId, ratingId }) => {

  const { onProtectAction } = useProtectAction();

  const _onPressReview = () => {
    const { isProtected } = onProtectAction();

    if (!isProtected) return null;

    StoryCommentInstance.show({ storyId, ratingId });
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
