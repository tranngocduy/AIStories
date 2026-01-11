import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';

import { ServiceAPI } from '@/apis';
import { useIStore } from '@/store';
import { IStoryMarkSVG } from '@/assets/svg';
import { useStoryMarked } from '@/useQuery/useStoryMarked';
import { useStackNavigation } from '@/useHooks/useNavigation';

import TouchableView from '@/component/TouchableView';

import styles from './styles';

type StoryMarkProps = { storyId: number };

const StoryMark: React.FC<StoryMarkProps> = ({ storyId }) => {

  const { navigate } = useStackNavigation();

  const queryStoryMarked = useStoryMarked();

  const isSuccess = queryStoryMarked?.isSuccess;

  const isStoryMarked = queryStoryMarked?.data?.some?.(element => (element?.id === storyId));

  const [isMarked, setMarked] = useState(isStoryMarked);

  const statusRef = useRef(!!isStoryMarked);

  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const _loadMarkStatus = async () => {
    if (isStoryMarked === statusRef.current) return null;

    const userId = useIStore.getState().userProfile?.id;

    await ServiceAPI.updateStoryMarked({ story_id: storyId, user_id: userId });

    await queryStoryMarked?.refetch();
  }

  const _onPress = () => {
    if (!isSuccess) navigate('UserSignIn');

    if (!isSuccess) return null;

    statusRef.current = !isMarked;

    setMarked(statusRef.current);

    if (!!timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => _loadMarkStatus(), 1000);
  }

  useEffect(() => { if (!!isSuccess) setMarked(!!isStoryMarked); }, [isSuccess, isStoryMarked]);

  return (
    <View>
      {!!isMarked && <View style={styles.bookMark} pointerEvents='none' />}
      <TouchableView hitSlop={16} onPress={_onPress}><IStoryMarkSVG fill={(!isMarked ? '#555555' : '#F2C422')} /></TouchableView>
    </View>
  )

}

export default StoryMark;
