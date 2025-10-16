import React from 'react';
import { View } from 'react-native';

import { useStoryRateVotes } from '@/useQuery/useStoryRateVotes';

import { TRateVotesProps } from '../types';

export const RateVote: React.FC<TRateVotesProps> = ({ story }) => {

  const queryStoryRateVotes = useStoryRateVotes({ storyId: story.id });

  const data = queryStoryRateVotes.data || [];

  return (
    <View>

    </View>
  )

}
