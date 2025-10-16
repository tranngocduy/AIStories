import React from 'react';
import { View } from 'react-native';

import { dayjs } from '@/utils/timeTz';
import { LABEL_REVIEW } from '@/constants';
import { TStoryRateVotes } from '@/models/types';

import { TextBase } from '@/components/TextBase';
import { StoryScore } from '@/components/StoryScore';

import { styles } from './styles';

type TStoryReviewProps = { item: TStoryRateVotes };

export const StoryReview: React.FC<TStoryReviewProps> = ({ item }) => {

  const score = item?.score;

  const ratingId = item?.id;

  const likesCount = item?.likes_count || 0;

  const commentsCount = item?.comments_count || 0;

  const usernameReview = item?.user?.username || '';

  const statusReview = LABEL_REVIEW?.[(score - 1)] || '';

  const createAt = !!item?.created_at ? dayjs(item?.created_at).format('DD/MM/YYYY') : '';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.infoView}>
          <View style={styles.usernameView}><TextBase style={styles.username} numberOfLines={1}>{usernameReview}</TextBase></View>
          <StoryScore score={score} isHideScore={true} />
          <TextBase style={styles.status}>{statusReview}</TextBase>
        </View>
        <TextBase style={styles.createAt}>{createAt}</TextBase>
      </View>

      <View>

      </View>
    </View>
  )

}
