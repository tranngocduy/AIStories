import React from 'react';
import { View } from 'react-native';

import { TStory, TStoryDetail } from '@/models/types';
import { STORY_STATUS_LABEL_MAPPING } from '@/constants';
import { IUserAvatarSVG, IStoryStatusSVG, ITotalChapterSVG, ITotalViewSVG, IStoryDetailSVG } from '@/assets/svg';

import { TextBase } from '@/components/TextBase';
import { StoryMark } from '@/components/StoryMark';
import { StoryScore } from '@/components/StoryScore';
import { TouchableView } from '@/components/TouchableView';
import { StoryThumbnail } from '@/components/StoryThumbnail';
import { ProgressSkeleton } from '@/components/ProgressSkeleton';

import { styles } from './styles';

type TStoryInfoProps = { story?: TStory, detail?: TStoryDetail };

export const StoryInfo: React.FC<TStoryInfoProps> = ({ story, detail }) => {

  const storyId = story?.id;

  const title = story?.title;

  const score = story?.rating_score;

  const author = detail?.author?.name;

  const totalViews = story?.total_views;

  const totalChapters = story?.total_chapters;

  const status = !!detail?.status ? (STORY_STATUS_LABEL_MAPPING?.[detail?.status] || '-') : '-';

  const _onPressAuthor = () => { }

  const _onPressStoryDetail = () => { }

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={styles.overView}>
          <View style={styles.thumbnail}><StoryThumbnail item={story} thumbSize={110} /></View>

          <View style={styles.detail}>
            <View style={styles.statusVote}>
              <StoryScore score={score} backgroundColor='transparent' color='#555555' />
              <StoryMark storyId={storyId} />
            </View>

            <TextBase style={styles.title}>{title}</TextBase>

            <View style={styles.authorView}>
              {!author ?
                <ProgressSkeleton width={80} height={24} radius={4} />
                :
                <TouchableView style={styles.authorContent} onPress={_onPressAuthor}>
                  <IUserAvatarSVG />
                  <TextBase style={styles.authorLabel}>{author}</TextBase>
                </TouchableView>
              }
            </View>

            <View style={styles.statusView}>
              <View style={styles.statusItem}>
                <IStoryStatusSVG /><TextBase style={styles.statusLabel}>{status}</TextBase>
              </View>

              <View style={styles.statusItem}>
                <ITotalChapterSVG /><TextBase style={styles.statusLabel}>{totalChapters}</TextBase>
              </View>

              <View style={styles.statusItem}>
                <ITotalViewSVG /><TextBase style={styles.statusLabel}>{totalViews}</TextBase>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottom}>
          <TouchableView style={styles.button} onPress={_onPressStoryDetail}>
            <IStoryDetailSVG /><TextBase style={styles.buttonLabel}>Đọc ngay</TextBase>
          </TouchableView>
        </View>
      </View>
    </View>
  )

}
