import React from 'react';
import { View } from 'react-native';

import { TTagDetail } from '@/models/types';

import TagLabel from '@/components/TagLabel';
import { TextBase } from '@/components/TextBase';
import { StoryDescription } from '@/components/StoryDescription';

import { styles } from './styles';
import { TOverviewProps } from '../types';

export const Overview: React.FC<TOverviewProps> = ({ detail }) => {
  const title = detail?.title || '-';

  const chineseTitle = detail?.chinese_title || '-';

  const _renderItem = (item: TTagDetail, index: number) => <TagLabel item={item} key={index} />;

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TextBase style={styles.label}>Giới thiệu tổng quan</TextBase>

        <View style={styles.detail}>
          <View style={styles.info}>
            <View style={styles.dot} />
            <View style={styles.description}><TextBase style={styles.name}>Tên Trung: {chineseTitle}</TextBase></View>
          </View>

          <View style={styles.info}>
            <View style={styles.dot} />
            <View style={styles.description}><TextBase style={styles.name}>Tên Hán Việt: {title}</TextBase></View>
          </View>
        </View>

        {!!detail?.tags?.[0] && <View style={styles.tags}>{detail?.tags?.map?.(_renderItem)}</View>}

        <StoryDescription description={detail?.description} />
      </View>
    </View>
  )

}
