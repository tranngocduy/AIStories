import React from 'react';
import { View } from 'react-native';

import Typography from '@app-component/Typography';
import TouchableView from '@app-component/TouchableView';

import { TGroupProps } from '@app-screen/Tab.Dashboard/types';

import styles from './styles';

const Group = ({ data, label }: TGroupProps) => {

  const _onPressSeeAll = () => { }

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Typography style={styles.label}>{label}</Typography>
        {!!data?.[0] && <TouchableView hitSlop={12} onPress={_onPressSeeAll}><Typography style={styles.seeMore}>Xem tất cả</Typography></TouchableView>}
      </View>
    </View>
  )

}

export default Group;
