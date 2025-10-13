import React from 'react';
import { Text, TextProps } from 'react-native';

export const TextBase: React.FC<TextProps> = ({ children, ...props }) => {

  return <Text {...props} allowFontScaling={false}>{children}</Text>;

}
