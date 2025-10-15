import React from 'react';

import { TTagDetail } from '@/models/types';
import { useStackNavigation } from '@/useHooks/useNavigation';

import { TextBase } from '@/components/TextBase';
import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';

type TTagLabelProps = { item: TTagDetail };

export const TagLabel: React.FC<TTagLabelProps> = ({ item }) => {

  const { navigate } = useStackNavigation();

  const _onPressTag = () => { };

  return (
    <TouchableView style={styles.container} onPress={_onPressTag}>
      <TextBase style={styles.label}>#{item?.name}</TextBase>
    </TouchableView>
  );

}

export default TagLabel;
