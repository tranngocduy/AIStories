import React from 'react';
import { View } from 'react-native';

import { TStory } from '@/models/types';

type TStoryItemProps = { item: TStory, isHorizon?: boolean };

export const StoryItem: React.FC<TStoryItemProps> = ({ item, isHorizon = false }) => {

  return (
    <View>

    </View>
  )

}
