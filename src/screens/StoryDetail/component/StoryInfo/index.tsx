import React from 'react';
import { View } from 'react-native';

import { STORY_STATUS_LABEL_MAPPING } from '@/constants';
import { stackNavigationRef } from '@/useHooks/useNavigation';
import { useStoryChapters } from '@/useQuery/useStoryChapters';
import { useTranslateVersions } from '@/useQuery/useTranslateVersions';
import { IUserAvatarSVG, IStoryStatusSVG, ITotalChapterSVG, ITotalViewSVG, IStoryDetailSVG, IStorySpeechSVG } from '@/assets/svg';
import type { TStory, TStoryDetail } from '@/models/types';

import TextBase from '@/component/TextBase';
import StoryMark from '@/component/StoryMark';
import StoryScore from '@/component/StoryScore';
import TouchableView from '@/component/TouchableView';
import StoryThumbnail from '@/component/StoryThumbnail';
import ProgressSkeleton from '@/component/ProgressSkeleton';

import styles from './styles';

type StoryInfoProps = { story?: TStory, detail?: TStoryDetail };

const StoryInfo: React.FC<StoryInfoProps> = ({ story, detail }) => {

  const queryTranslateVersion = useTranslateVersions({ storyId: story?.id, enabled: false });

  const translateVersionId = queryTranslateVersion?.data?.[0]?.id;

  const queryStoryChapters = useStoryChapters({ translateVersionId, enabled: !!translateVersionId });

  const disabled = (!!queryStoryChapters?.isLoading || !queryStoryChapters?.isSuccess || !queryStoryChapters?.data?.[0]);

  const buttonStyle = [styles.button, { opacity: !disabled ? 1 : 0.3 }];

  const storyId = story?.id;

  const title = story?.title;

  const score = story?.rating_score;

  const author = detail?.author?.name;

  const totalViews = story?.total_views;

  const totalChapters = story?.total_chapters;

  const status = !!detail?.status ? (STORY_STATUS_LABEL_MAPPING?.[detail?.status as keyof typeof STORY_STATUS_LABEL_MAPPING] || '-') : '-';

  const _onPressStoryDetail = () => {
    const chapter = { ...(queryStoryChapters?.data?.[0] || {}), chapter_index: 0 };
    if (!!chapter?.id && !!story && !!translateVersionId) stackNavigationRef.navigate('PageChapter', { story, chapter, translateVersionId });
  }

  const _onPressStorySpeech = () => {
    if (!!story?.id && !!translateVersionId) stackNavigationRef.navigate('StorySpeech', { story, translateVersionId, chapterIndex: 0 });
  }

  const _onPressAuthor = () => {
    if (!!detail?.author?.name && !!detail?.author?.id) {
      const author = { label: detail?.author?.name, value: detail?.author?.id };
      stackNavigationRef.popToTopBeforeNavigate('Library', { filter: { author, sort: null, votes: null, chapters: null, rating: null, status: null, category: null } });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={styles.overView}>
          <View style={styles.thumbnail}><StoryThumbnail item={story} thumbSize={110} /></View>

          <View style={styles.detail}>
            <View style={styles.statusVote}>
              <StoryScore score={score} backgroundColor='transparent' color='#555555' />
              {!!storyId && <StoryMark storyId={storyId} />}
            </View>

            <TextBase style={styles.title}>{title}</TextBase>

            <View style={styles.authorView}>
              {!author ?
                <ProgressSkeleton width={80} height={24} radius={4} />
                :
                <TouchableView style={styles.authorContent} onPress={_onPressAuthor}>
                  <IUserAvatarSVG fill='#FFFFFF' />
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
          <TouchableView style={buttonStyle} disabled={!!disabled} onPress={_onPressStoryDetail}>
            <IStoryDetailSVG fill='#FFFFFF' /><TextBase style={styles.buttonLabel}>Đọc ngay</TextBase>
          </TouchableView>

          <TouchableView style={buttonStyle} disabled={!!disabled} onPress={_onPressStorySpeech}>
            <IStorySpeechSVG fill='#FFFFFF' /><TextBase style={styles.buttonLabel}>Audio</TextBase>
          </TouchableView>
        </View>
      </View>
    </View>
  )

}

export default StoryInfo;
