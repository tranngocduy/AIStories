import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

type TTouchableViewProps = {
  children?: React.JSX.Element | React.JSX.Element[],
  activeOpacity?: number,
  disabled?: boolean,
  hitSlop?: number,
  style?: ViewStyle,
  onPress?: Function
}

const TouchableView = ({ children, activeOpacity, ...props }: TTouchableViewProps) => {

  const _onPress = () => props.onPress?.();

  return (
    <TouchableOpacity {...props} activeOpacity={(activeOpacity || 0.5)} onPress={_onPress}>
      {children}
    </TouchableOpacity>
  )

}

export default TouchableView;
