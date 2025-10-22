import React from 'react';
import { View } from 'react-native';

import { TStoryRateVotes } from '@/models/types';
import { useStoryRateVotes } from '@/useQuery/useStoryRateVotes';

import { EmptyList } from '@/components/EmptyList';
import { StoryReview } from '@/components/StoryReview';
import { ProgressIcon } from '@/components/ProgressIcon';

import { styles } from './styles';
import { TRateVotesProps } from '../types';

export const RateVote: React.FC<TRateVotesProps> = ({ story }) => {

  const queryStoryRateVotes = useStoryRateVotes({ storyId: story.id });

  const data = queryStoryRateVotes.data || [];

  const isLoading = !!queryStoryRateVotes?.isLoading;

  const _renderItem = (item: TStoryRateVotes) => <StoryReview item={item} key={`${item?.id}`} />;

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        {!!isLoading && <ProgressIcon />}
        {(!isLoading && !!data?.[0]) && data?.map(_renderItem)}
        {(!isLoading && !data?.[0]) && <View style={styles.empty}><EmptyList /></View>}
      </View>
    </View>
  )

}
