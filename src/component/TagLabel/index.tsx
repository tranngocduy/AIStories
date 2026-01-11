import React from 'react';

import type { TTagDetail } from '@/models/types';

import TextBase from '@/component/TextBase';
import TouchableView from '@/component/TouchableView';

import styles from './styles';

type TTagLabelProps = { item: TTagDetail };

const TagLabel: React.FC<TTagLabelProps> = ({ item }) => {

  const _onPressTag = () => { };

  return (
    <TouchableView style={styles.container} onPress={_onPressTag}>
      <TextBase style={styles.label}>#{item?.name}</TextBase>
    </TouchableView>
  );

}

export default TagLabel;
