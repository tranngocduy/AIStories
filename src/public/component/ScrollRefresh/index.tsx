import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';

import { runAfterInteractions } from '@app-util/app';

import { TScrollRefreshProps } from '@app-component/ScrollRefresh/types';

const ScrollRefresh = ({ onRefresh, ...props }: TScrollRefreshProps) => {
  const [isRefreshing, setRefreshing] = useState(false);

  const _onRefresh = () => setRefreshing(true);

  const _loadData = async () => {
    await onRefresh?.();
    setRefreshing(false);
  }

  useEffect(() => { if (!!isRefreshing) runAfterInteractions(_loadData, 350); }, [isRefreshing]);

  return <RefreshControl {...props} colors={['#000000']} tintColor='#000000' refreshing={isRefreshing} onRefresh={_onRefresh} />

}

export default ScrollRefresh;
