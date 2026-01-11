import React, { useState, useMemo, useRef, memo } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';

import { ServiceAPI } from '@/apis';
import { dayjs } from '@/utils/timeTz';
import { LABEL_REVIEW } from '@/constants';
import { useStackNavigation } from '@/useHooks/useNavigation';
import { IReviewLikeSVG, IReviewRelaySVG } from '@/assets/svg';
import { useProtectAction } from '@/useHooks/useProtectAction';
import { useEffectAfterMount } from '@/useHooks/useEffectAfterMount';
import type { TStoryRateVotes } from '@/models/types';

import TextBase from '@/component/TextBase';
import StoryScore from '@/component/StoryScore';
import TouchableView from '@/component/TouchableView';

import styles from './styles';

type TStoryReviewProps = { item: TStoryRateVotes, onRefresh: Function };

const StoryReview: React.FC<TStoryReviewProps> = ({ item, onRefresh }) => {

  const { navigate } = useStackNavigation();

  const { userId, isSigning, onProtectAction } = useProtectAction();

  const _isLiked = !!item?.likes?.some(element => (element?.user_id === userId));

  const [isLiked, setLiked] = useState(_isLiked);

  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const score = item?.score;

  const ratingId = item?.id;

  const likesCount = item?.likes_count || 0;

  const commentsCount = item?.comments_count || 0;

  const usernameReview = item?.user?.username || '';

  const statusReview = LABEL_REVIEW?.[(score - 1)] || '';

  const content = item?.content?.replace(/<(.|\n)*?>/g, '')?.trim?.();

  const createAt = !!item?.created_at ? dayjs(item?.created_at).format('DD/MM/YYYY') : '';

  const _onUpdateStateLiked = (status: boolean) => {
    if (!!status && !!userId) ServiceAPI.likePostRating({ user_id: userId, rating_id: ratingId }).then(() => onRefresh());
    if (!status && !!userId) ServiceAPI.unLikePostRating({ user_id: userId, rating_id: ratingId }).then(() => onRefresh());
  }

  const _onPressLike = async () => {
    const { isProtected } = onProtectAction();

    if (!isProtected || !userId) return null;

    if (!!timeoutRef.current) clearTimeout(timeoutRef.current);

    setLiked(prevState => {
      timeoutRef.current = setTimeout(() => { _onUpdateStateLiked(!prevState); }, 500);
      return !prevState;
    });
  }

  const _onPressReview = () => {
    const { isProtected } = onProtectAction();

    if (!isProtected || !userId) return null;

    navigate('StoryReview', { review: item });
  }

  useEffectAfterMount(() => { if (isLiked !== _isLiked) setLiked(_isLiked) }, [_isLiked]);

  const _viewLoading = useMemo(() => <View style={styles.loading}><ActivityIndicator size='small' color='#000000' /></View>, []);

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
        <View style={styles.separator} />

        {!!content &&
          <View>
            <TextBase style={styles.content}>{content}</TextBase>
            <View style={styles.separator} />
          </View>
        }

        <View style={styles.review}>
          <TouchableView style={styles.button} hitSlop={12} disabled={!!isSigning} onPress={_onPressLike}>
            {!!isSigning && <Animated.View entering={FadeInDown} exiting={FadeOutUp}>{_viewLoading}</Animated.View>}

            {(!isSigning && !isLiked) && <Animated.View entering={FadeInDown} exiting={FadeOutUp}><IReviewLikeSVG fill='#000000' /></Animated.View>}

            {(!isSigning && !!isLiked) && <Animated.View entering={FadeInDown} exiting={FadeOutUp}><IReviewLikeSVG fill='#F2C422' /></Animated.View>}

            <TextBase style={styles.labelButton}>Ưa thích</TextBase>

            <View style={styles.countView}><TextBase style={styles.countText}>{likesCount}</TextBase></View>
          </TouchableView>

          <View style={styles.line} />

          <TouchableView style={styles.button} hitSlop={12} disabled={!!isSigning} onPress={_onPressReview}>
            <IReviewRelaySVG />

            <TextBase style={styles.labelButton}>Phản hồi</TextBase>

            <View style={styles.countView}><TextBase style={styles.countText}>{commentsCount}</TextBase></View>
          </TouchableView>
        </View>
      </View>
    </View>
  )

};

export default memo(StoryReview, (prevProps, nextProps) => (JSON.stringify(prevProps) === JSON.stringify(nextProps)));
