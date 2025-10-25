import React, { useState, useRef } from 'react';
import { View, ScrollView, TextInput } from 'react-native';

import { useIStore } from '@/store';
import { ServiceAPI } from '@/apis';
import { useQueryClient, QUERY_KEYS } from '@/useQuery/constants';
import { IStarSVG, IStarGraySVG, ICloseModalSVG } from '@/assets/svg';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';
import { ScrollAvoidingView } from '@/components/ScrollAvoidingView';
import { InstanceModal, TInstanceModalRefs } from '@/components/InstanceModal';

import { LoadingInstance, ToastInstance } from '@/instance';

import { styles } from './styles';

type TStoryCommentProps = { storyId?: number, ratingId?: number, onHide?: Function };

export const StoryComment: React.FC<TStoryCommentProps> = ({ storyId, ratingId, onHide }) => {

  const queryClient = useQueryClient();

  const [score, setScore] = useState(0);

  const reviewRef = useRef<string>('');

  const instanceModalRef = useRef<TInstanceModalRefs>(null);

  const _onClose = () => instanceModalRef.current?.onClose?.();

  const _onPressScore = (value: number) => setScore(value);

  const _onChangeText = (value: string) => (reviewRef.current = value?.trim?.() || '');

  const _onPressSubmit = async () => {
    const content = reviewRef.current || '';

    const userId = useIStore.getState().userProfile?.id;

    LoadingInstance.show({});

    if (!!storyId) {
      const result = await ServiceAPI.updateStoryRating({ story_id: storyId, score, content, user_id: userId });

      await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_STORY_RATE_VOTES, { storyId }] });

      if (!!result?.msgError) ToastInstance.show({ message: result.msgError, type: 'error' });
    }

    if (!!ratingId) {
      const result = await ServiceAPI.updateCommentRating({ rating_id: ratingId, content, user_id: userId });

      await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_STORY_RATE_REVIEWS, { ratingId }] });

      if (!!result?.msgError) ToastInstance.show({ message: result.msgError, type: 'error' });
    }

    LoadingInstance.hide();

    instanceModalRef.current?.onClose?.();
  }

  const _renderStart = (label: string, startIndex: number) => {
    return (
      <TouchableView style={styles.startItem} activeOpacity={1} onPress={_onPressScore.bind(this, startIndex)}>
        {(startIndex <= score) ? <IStarSVG width={32} height={32} /> : <IStarGraySVG width={32} height={32} />}
        <TextBase style={styles.startLabel}>{label}</TextBase>
      </TouchableView>
    )
  }

  return (
    <InstanceModal onHide={onHide} ref={instanceModalRef}>
      <ScrollAvoidingView>
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps='handled' scrollEnabled={false}>
          <View style={styles.view}>

            <View style={styles.headerView}>
              <TouchableView style={styles.closeView} hitSlop={16} onPress={_onClose}><ICloseModalSVG /></TouchableView>
              <TextBase style={styles.title}>Đánh giá</TextBase>
              <TouchableView style={styles.postView} hitSlop={16} onPress={_onPressSubmit}><TextBase style={styles.label}>Đăng</TextBase></TouchableView>
            </View>

            <View style={styles.separator} />

            {!!storyId &&
              <View style={styles.startView}>
                {_renderStart('Tệ', 1)}
                {_renderStart('Bình thường', 2)}
                {_renderStart('Khá hay', 3)}
                {_renderStart('Hay', 4)}
                {_renderStart('Tuyệt vời', 5)}
              </View>
            }

            <View style={styles.inputView}>
              <TextBase style={styles.inputLabel}>Đánh giá</TextBase>

              <View style={styles.inputComment}>
                <TextInput
                  maxLength={300}
                  multiline={true}
                  style={styles.input}
                  textAlignVertical='top'
                  placeholder='Viết đánh giá...'
                  placeholderTextColor='#A3A3A3'

                  onChangeText={_onChangeText}
                />
              </View>
            </View>

          </View>
        </ScrollView>
      </ScrollAvoidingView>
    </InstanceModal>
  )

}
