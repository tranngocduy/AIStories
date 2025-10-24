import React from 'react';
import { View } from 'react-native';

import { dayjs } from '@/utils/timeTz';
import { TComment } from '@/models/types';

import { TextBase } from '@/components/TextBase';

import { styles } from './styles';

type TItemSubProps = { data: TComment };

export const ItemSub: React.FC<TItemSubProps> = ({ data }) => {

  const content = data?.content;

  const usernameReview = data?.user?.username || '';

  const createAt = !!data?.created_at ? dayjs(data?.created_at).format('DD/MM/YYYY') : '';

  return (
    <View style={styles.container}>
      <View style={styles.userView}>
        <TextBase style={styles.username} numberOfLines={1}>{usernameReview}</TextBase>
        <TextBase style={styles.createAt}>{createAt}</TextBase>
      </View>

      <View style={styles.separator} />

      <TextBase style={styles.content}>{content}</TextBase>
    </View>
  )

}
