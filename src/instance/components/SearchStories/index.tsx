import React from 'react';
import { View } from 'react-native';

import { InstanceModal } from '@/components/InstanceModal';

import { styles } from './styles';

type TSearchStoriesProps = { resolve?: Function, onHide?: Function };

export const SearchStories: React.FC<TSearchStoriesProps> = ({ resolve, onHide }) => {

  return (
    <InstanceModal onHide={onHide}>
      <View style={styles.container}>
        <View style={styles.view}>

        </View>
      </View>
    </InstanceModal>
  )

}
