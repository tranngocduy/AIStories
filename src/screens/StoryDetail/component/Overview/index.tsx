import React from 'react';
import { View } from 'react-native';

import type { TStoryDetail, TTagDetail } from '@/models/types';

import TextBase from '@/component/TextBase';
import TagLabel from '@/component/TagLabel';
import StoryDescription from '@/component/StoryDescription';

import styles from './styles';

type OverviewProps = { detail?: TStoryDetail };

const Overview: React.FC<OverviewProps> = ({ detail }) => {
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

export default Overview;
