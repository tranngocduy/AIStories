import React from 'react';
import { View } from 'react-native';

import { useStoryRateVotes } from '@/useQuery/useStoryRateVotes';
import type { TStory, TStoryRateVotes } from '@/models/types';

import EmptyList from '@/component/EmptyList';
import StoryReview from '@/component/StoryReview';
import ProgressIcon from '@/component/ProgressIcon';

import styles from './styles';

type RateVotesProps = { story: TStory };

const RateVote: React.FC<RateVotesProps> = ({ story }) => {

  const queryStoryRateVotes = useStoryRateVotes({ storyId: story.id });

  const data = queryStoryRateVotes.data || [];

  const isLoading = !!queryStoryRateVotes?.isLoading;

  const _onRefresh = () => queryStoryRateVotes?.refetch?.();

  const _renderItem = (item: TStoryRateVotes) => <StoryReview item={item} onRefresh={_onRefresh} key={`${item?.id}`} />;

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        {(!isLoading && !!data?.[0]) && data?.map(_renderItem)}
        {!!isLoading && <View style={styles.empty}><ProgressIcon /></View>}
        {(!isLoading && !data?.[0]) && <View style={styles.empty}><EmptyList /></View>}
      </View>
    </View>
  )

}

export default RateVote;
