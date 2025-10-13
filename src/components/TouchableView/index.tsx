import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, GestureResponderEvent } from 'react-native';

export const TouchableView: React.FC<TouchableOpacityProps> = ({ children, activeOpacity, onPress, ...props }) => {

  const _onPress = (event: GestureResponderEvent) => onPress?.(event);

  return (
    <TouchableOpacity {...props} activeOpacity={(activeOpacity || 0.5)} onPress={_onPress}>
      {children}
    </TouchableOpacity>
  )

}
