import React from 'react';
import { View } from 'react-native';

import { dayjs } from '@/utils/timeTz';
import { LABEL_REVIEW } from '@/constants';
import type { TStoryRateVotes } from '@/models/types';

import TextBase from '@/component/TextBase';
import StoryScore from '@/component/StoryScore';

import styles from './styles';

type ItemMainProps = { data: TStoryRateVotes };

const ItemMain: React.FC<ItemMainProps> = ({ data }) => {

  const score = data?.score;

  const usernameReview = data?.user?.username || '';

  const statusReview = LABEL_REVIEW?.[(score - 1)] || '';

  const content = data?.content?.replace(/<(.|\n)*?>/g, '')?.trim?.();

  const createAt = !!data?.created_at ? dayjs(data?.created_at).format('DD/MM/YYYY') : '';

  return (
    <View style={styles.container}>
      <View style={styles.userView}>
        <View style={styles.infoView}>
          <View style={styles.usernameView}><TextBase style={styles.username} numberOfLines={1}>{usernameReview}</TextBase></View>
          <StoryScore score={score} isHideScore={true} />
          <TextBase style={styles.status}>{statusReview}</TextBase>
        </View>
        <TextBase style={styles.createAt}>{createAt}</TextBase>
      </View>

      <View style={styles.separator} />

      <TextBase style={styles.content}>{content}</TextBase>
    </View>
  )

}

export default ItemMain;
