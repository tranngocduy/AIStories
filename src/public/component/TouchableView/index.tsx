import React from 'react';
import { TouchableOpacity } from 'react-native';

import { TTouchableViewProps } from '@app-component/TouchableView/types';

const TouchableView = ({ children, activeOpacity, ...props }: TTouchableViewProps) => {

  const _onPress = () => props.onPress?.();

  return (
    <TouchableOpacity {...props} activeOpacity={(activeOpacity || 0.5)} onPress={_onPress}>
      {children}
    </TouchableOpacity>
  )

}

export default TouchableView;
