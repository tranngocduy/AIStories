import React from 'react';
import { View } from 'react-native';

import { IStarSVG, IStarGraySVG } from '@/assets/svg';

import TextBase from '@/component/TextBase';

import styles from './styles';

type StoryScoreProps = { score?: number, isHideScore?: boolean, backgroundColor?: string, color?: string }

const StoryScore: React.FC<StoryScoreProps> = ({ score, isHideScore, backgroundColor = '#555555', color = '#FFFFFF' }) => {
  const STAR_POINT = 2;

  const stars = Math.min(((score || 0) / STAR_POINT), 5);
  const totalStar = (stars % 1) >= 0.5 ? Math.ceil(stars) : Math.floor(stars);

  const displayStar = new Array(totalStar).fill('');
  const displayStarGray = new Array(5 - totalStar).fill('');

  const displayScore = Number((score || 0)).toFixed(1);

  const _renderItem = (_: any, index: number) => <View key={index}><IStarSVG /></View>;

  const _renderItemGray = (_: any, index: number) => <View key={index}><IStarGraySVG /></View>;

  return (
    <View style={styles.container}>
      {!isHideScore && <View style={[styles.view, { backgroundColor }]}><TextBase style={[styles.label, { color }]}>{displayScore}</TextBase></View>}
      <View style={styles.star}>{displayStar?.map?.(_renderItem)}{displayStarGray?.map?.(_renderItemGray)}</View>
    </View>
  )

}

export default StoryScore;
