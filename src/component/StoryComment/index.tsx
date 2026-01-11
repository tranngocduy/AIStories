import React from 'react';
import { View } from 'react-native';

import { IEditSVG } from '@/assets/svg';
import { useProtectAction } from '@/useHooks/useProtectAction';

import TextBase from '@/component/TextBase';
import TouchableView from '@/component/TouchableView';

import { StoryCommentInstance } from '@/instance';

import styles from './styles';

type StoryCommentProps = { storyId?: number, ratingId?: number };

const StoryComment: React.FC<StoryCommentProps> = ({ storyId, ratingId }) => {

  const { onProtectAction } = useProtectAction();

  const _onPressReview = () => {
    const { isProtected } = onProtectAction();

    if (!isProtected || (!storyId && !ratingId)) return null;

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

export default StoryComment;
