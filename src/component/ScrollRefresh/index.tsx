import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';

import { runAfterInteractions } from '@/utils/app';

type TScrollRefreshProps = { onRefresh: Function };

const ScrollRefresh: React.FC<TScrollRefreshProps> = ({ onRefresh, ...props }) => {
  const [isRefreshing, setRefreshing] = useState(false);

  const _onRefresh = () => setRefreshing(true);

  const _loadData = async () => {
    await onRefresh?.();
    setRefreshing(false);
  }

  useEffect(() => {
    if (!!isRefreshing) runAfterInteractions(_loadData, 350);
  }, [isRefreshing]);

  return <RefreshControl {...props} colors={['#000000']} tintColor='#000000' refreshing={isRefreshing} onRefresh={_onRefresh} />

}

export default ScrollRefresh;
