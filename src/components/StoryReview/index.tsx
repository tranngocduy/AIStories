import React, { useState, useMemo } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';

import { dayjs } from '@/utils/timeTz';
import { LABEL_REVIEW } from '@/constants';
import { TStoryRateVotes } from '@/models/types';
import { IReviewLikeSVG, IReviewRelaySVG } from '@/assets/svg';
import { useProtectAction } from '@/useHooks/useProtectAction';
import { useEffectAfterMount } from '@/useHooks/useEffectAfterMount';

import { TextBase } from '@/components/TextBase';
import { StoryScore } from '@/components/StoryScore';
import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';

type TStoryReviewProps = { item: TStoryRateVotes };

export const StoryReview: React.FC<TStoryReviewProps> = ({ item }) => {

  const { userId, isSigning, onProtectAction } = useProtectAction();

  const _isLiked = !!item?.likes?.some(element => (element?.user_id === userId));

  const [isLiked, setLiked] = useState(_isLiked);

  const score = item?.score;

  const ratingId = item?.id;

  const likesCount = item?.likes_count || 0;

  const commentsCount = item?.comments_count || 0;

  const usernameReview = item?.user?.username || '';

  const statusReview = LABEL_REVIEW?.[(score - 1)] || '';

  const content = item?.content?.replace(/<(.|\n)*?>/g, '')?.trim?.();

  const createAt = !!item?.created_at ? dayjs(item?.created_at).format('DD/MM/YYYY') : '';

  const _onPressLike = async () => {
    const { isProtected } = onProtectAction();

    if (!isProtected || !userId) return null;

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

        <View>
          <TextBase style={styles.content}>{content}</TextBase>
          <View style={styles.separator} />
        </View>

        <View style={styles.review}>
          <TouchableView style={styles.button} hitSlop={12} disabled={!!isSigning} onPress={_onPressLike}>
            {!!isSigning && <Animated.View entering={FadeInDown} exiting={FadeOutUp}>{_viewLoading}</Animated.View>}

            {(!isSigning && !isLiked) && <Animated.View entering={FadeInDown} exiting={FadeOutUp}><IReviewLikeSVG fill='#000000' /></Animated.View>}

            {(!isSigning && !!isLiked) && <Animated.View entering={FadeInDown} exiting={FadeOutUp}><IReviewLikeSVG fill='#F2C422' /></Animated.View>}

            <TextBase style={styles.labelButton}>Ưa thích</TextBase>

            <View style={styles.countView}><TextBase style={styles.countText}>{likesCount}</TextBase></View>
          </TouchableView>

          <View style={styles.line} />

          <TouchableView style={styles.button} hitSlop={12} disabled={!!isSigning}>
            <IReviewRelaySVG />

            <TextBase style={styles.labelButton}>Phản hồi</TextBase>

            <View style={styles.countView}><TextBase style={styles.countText}>{commentsCount}</TextBase></View>
          </TouchableView>
        </View>
      </View>
    </View>
  )

}
