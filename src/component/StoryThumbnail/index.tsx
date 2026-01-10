import React from 'react';
import { View, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { TStory } from '@/models/types';

import TextBase from '@/component/TextBase';
import StoryScore from '@/component/StoryScore';

import styles from './styles';

type TStoryThumbnailProps = { item?: TStory, thumbSize?: number, isOverview?: boolean };

const StoryThumbnail: React.FC<TStoryThumbnailProps> = ({ item, thumbSize, isOverview }) => {

  const end = { x: 0.5, y: 1 };

  const start = { x: 0.5, y: 0 };

  const imageUrl = item?.cover_image_url;

  const category = item?.categories?.[0]?.name || '';

  return (
    <View style={[styles.container, { height: thumbSize }]}>
      {!!imageUrl ?
        <ImageBackground source={{ uri: imageUrl }} style={styles.thumbnail} resizeMode='stretch' />
        :
        <View style={styles.emptyView}><TextBase style={styles.emptyLabel}>No Cover</TextBase></View>
      }

      {!!category &&
        <View style={styles.categoryView}>
          <LinearGradient style={styles.categoryTag} start={start} end={end} colors={['#333333', '#1A1A1A', '#000000', '#0D0D0D']} />
          <View style={styles.categoryLabelView}><TextBase style={styles.categoryLabel}>{category}</TextBase></View>
        </View>
      }

      {!!isOverview &&
        <LinearGradient style={styles.rateView} start={start} end={end} colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}>
          <View style={styles.rate}><StoryScore score={item?.rating_score} /></View>
        </LinearGradient>
      }
    </View>
  )

}

export default StoryThumbnail;
