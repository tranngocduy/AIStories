import React from 'react';
import { View } from 'react-native';

import { IUserAvatarSVG } from '@/assets/svg';
import { TStory, TStoryDetail } from '@/models/types';

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

  const _onPressAuthor = () => { }

  return (
    <View style={styles.container}>
      <View style={styles.view}>
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

        </View>
      </View>
    </View>
  )

}
